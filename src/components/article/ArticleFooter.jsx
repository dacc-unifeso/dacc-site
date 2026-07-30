export function ArticleFooter({ children }) {
    return (
        <footer
            className="
                mt-10 rounded-3xl border border-[var(--border)]
                bg-[var(--card-bg)] p-6 text-center sm:p-8
            "
        >
            {children}
        </footer>
    );
}
