import { IntroductionArticle } from '../../components/views'
import { ArticleAssemblyIntro } from './asm/ArticleAssemblyIntro';

export const BASE_URL = '/conteudo-tecnico'

export const ARTICLES = [
    {
        id:        'intro',
        name:      'O Modelo de Artigo',
        path:      `${BASE_URL}/introducao`,
        Component: IntroductionArticle,
        src:       '/articles/article-model.jpg',
        desc:      'Instruções sobre como os artigos escritos neste setor serão organizados, para melhor identificação e entendimento.'
    },
    {
        id:        'asm-intro',
        name:      'Introdução à Linguagem Assembly',
        path:      `${BASE_URL}/assembly-intro`,
        Component: ArticleAssemblyIntro,
        src:       '/articles/article-asm.jpg',
        desc:      'Aprenda a escrever seu primeiro "Olá Mundo!" em assembly. (Na real é um pouquinho mais que isso)'
    }
]