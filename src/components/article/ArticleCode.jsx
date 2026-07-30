export function ArticleCode({ children, language }) {
    return (
        <div
            className="
                my-8 overflow-hidden rounded-2xl border border-[var(--border)]
                bg-[#09090b]
            "
        >
            {language && (
                <div
                    className="
                        flex items-center justify-between border-b
                        border-[var(--border)] bg-white/3 px-4 py-2
                    "
                >
                    <span
                        className="
                            text-xs font-black uppercase tracking-wider
                            text-[var(--accent-gold)]
                        "
                    >
                        {language}
                    </span>
                </div>
            )}

            <pre
                className="
                    custom-scrollbar overflow-x-auto p-5 text-sm leading-7
                    text-zinc-200
                "
            >
                <code>{children}</code>
            </pre>
        </div>
    );
}
