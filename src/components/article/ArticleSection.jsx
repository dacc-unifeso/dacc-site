import { ArticleTitle } from "./ArticleTitle";

export function ArticleSection({
    id,
    title,
    eyebrow,
    children,
    className = "",
}) {
    return (
        <section
            id={id}
            className={`
                scroll-mt-10 border-b border-[var(--border)] py-10
                first:pt-0 last:border-b-0 last:pb-0
                ${className}
            `}
        >
            {eyebrow && (
                <span
                    className="
                        mb-2 block text-xs font-black uppercase tracking-[0.18em]
                        text-[var(--accent-gold)]
                    "
                >
                    {eyebrow}
                </span>
            )}

            <ArticleTitle type="h2">{title}</ArticleTitle>
            <div className="space-y-5">{children}</div>
        </section>
    );
}
