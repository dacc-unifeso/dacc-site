export function ArticleContent({ children }) {
    return (
        <div
            className="
                rounded-3xl border border-[var(--border)] bg-[var(--card-bg)]
                p-6 shadow-xl shadow-black/5 sm:p-8 lg:p-10
            "
        >
            {children}
        </div>
    );
}
