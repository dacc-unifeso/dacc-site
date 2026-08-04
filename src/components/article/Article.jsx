export function Article({ children, className = "" }) {
    return (
        <div
            className={`
                bg-[var(--page-bg)]
                px-4
                py-10
                text-[var(--text)]
                sm:px-6
                lg:px-8
                ${className}
            `}
        >
            <article
                className="
                    animate-in
                    fade-in
                    duration-700
                    mx-auto
                    w-full
                    max-w-4xl
                "
            >
                {children}
            </article>
        </div>
    );
}
