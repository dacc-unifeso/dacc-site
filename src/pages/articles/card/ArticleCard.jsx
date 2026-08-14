export function ArticleCard({ id, name, path, src, desc}) {
    return (
        <div
            id={id}
            className="
                w-64
                h-fit
                overflow-hidden
                bg-[var(--accent-purple-soft)]
                border-2
                border-[var(--border)]
                rounded-md
                hover:cursor-pointer
                hover:border-[var(--accent-purple)]
                transition-colors
                transition-transform
                duration-200
                hover:-translate-y-1
                shadow-[var(--shadow-md)]
            "
        >
            <a
                href={path}
                className="
                    flex
                    flex-col
                    w-full
                    h-full
                "
            >
                <img
                    src={src}
                    alt={name}
                    className="
                        w-full
                        h-40
                        object-cover
                    "
                />

                <div className="p-4">
                    <h1 className="
                        border-s-1 
                        border-[var(--accent-gold)] 
                        p-[8px] 
                        rounded-sm 
                        font-bold 
                        text-[var(--text)]
                    ">
                        {name}
                    </h1>
                    <p className="p-2 text-[var(--text-muted)]">
                        {desc}
                    </p>
                </div>
            </a>
        </div>
    )
}