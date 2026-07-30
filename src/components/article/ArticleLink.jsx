export function ArticleLink({ href, children, external = false }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            className="
                font-bold text-[var(--accent-gold)] underline
                decoration-[var(--border)] decoration-2 underline-offset-4
                transition hover:decoration-[var(--accent-gold)]
            "
        >
            {children}
        </a>
    );
}
