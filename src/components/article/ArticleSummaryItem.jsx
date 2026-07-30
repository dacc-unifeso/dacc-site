export function ArticleSummaryItem({ href, children }) {
    return (
        <li>
            <a
                href={href}
                className="
                    block rounded-lg border-l-2 border-transparent px-3 py-2
                    text-sm font-semibold leading-snug text-[var(--text-muted)]
                    transition duration-200 hover:border-[var(--accent-gold)]
                    hover:bg-[var(--accent-gold-soft)] hover:text-[var(--text)]
                "
            >
                {children}
            </a>
        </li>
    );
}
