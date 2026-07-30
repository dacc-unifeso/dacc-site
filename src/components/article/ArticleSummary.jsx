export function ArticleSummary({ title = "Neste artigo", children }) {
    return (
        <nav
            aria-label="Sumário do artigo"
            className="
                rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]
                p-5 shadow-lg shadow-black/5
            "
        >
            <h2
                className="
                    mb-4 text-xs font-black uppercase tracking-[0.18em]
                    text-[var(--accent-gold)]
                "
            >
                {title}
            </h2>

            <ol className="space-y-1">{children}</ol>
        </nav>
    );
}
