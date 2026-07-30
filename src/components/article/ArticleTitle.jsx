const TITLE_STYLES = {
    h1: "text-4xl sm:text-5xl",
    h2: "text-2xl sm:text-3xl",
    h3: "text-xl sm:text-2xl",
    h4: "text-lg sm:text-xl",
    p: "text-xl sm:text-2xl",
};

export function ArticleTitle({
    type: Tag = "h2",
    children,
    id,
    className = "",
}) {
    return (
        <Tag
            id={id}
            className={`
                scroll-mt-24 mb-5 font-black leading-tight tracking-tight
                text-[var(--text)]
                ${TITLE_STYLES[Tag] ?? TITLE_STYLES.h2}
                ${className}
            `}
        >
            {children}
        </Tag>
    );
}
