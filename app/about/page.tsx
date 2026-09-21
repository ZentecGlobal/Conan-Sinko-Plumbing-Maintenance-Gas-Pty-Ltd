import { redirect } from "next/navigation";
import { FileEdit } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import Container from "@/components/ui/Container";
import ContentPageShell from "@/components/admin/ContentPageShell";
import { CONTENT_SECTIONS } from "@/lib/admin/site-content-fields";
import { getAllSiteContent } from "@/lib/content/site-content";

export default async function AdminContentPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Same defense-in-depth pattern as /admin: the middleware (see
  // /middleware.ts, matcher "/admin/:path*") already blocks signed-out
  // requests to this route, and this server check runs again before any
  // HTML is rendered.
  if (!user) {
    redirect("/admin/login");
  }

  // Same source the public site reads from, so the editor always shows
  // what's actually live -- including the same Supabase-down fallback
  // behaviour the public pages get.
  const content = await getAllSiteContent();

  return (
    <Container className="py-10">
      {/* Header banner -- matches the Dashboard's visual language */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--admin-border)] bg-gradient-to-br from-[var(--admin-surface)] to-[var(--admin-bg)] px-6 py-8 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-flame/20 blur-3xl" />
          <div className="absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-spark/10 blur-3xl" />
        </div>
        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-flame/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-flame ring-1 ring-inset ring-flame/25">
            <FileEdit className="h-3 w-3" />
            Site editor
          </div>
          <h1 className="font-display text-3xl uppercase tracking-tight text-white sm:text-4xl">
            Website Content
          </h1>
          <p className="mt-2 max-w-xl text-white/60">
            Update the homepage, about, service area and call-to-action copy shown on the public site.
          </p>
        </div>
      </div>

      <ContentPageShell sections={CONTENT_SECTIONS} content={content} />
    </Container>
  );
}
