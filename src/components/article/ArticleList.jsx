export function ArticleList({ children, ordered = false }) {
    const Tag = ordered ? "ol" : "ul";

    return (
        <Tag
            className={`
                my-6 space-y-3 pl-6 text-base font-medium leading-7
                text-[var(--text-muted)] sm:text-lg
                ${ordered ? "list-decimal" : "list-disc"}
            `}
        >
            {children}
        </Tag>
    );
}
