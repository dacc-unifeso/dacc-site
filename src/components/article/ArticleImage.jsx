export function ArticleImage({ src, alt, caption, className = "" }) {
    return (
        <figure
            className={`
                my-8 overflow-hidden rounded-2xl border border-[var(--border)]
                bg-[var(--card-bg)] ${className}
            `}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="block max-h-[32rem] w-full object-cover"
            />

            {caption && (
                <figcaption
                    className="
                        border-t border-[var(--border)] px-4 py-3 text-center
                        text-sm font-medium text-[var(--text-muted)]
                    "
                >
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
