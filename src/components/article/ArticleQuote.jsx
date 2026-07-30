export function ArticleQuote({ children, author }) {
    return (
        <blockquote
            className="
                relative my-8 overflow-hidden rounded-2xl border
                border-[var(--border)] bg-[var(--accent-purple-soft)]
                px-6 py-6 sm:px-8
            "
        >
            <span
                aria-hidden="true"
                className="
                    absolute -right-2 -top-8 text-8xl font-black
                    text-[var(--accent-gold-soft)]
                "
            >
                “
            </span>

            <p
                className="
                    relative text-lg font-bold italic leading-relaxed
                    text-[var(--text)] sm:text-xl
                "
            >
                {children}
            </p>

            {author && (
                <footer
                    className="
                        relative mt-4 text-sm font-black uppercase tracking-wider
                        text-[var(--accent-gold)]
                    "
                >
                    — {author}
                </footer>
            )}
        </blockquote>
    );
}
