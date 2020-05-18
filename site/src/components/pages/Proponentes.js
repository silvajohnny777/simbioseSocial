import React from 'react'
import OqueRadar from '../../images/oqueradar.png'
import HandShake from '../../images/handshake.png'
import Target from '../../images/target.png'
import Dollar from '../../images/dollar.png'
import PlanosProponente from '../actioncomponents/PlanosProponente'
import PerguntasERespostas from '../actioncomponents/PerguntasERespostas'
import LeisIncentifo from '../../images/leisincetivofoto.png'
import BuscaFiltros from '../../images/buscafiltros.png'
import ResultadosRelevantes from '../../images/resultadosrelevantes.png'
import RelatoriosDetalhados from '../../images/relatoriosdetalhados.png'
import DicasPersonalizadas from '../../images/dicaspersonalizadas.png'

    class Proponente extends React.Component {

        constructor() {

            super()

            this.state = {



            }

        }

        render() {

            return (

                <div>

                    <div className="paginaPropoentesHeader">

                        <div className="paginaPropoentesHeaderTexto">

                            <div className="paginaPropoentesHeaderTextoTitulo">

                                Radar de patrocinadores

                            </div>

                            <div className="paginaPropoentesHeaderTextosubTitulo">

                                Saia do óbvio. Otimize sua captação. Potencialize seu impacto social.

                            </div>

                            <div className="paginaPropoentesHeaderTextoBotao">

                                Realizar cadastro

                            </div>

                        </div>

                    </div>
                    
                    <div className="paginaPropoentesOQuee">

                        <div className="paginaPropoentesOQueeContainer">

                            <div className="paginaPropoentesOQueeConteudoEsquerdo">

                                <img alt="imagemOqueRadar" src={OqueRadar} />

                            </div>

                            <div className="paginaPropoentesOQueeConteudoDireito">

                                <div className="paginaPropoentesOQueeTitulo">

                                    O que é o radar de patrocinadores?

                                </div>

                                <div className="paginaPropoentesOQueeDescricao">

                                    Uma ferramenta que vai otimizar o processo de captação de recursos do seu projeto. Um sistema com informações de mais de 62 mil CNPJs que já investiram em leis de incentivo. Com inteligência de dados, indicamos quais patrocinadores mais se assemelham ao perfil do seu projeto. Veja também o histórico de investimentos destas empresas através de relatórios e monte propostas de patrocínio sob medida. Assim, você investe seu tempo de forma mais otimizada.

                                </div>

                            </div>

                            <div className="paginaPropoentesOQueeConteudoEsquerdoMobile">

                                <img className="paginaPropoentesOQueeConteudoEsquerdoMobileTag" alt="imagemOqueRadar" src={OqueRadar} />

                            </div>

                        </div>

                    </div>

                    <div className="paginaPropoentesBeneficios">

                        <div className="paginaPropoentesBeneficiosConteudo">

                            <div className="paginaPropoentesBeneficiosTexto">

                                <div className="paginaPropoentesBeneficiosTitulo">

                                    Benefícios da plataforma

                                </div>

                            </div>

                            <div className="paginaPropoentesBeneficiosCard">

                                <div className="paginaPropoentesBeneficiosCardConteudo">

                                    <div className="paginaPropoentesBeneficiosCardImagem">

                                        <img alt="imgHandShake" src={HandShake} />

                                    </div>

                                    <div className="paginaPropoentesBeneficiosCardTitulo">

                                        Novos patrocinadores

                                    </div>

                                    <div className="paginaPropoentesBeneficiosCardDescricao">

                                        Tenha a visibilidade de uma base que contém mais de 62 mil patrocinadores em leis de incentivo.

                                    </div>

                                </div>

                            </div>

                            <div className="paginaPropoentesBeneficiosCard">

                                <div className="paginaPropoentesBeneficiosCardConteudo">

                                    <div className="paginaPropoentesBeneficiosCardImagem">

                                        <img alt="imgTarget" src={Target} />

                                    </div>

                                    <div className="paginaPropoentesBeneficiosCardTitulo">

                                        Propostas assertivas

                                    </div>

                                    <div className="paginaPropoentesBeneficiosCardDescricao">

                                        Utilize dados para montar propostas feitas sob medida, baseada no histórico de investimento dos potenciais patrocinadores.

                                    </div>

                                </div>

                            </div>

                            <div className="paginaPropoentesBeneficiosCard">

                                <div className="paginaPropoentesBeneficiosCardConteudo">

                                    <div className="paginaPropoentesBeneficiosCardImagem">

                                        <img alt="imgDollar" src={Dollar} />

                                    </div>

                                    <div className="paginaPropoentesBeneficiosCardTitulo">

                                        Eficiência na captação

                                    </div>

                                    <div className="paginaPropoentesBeneficiosCardDescricao">

                                        Otimize a sua captação de recursos. Veja que empresas investem em projetos parecidos com o seu.

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="paginaPropoentesLeisDeIncentivo">

                        <div className="paginaPropoentesLeisDeIncentivoConteudo">

                            <div className="paginaPropoentesLeisDeIncentivoTexto">

                                <div className="tituloSecaoPaginaProponente">

                                    Leis de incentivo

                                </div>

                                <div className="barraSeparacao" />

                                <div className="subtituloSecaoPaginaProponente">

                                    Tenha a visibilidade do histórico de investimentos dos últimos 3 anos na Lei Rouanet e na Lei de Incentivo ao Esporte (Federal). Nossos dados vêm de bases públicas e são atualizados em tempo real. Sempre tem informação nova saindo do forno.

                                </div>

                            </div>

                            <div className="paginaPropoentesLeisDeIncentivoImagem">

                                <img alt="leisIncentivoImagem" className="paginaPropoentesLeisDeIncentivoImagemTag" src={LeisIncentifo} />

                            </div>

                        </div>

                    </div>

                    <div className="paginaPropoentesBuscaFiltro">

                        <div className="paginaPropoentesBuscaFiltroConteudo">

                            <div className="paginaPropoentesBuscaFiltroImagem">

                                <img className="paginaPropoentesBuscaFiltroImagemTag" alt="BuscaFiltroImagem" src={BuscaFiltros} />

                            </div>

                            <div className="paginaPropoentesBuscaFiltroTexto">

                                <div className="tituloSecaoPaginaProponente">

                                    Busca por fitros

                                </div>

                                <div className="barraSeparacao" />

                                <div className="subtituloSecaoPaginaProponente">

                                    62 mil CNPJs é muita coisa. Mas fique tranquilo, nossos filtros estão aqui pra isso! Você pode utilizar 9 diferentes filtros para descrever o seu projeto e obter os melhores resultados.

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="paginaPropoentesResultadosRelevantes">

                        <div className="paginaPropoentesResultadosRelevantesConteudo">

                            <div className="paginaPropoentesResultadosRelevantesTexto">

                                <div className="tituloSecaoPaginaProponente">

                                    Resultados relevantes

                                </div>

                                <div className="barraSeparacao" />

                                <div className="subtituloSecaoPaginaProponente">

                                    Uma vez que os filtros foram selecionados, nossos algoritmos começam a trabalhar. Com inteligência de dados, conseguimos encontrar as empresas mais relevantes para o seu projeto baseado em seus históricos de investimento.

                                </div>

                            </div>

                            <div className="paginaPropoentesResultadosRelevantesImagem">

                                <img alt="ResultadosRelevantesImagem" className="paginaPropoentesResultadosRelevantesImagemTag" src={ResultadosRelevantes} />

                            </div>

                        </div>

                    </div>

                    <div className="paginaPropoentesBuscaFiltro">

                        <div className="paginaPropoentesBuscaFiltroConteudo">

                            <div className="paginaPropoentesBuscaFiltroImagem">

                                <img className="paginaPropoentesRelatorioDetalhadoTag" alt="BuscaFiltroImagem" src={RelatoriosDetalhados} />

                            </div>

                            <div className="paginaPropoentesBuscaFiltroTexto">

                                <div className="tituloSecaoPaginaProponente">

                                    Relatórios detalhados

                                </div>

                                <div className="barraSeparacao" />

                                <div className="subtituloSecaoPaginaProponente">

                                    Achou AQUELA empresa? Clique nela e saiba ainda mais sobre como ela costuma investir em leis de incentivo. Elaboramos um relatório detalhado com informações relevantes para que você possa montar uma proposta feita sob medida.

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="paginaPropoentesDicasPersonalizadas">

                        <div className="paginaPropoentesDicasPersonalizadasConteudo">

                            <div className="paginaPropoentesResultadosRelevantesTexto">

                                <div className="tituloSecaoPaginaProponente">

                                    Dicas personalizadas

                                </div>

                                <div className="barraSeparacao" />

                                <div className="subtituloSecaoPaginaProponente">

                                    Não entendeu o que fazer com as informações do relatório? Criamos dicas personalizadas baseadas no perfil de investimento da empresa. Assim como "O Poderoso Chefão" você vai montar uma proposta irrecusável.

                                </div>

                            </div>

                            <div className="paginaPropoentesResultadosDicasPeronalizadas">

                                <img alt="PeronalizadasImagem" className="paginaPropoentesResultadosDicasPeronalizadasTag" src={DicasPersonalizadas} />

                            </div>

                        </div>

                    </div>

                    <PlanosProponente />

                    <PerguntasERespostas />

                </div>

            )

        }

    }

export default Proponente;