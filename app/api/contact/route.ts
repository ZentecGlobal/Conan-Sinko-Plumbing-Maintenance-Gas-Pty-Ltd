import { business } from "@/lib/constants";

/**
 * Receives website enquiries and emails them to the business via Resend.
 *
 * Env vars (set in .env.local locally and in the hosting dashboard for production):
 *   RESEND_API_KEY     Resend API key with sending access
 *   CONTACT_TO_EMAIL   Where leads go (the client). Comma-separate for several addresses.
 *   CONTACT_BCC_EMAIL  Agency copy of every lead (optional). Comma-separate for several.
 *   CONTACT_FROM_EMAIL Sender, on a domain verified in Resend,
 *                      e.g. "Sinko Plumbing Website <leads@yourdomain.com.au>"
 */

type Enquiry = {
  name?: string;
  phone?: string;
  email?: string;
  suburb?: string;
  service?: string;
  message?: string;
  page?: string;
  /** Honeypot: hidden from people, bots tend to fill it in */
  company?: string;
};

const LIMITS = { name: 100, phone: 40, email: 200, suburb: 100, service: 100, message: 5000, page: 200 };

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots fill every field; pretend it worked so they don't retry.
  if (clean(body.company, 200)) return Response.json({ ok: true });

  const data = {
    name: clean(body.name, LIMITS.name),
    phone: clean(body.phone, LIMITS.phone),
    email: clean(body.email, LIMITS.email),
    suburb: clean(body.suburb, LIMITS.suburb),
    service: clean(body.service, LIMITS.service),
    message: clean(body.message, LIMITS.message),
    page: clean(body.page, LIMITS.page),
  };

  if (!data.name || !data.phone || !data.message) {
    return Response.json({ ok: false, error: "Please fill in your name, phone number and message." }, { status: 400 });
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ ok: false, error: "Please check your email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL?.split(",").map((e) => e.trim()).filter(Boolean);
  const bcc = process.env.CONTACT_BCC_EMAIL?.split(",").map((e) => e.trim()).filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to?.length || !from) {
    console.error("Contact form: RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set");
    return Response.json({ ok: false, error: "Our form is temporarily unavailable." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email || "Not provided"],
    ["Suburb", data.suburb || "Not provided"],
    ["Service", data.service || "Not selected"],
    ["Sent from", data.page || "Website"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#202a32">
      <h2 style="margin:0 0 16px;color:#0b1f33">New website enquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:8px 12px;border:1px solid #d6dadc;background:#f4f7f8;font-weight:bold;width:120px">${label}</td><td style="padding:8px 12px;border:1px solid #d6dadc">${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px;color:#0b1f33">Message</h3>
      <p style="white-space:pre-wrap;margin:0;padding:12px;background:#f4f7f8;border-radius:8px">${escapeHtml(data.message)}</p>
      <p style="margin-top:24px;font-size:12px;color:#56626c">Reply to this email or call ${escapeHtml(data.phone)} to respond.</p>
    </div>`;

  const text = [...rows.map(([l, v]) => `${l}: ${v}`), "", "Message:", data.message].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      ...(bcc?.length ? { bcc } : {}),
      ...(data.email ? { reply_to: data.email } : {}),
      subject: `NEW LEAD: ${data.service || "Enquiry"} from ${data.name} (${business.shortName} website)`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend error", res.status, await res.text());
    return Response.json({ ok: false, error: "We couldn't send your message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
