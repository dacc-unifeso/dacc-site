export function ArticleNote({ title = "Observação", children }) {
    return (
        <aside
            className="
                my-7 rounded-2xl border border-[var(--border)]
                bg-[var(--accent-gold-soft)] p-5
            "
        >
            <strong
                className="
                    mb-2 block text-sm font-black uppercase tracking-wider
                    text-[var(--accent-gold)]
                "
            >
                {title}
            </strong>

            <div className="font-medium leading-7 text-[var(--text-muted)]">
                {children}
            </div>
        </aside>
    );
}
