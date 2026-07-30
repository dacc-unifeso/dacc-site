export function ArticleParagraph({ children, lead = false, className = "" }) {
    return (
        <p
            className={`
                max-w-none font-medium leading-8 text-[var(--text-muted)]
                ${lead ? "text-lg text-[var(--text)] sm:text-xl" : "text-base sm:text-lg"}
                ${className}
            `}
        >
            {children}
        </p>
    );
}
