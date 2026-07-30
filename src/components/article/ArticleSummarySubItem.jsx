export function ArticleSummarySubItem({ href, children }) {
    return (
        <li>
            <a
                href={href}
                className="
                    block rounded-md px-3 py-1.5 text-xs font-medium
                    text-[var(--text-muted)] transition
                    hover:bg-[var(--accent-purple-soft)] hover:text-[var(--text)]
                "
            >
                {children}
            </a>
        </li>
    );
}
