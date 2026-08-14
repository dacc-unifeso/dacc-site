import { ARTICLES, BASE_URL } from './articles'
import { ArticleCard } from './card/ArticleCard'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

export function ArticlePages() {
 /** 
  * Vou deixar apenas uma lista de cards para começo, 
  * já que estou em dúvida em relação ao header da main.
  * @Yuri Me ajuda...
  */
    return (
        <div className="flex flex-row gap-6 m-4 animate-in fade-in duration-700">
            {
                ARTICLES.map(({ id, name, path, src, desc}) => {
                    return (
                            <ArticleCard 
                                name={name}
                                path={path}
                                key={id}
                                src={src}
                                desc={desc}
                            />
                    )
                })
            }
        </div>
    )
}