export function ArticleSummaryGroup({ title, children, open = false }) {
    return (
        <li>
            <details className="group" open={open}>
                <summary
                    className="
                        flex cursor-pointer list-none items-center gap-2 rounded-lg
                        px-3 py-2 text-sm font-semibold text-[var(--text-muted)]
                        transition hover:bg-[var(--accent-gold-soft)]
                        hover:text-[var(--text)]
                    "
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="
                            h-4 w-4 shrink-0 text-[var(--accent-gold)]
                            transition-transform duration-200 group-open:rotate-90
                        "
                    >
                        <path
                            d="M7 5l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span>{title}</span>
                </summary>

                <ol
                    className="
                        ml-5 mt-1 space-y-1 border-l border-[var(--border)] pl-3
                    "
                >
                    {children}
                </ol>
            </details>
        </li>
    );
}
