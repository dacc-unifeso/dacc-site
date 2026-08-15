import { 
  Article, 
  ArticleHeader, 
  ArticleLayout,
  ArticleSummary,
  ArticleSummaryItem,
  ArticleContent,
  ArticleSection,
  ArticleParagraph,
  ArticleList,
  ArticleListItem,
  ArticleQuote,
  ArticleLink,
  ArticleFooter
} from '../../../components/article'

/**
 * TODO: Terminar artigo
 */
export function ArticleAssemblyIntro() {
    return (
        <Article>
            <ArticleHeader
                category="Teoria/Tutorial"
                title="Introdução à Linguagem Assembly"
                description="
                Neste artigo você vai aprender a escrever 
                seu primeiro 'Olá Mundo!' em Assembly x86/64,
                e mais alguns conceitos importantes para entender o 
                porquê de programarmos do jeito que programamos hoje em dia.
                "
                author="Andrea Neto"
                date="14 de agosto de 2026"
                readingTime="10 minutos"
            />
            <ArticleLayout
                summary={
                    <ArticleSummary>
                        <ArticleSummaryItem href="#asm-intro">
                          1. Meu Deus... Por quê Assembly?!
                        </ArticleSummaryItem>
                    </ArticleSummary>
                }
            >
                <ArticleContent>
                    <ArticleSection
                        id="asm-intro"
                        eyebrow="Introdução"
                        title="Meu Deus... Por quê Assembly?!"
                    >
                        <ArticleParagraph>
                            Ora, a resposta é simples: no final do dia, <strong>TUDO</strong> vira 
                            Assembly.
                        </ArticleParagraph>

                    </ArticleSection>
                </ArticleContent>
            </ArticleLayout>

            <ArticleFooter>
                <p
                    className="
                        text-sm
                        font-semibold
                        text-[--text-muted]
                    "
                >
                    Última atualização: 14 de agosto de 2026.
                </p>
            </ArticleFooter>


        </Article>
    )
}