export function ArticleLayout({ summary, children }) {
    return (
        <div
            className="
                grid grid-cols-1 items-start gap-8
                lg:grid-cols-[15rem_minmax(0,1fr)]
            "
        >
            {summary && (
                <aside
                    className="
                        custom-scrollbar lg:sticky lg:top-24
                        lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto
                    "
                >
                    {summary}
                </aside>
            )}

            <div className="min-w-0">{children}</div>
        </div>
    );
}
