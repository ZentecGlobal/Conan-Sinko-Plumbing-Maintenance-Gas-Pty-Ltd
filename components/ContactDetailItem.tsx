import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type ContactDetailItemProps = {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  href?: string;
  className?: string;
};

export default function ContactDetailItem({
  icon: Icon,
  label,
  value,
  href,
  className = "",
}: ContactDetailItemProps) {
  const content = (
    <span className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors group-hover:bg-accent group-hover:text-accent-text">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          {label}
        </span>
        <span className="font-medium text-ink">{value}</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`group inline-flex ${className}`}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
