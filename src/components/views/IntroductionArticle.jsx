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
  ArticleFooter,

} from '../article'

export function IntroductionArticle() {
    return (
        <Article>
            <ArticleHeader
                category="Teoria"
                title="O modelo de artigo"
                description="
                  Instruções sobre como os artigos escritos neste setor serão
                  organizados, para melhor identificação e entendimento.
                "
                author="Andrea Neto"
                date="14 de julho de 2026"
                readingTime="5 minutos"
            />

            <ArticleLayout
                summary={
                    <ArticleSummary>
                        <ArticleSummaryItem href="#intro">
                          1. Introdução
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#about-model">
                          1.1 Sobre o modelo
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#model-explanation">
                          2. Modelo: Explicação
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#problem-solved">
                          2.1 O problema resolvido
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#needed-knowledge">
                          2.2 Nível de entendimento necessário
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#estimated-time">
                          2.3 Tempo estimado de leitura
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#reading-habits">
                          2.3.1 Hábito de leitura
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#example-language">
                          2.4 Linguagem de exemplo
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#other-languages">
                          2.4.1 Outras linguagens
                        </ArticleSummaryItem>

                        <ArticleSummaryItem href="#content-type">
                          2.5 Tipo de conteúdo
                        </ArticleSummaryItem>
                    </ArticleSummary>
                }
            >
                <ArticleContent>
                    <ArticleSection
                        id="intro"
                        eyebrow="Introdução"
                        title="1. Introdução: Boas-Vindas"
                    >
                        <ArticleParagraph lead>
                          Olá! Bem-vindo(a) ao primeiro tópico que você deve compreender antes
                          de começar a estudar o setor de conteúdo técnico do DACC.
                        </ArticleParagraph>

                        <ArticleParagraph>
                          Se você já tem algum familiaridade com linguagens de baixo nível ou C,
                          estes artigos serão úteis como forma de revisão, e também como possível entendimento
                          mais aprofundado de tópicos não tão visados pelas grades padrão.
                          Ah! E não se preocupe quanto ao entendimento rápido das coisas, você não tem que
                          entender tudo de uma vez só, e quanto mais seu cérebro se prender a isso,
                          menor a chance de você entender de qualquer forma. Então se desprenda de qualquer
                          orgulho, e foque no que você mesmo decidiu que importa para você.
                        </ArticleParagraph>
                      <ArticleSection
                          id="about-model"
                          eyebrow="Explicação"
                          title="1.1 Sobre o modelo"
                      >
                          <ArticleParagraph>
                            Seguiremos um modelo bem simples de escrita quanto a esses artigos, afinal,
                            a intenção é facilitar nossas vidas com exemplos simples e diretos, e não complicar
                            o que já é complicado por natureza.
                          </ArticleParagraph>

                          <ArticleParagraph>
                            O modelo se dará por:
                          </ArticleParagraph>

                          <ArticleList>

                              <ArticleListItem>
                                  <strong className="text-[--text]">
                                    O problema resolvido
                                  </strong>{" "}
                              </ArticleListItem>

                              <ArticleListItem>
                                  <strong className="text-[--text]">
                                    Nível de entendimento necessário
                                  </strong>{" "}
                              </ArticleListItem>

                              <ArticleListItem>
                                  <strong className="text-[--text]">
                                    Tempo estimado de leitura
                                  </strong>{" "}
                              </ArticleListItem>

                              <ArticleListItem>
                                  <strong className="text-[--text]">
                                    Linguagem (ou pseudo-linguagem) utilizada como exemplo
                                  </strong>{" "}
                              </ArticleListItem>

                              <ArticleListItem>
                                <strong className="text-[--text]">
                                  Tipo de conteúdo
                                </strong>
                              </ArticleListItem>
                          </ArticleList>

                      </ArticleSection>
                    </ArticleSection>


                    <ArticleSection
                      id="model-explanation"
                      eyebrow="Explicação"
                      title="2. Modelo: Explicando os tópicos"
                    >

                      <ArticleParagraph lead>
                        Segue a explicação baseada na lista de itens contidos em <a href="#about-model">1.1 Sobre o modelo</a>:
                      </ArticleParagraph>

                      <ArticleSection
                        id="problem-solved"
                        title="2.1 O problema resolvido"
                      >

                        <ArticleParagraph>
                          Antes de entender como as coisas funcionam, acho legal entendermos o porquê de elas precisarem funcionar.
                        </ArticleParagraph>

                        <ArticleParagraph>
                          Absolutamente nenhuma peça de software é criada sem um propósito, e geralmente esse propósito é resolver
                          um problema. Esse problema, de acordo com alguns dos gênios que formaram a base do raciocínio lógico e matemático como um todo,
                          já é resolvido pela metade se soubermos o descrever corretamente, e é esse um papel importantíssimo para nós
                          como cientistas da computação.
                        </ArticleParagraph>

                        <ArticleParagraph>
                          De acordo com essa afirmação, cada tópico terá (inclusive no card no setor do site) a descrição do problema
                          que o artigo ajudará a resolver, fazendo com que, se você tem um problema, poderá procurar pela solução de forma
                          mais explícita, e não precisará recorrer a métodos de procura não tão eficazes para problemas específicos.
                        </ArticleParagraph>

                      </ArticleSection>
                      <ArticleSection
                        id="needed-knowledge"
                        title="2.2 Nível de entendimento necessário"
                      >
                        <ArticleParagraph>
                            Já parou para pensar sobre como o homem conseguiu pisar na lua? Tenho certeza
                            que esse pensamento já cruzou a sua cabeça, assim como cruzou a minha por inúmeras vezes.
                            Entretanto, também tenho certeza de que esse tópico é trivial
                            para esta explicação, mas a intenção de trazer este questionamento de volta aos
                            seus neurônios é indagar: quanto tempo, e qual quantidade de conhecimento foi
                            necessária para que chegássemos a esse ponto? Me desculpe a quebra de expectativa, mas
                            sinceramente... Eu não sei.
                            O que sei é que cada engenheiro, matemático, físico, químico e as pessoas que ocupam
                            outros cargos importantes nas agências espaciais não nasceram sabendo tudo que era necessário.
                        </ArticleParagraph>
                        <ArticleParagraph>
                            Vamos nos espelhar nos inteligentes! Se nem eles sabiam o que estavam fazendo no começo,
                            por que você tem que saber? É inútil e até contra-intuitivo querer aprender algo complexo quando você não sabe
                            a base para tal, por este motivo, cada artigo será criado de forma a explicitar os conhecimentos
                            necessários para o entendimento do mesmo, e ao mesmo tempo, classificando-os com as tags de iniciante, intermediário
                            ou avançado. Não queremos afobação, apenas entendimento gradual.
                            Lembre-se: devagar e sempre.
                        </ArticleParagraph>


                      </ArticleSection>
                      <ArticleSection
                        id="estimated-time"
                        title="2.3 Tempo estimado de leitura"
                      >


                        <ArticleParagraph>
                            Se você é como eu, que na infância e adolescência odiava ler, esse tópico vai te esclarecer algumas coisas.
                        </ArticleParagraph>
                        <ArticleParagraph>
                            Sejamos sinceros: a leitura é algo de extrema importância para nós programadores, e isso infelizmente é algo
                            que se você não desenvolveu anteriormente, terá de desenvolver agora. O propósito deste tópico é explicar
                            sobre o tempo estimado de leitura, em que, a palavra 'estimado' será tratada com seriedade e
                            literalidade, já que cada pessoa possui sua própria forma, tempo necessário e taxa de informações absorvidas
                            no momento de ler e entender as coisas.
                        </ArticleParagraph>

                        <ArticleSection
                          id="reading-habits"
                          title="2.3.1 Hábito de leitura"
                        >
                          <ArticleParagraph>
                            De forma direta: se você não tem o hábito de ler ainda, não se preocupe, os artigos marcados com a tag
                            iniciante serão formados por frases que contenham palavras simples, curtas e diretas,
                            tentando fazer com que a compreensão não dependa tanto da leitura em si, mas do conceito que ela passa.
                          </ArticleParagraph>

                        </ArticleSection>


                      </ArticleSection>
                      <ArticleSection
                        id="example-language"
                        title="2.4 Linguagem de exemplo"
                      >
                        <ArticleParagraph>
                            Agora entramos em um tópico complicado. Muitas pessoas têm dificuldade em entender <i>snippets</i> de código
                            simplesmente por não serem escritos em uma linguagem cuja sintaxe seja de entendimento do estudante. Com
                            base nisso, decidi adotar a linguagem C como padrão para os artigos, então tenha como pré-requisito aprender
                            pelo menos a sintaxe C para poder acompanhar os artigos.
                        </ArticleParagraph>
                        <ArticleParagraph>
                            <ArticleQuote>
                                "Mas seu André, C é muito complicado! Não tenho tempo para isso, preciso estudar o que vai me garantir
                                    um trabalho o mais rápido possível."
                            </ArticleQuote>
                        </ArticleParagraph>
                        <ArticleParagraph>
                            Não se preocupe, faço questão de que os <i>snippets</i> sejam escritos também em uma pseudo-linguagem muito conhecida
                            que foi criada justamente para o ensino: Portugol. Se você aprendeu Portugol com o nosso guru da programação brasileira
                            <ArticleLink href="https://www.youtube.com/@cursoemvideo" external={true}> Gustavo Guanabara </ArticleLink>, ou por outras vias e meios,
                            fique tranquilo que você não ficará de fora do entendimento completo dos artigos.
                        </ArticleParagraph>
                        <ArticleSection
                          id="other-languages"
                          title="2.4.1 Outras linguagens"
                        >

                          <ArticleParagraph>
                              Sobre <i>snippets</i> em outras linguagens, serão adicionados ao longo do tempo, porém na primeira versão de cada
                              artigo, as duas únicas linguagens disponíveis serão C e Portugol. Esta decisão foi tomada em virtude de produtividade
                              para a escrita dos artigos, e pela simplicidade da sintaxe da linguagem C, ao mesmo tempo não descartando permutações
                              de conceitos complexos, mas ainda assim mantendo a simplicidade da sintaxe. E Portugol por muitos programadores terem
                              começado a ver seus primeiros algoritmos nessa linguagem.
                          </ArticleParagraph>

                        </ArticleSection>


                      </ArticleSection>

                      <ArticleSection
                        id="content-type"
                        title="2.5 Tipo de conteúdo"
                      >
                        <ArticleParagraph>
                            Os artigos também serão separados por tipo de conteúdo, isso significa que teremos artigos focados em determinadas áreas
                            específicas, sejam elas:

                        </ArticleParagraph>
                        <ArticleList ordered={false}>

                            <ArticleListItem>
                              <strong className="text-[--text]">
                                Teorias
                              </strong>
                            </ArticleListItem>

                            <ArticleListItem>
                              <strong className="text-[--text]">
                              Tutoriais práticos
                              </strong>
                            </ArticleListItem>

                            <ArticleListItem>
                              <strong className="text-[--text]">
                              Referências de livros
                              </strong>
                            </ArticleListItem>

                            <ArticleListItem>
                              <strong className="text-[--text]">
                              Traduções de artigos em outro idioma
                              </strong>
                            </ArticleListItem>

                            <ArticleListItem>
                              <strong className="text-[--text]">
                              Mini-projetos
                              </strong>
                            </ArticleListItem>

                        </ArticleList>
                        <ArticleParagraph>
                            Todos os tipos de conteúdo serão importantes para a sua formação como cientista da computação, e faço questão de deixar mais uma
                            mensagem: para nós programadores, o que importa nos estudos não é o resultado final, e sim o que você aprende no processo.
                        </ArticleParagraph>

                      </ArticleSection>
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
                    Última atualização: 14 de julho de 2026.
                </p>
            </ArticleFooter>
        </Article>
    )
}
