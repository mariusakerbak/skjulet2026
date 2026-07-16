import { socialLinks } from "@/lib/social"

export function SocialLinks({
  className = "flex items-center gap-4",
  linkClassName = "block text-foreground/50 transition-colors hover:text-primary",
  iconClassName = "h-5 w-5",
}) {
  return (
    <ul className={className}>
      {socialLinks.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label={s.label}
          >
            <svg
              className={iconClassName}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d={s.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
