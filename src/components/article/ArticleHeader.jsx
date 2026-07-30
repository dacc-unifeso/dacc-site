export function ArticleHeader({
    category,
    title,
    description,
    author,
    date,
    readingTime,
    children,
}) {
    return (
        <header
            className="
                relative mb-10 overflow-hidden rounded-3xl border
                border-[var(--border)] bg-[var(--card-bg)] p-6
                shadow-2xl shadow-black/10 sm:p-8 lg:p-10
            "
        >
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute -right-24 -top-24 h-64 w-64
                    rounded-full bg-[var(--accent-purple-soft)] blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute -bottom-24 -left-24 h-56 w-56
                    rounded-full bg-[var(--accent-gold-soft)] blur-3xl
                "
            />

            <div className="relative">
                {category && (
                    <span
                        className="
                            mb-5 inline-flex items-center rounded-full border
                            border-[var(--border)] bg-[var(--accent-gold-soft)]
                            px-3 py-1 text-xs font-black uppercase tracking-[0.18em]
                            text-[var(--accent-gold)]
                        "
                    >
                        {category}
                    </span>
                )}

                <h1
                    className="
                        hero-title-glow max-w-3xl text-4xl font-black leading-tight
                        tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl
                    "
                >
                    {title}
                </h1>

                {description && (
                    <p
                        className="
                            mt-5 max-w-2xl text-base font-medium leading-relaxed
                            text-[var(--text-muted)] sm:text-lg
                        "
                    >
                        {description}
                    </p>
                )}

                {(author || date || readingTime) && (
                    <div
                        className="
                            mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t
                            border-[var(--border)] pt-5 text-sm font-semibold
                            text-[var(--text-muted)]
                        "
                    >
                        {author && <span className="text-[var(--text)]">Por {author}</span>}
                        {author && date && <span aria-hidden="true">•</span>}
                        {date && <time>{date}</time>}
                        {(author || date) && readingTime && <span aria-hidden="true">•</span>}
                        {readingTime && <span>{readingTime} de leitura</span>}
                    </div>
                )}

                {children && <div className="mt-6">{children}</div>}
            </div>
        </header>
    );
}
