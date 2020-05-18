import React from 'react'
import Imagem1 from '../../images/plataformaProponente1.png'
import Imagem2 from '../../images/plataformaProponente2.png'
import Imagem3 from '../../images/plataformaProponente3.png'
import Imagem4 from '../../images/plataformaProponente4.png'

    class PlataformaProponentes extends React.Component {

        constructor(){

            super()

            this.state = {
                componenteAtivo: 'radar',
                imagem: Imagem1,
                titulo: 'Radar de patrocinadores',
                subtituloBold: 'Saia do óbvio e busque novos patrocinadores!',
                subtitulo: 'Temos uma lista de 62 mil CNPJs que já investiram em leis de incentivo, nós te ajudamos a encontrar os que mais se aproximam do perfil do seu projeto.',
            }

        }

        mudaComponenteAtivo = (componente) => {

            componente === 'radar' &&

            this.setState({
                componenteAtivo: componente,
                imagem: Imagem1,
                titulo: 'Radar de patrocinadores',
                subtituloBold: 'Saia do óbvio e busque novos patrocinadores!',
                subtitulo: 'Temos uma lista de 62 mil CNPJs que já investiram em leis de incentivo, nós te ajudamos a encontrar os que mais se aproximam do perfil do seu projeto.',
            })

            componente === 'cnpj' &&

            this.setState({
                componenteAtivo: componente,
                imagem: Imagem2,
                titulo: 'Busca por CNPJ',
                subtituloBold: 'Já tem uma empresa em mente?',
                subtitulo: 'Você pode também acessar o relatório de investimento de empresas específicas, assim você vai mais preparado pra reunião.',
            })

            componente === 'relatorios' &&

            this.setState({
                componenteAtivo: componente,
                imagem: Imagem3,
                titulo: 'Relatórios de Investimento',
                subtituloBold: 'Encontrou uma empresa interessante?',
                subtitulo: 'Veja o perfil de investimento dela nos últimos 4 anos. Assim como "O Poderoso Chefão" você vai conseguir montar uma proposta irrecusável.',
            })

            componente === 'atualizacoes' &&

            this.setState({
                componenteAtivo: componente,
                imagem: Imagem4,
                titulo: 'Novas atualizações',
                subtituloBold: 'Mantenha-se atualizado de novidades',
                subtitulo: 'Veja as movimentações do mercado no momento que elas acontecem. Nossas informações são integradas com as bases públicas e atualizadas em tempo real.',
            })

        }

        render(){

            return (

                <div>

                    <div className="landingPlataformaProponentesHeaderContainer">

                        <div className="landingPlataformaProponentesHeader">

                            <div className="landingPlataformaProponentesHeaderIcone" 
                                style={{
                                    backgroundColor: this.state.componenteAtivo === 'radar' ? '#71CAD4' : '', 
                                    color: this.state.componenteAtivo === 'radar' ? '#FFF' : ''
                                }} 
                                onClick={() => this.mudaComponenteAtivo('radar')}>

                                RADAR DE PATROCINADORES

                            </div>

                            <div className="landingPlataformaProponentesHeaderIcone"
                                style={{
                                    backgroundColor: this.state.componenteAtivo === 'cnpj' ? '#71CAD4' : '', 
                                    color: this.state.componenteAtivo === 'cnpj' ? '#FFF' : ''
                                }} 
                                onClick={() => this.mudaComponenteAtivo('cnpj')}>

                                BUSCA POR CNPJ

                            </div>

                            <div className="landingPlataformaProponentesHeaderIcone"
                                style={{
                                    backgroundColor: this.state.componenteAtivo === 'relatorios' ? '#71CAD4' : '', 
                                    color: this.state.componenteAtivo === 'relatorios' ? '#FFF' : ''
                                }} 
                                onClick={() => this.mudaComponenteAtivo('relatorios')}>

                                RELATÓRIOS DE INVESTIMENTO

                            </div>

                            <div className="landingPlataformaProponentesHeaderIcone"
                                style={{
                                    backgroundColor: this.state.componenteAtivo === 'atualizacoes' ? '#71CAD4' : '', 
                                    color: this.state.componenteAtivo === 'atualizacoes' ? '#FFF' : ''
                                }} 
                                onClick={() => this.mudaComponenteAtivo('atualizacoes')}>

                                NOVAS ATUALIZAÇÕES

                            </div>

                        </div>

                    </div>

                    <div className="landingPlataformaProponentesConteudoContainerDesktop">

                        <div className="landingPlataformaProponentesConteudo">

                            <div className="landingPlataformaProponentesTextoPlataforma">

                                <div className="landingPlataformaProponentesTextoPlataformaBotaoMobile">
                                    
                                    Ver preços
                                    
                                </div>

                                <div className="landingPlataformaProponentesTitulo">

                                    {this.state.titulo}

                                </div>

                                <div className="landingPlataformaProponentesBarra" />

                                <div className="landingPlataformaProponentesSubtituloBold">

                                    {this.state.subtituloBold}

                                </div>

                                <div className="landingPlataformaProponentesSubtitulo">

                                    {this.state.subtitulo}

                                </div>

                                <div className="landingPlataformaProponentesBotao">

                                    Ver preços

                                </div>

                            </div>

                            <div className="landingPlataformaProponentesTextoImagem">

                                <img className="imagemPreviewPlataforma" alt="imagemPlataformaProponente" src={this.state.imagem} />

                            </div>

                        </div>

                    </div>

                    {

                        /*


                            SEPARAÇÃO DIV DESKTOP E DIV MOBILE

                        
                        */

                    }

                    <div className="landingPlataformaProponentesConteudoContainerMobile">

                        <div className="landingPlataformaProponentesConteudoContainer">

                            <div className="landingPlataformaProponentesConteudo">

                                <div className="landingPlataformaProponentesTextoPlataforma">

                                    <div className="landingPlataformaProponentesTextoPlataformaBotaoMobile">
                                        
                                        Ver preços
                                        
                                    </div>

                                    <div className="landingPlataformaProponentesTitulo">

                                        Radar de patrocinadores

                                    </div>

                                    <div className="landingPlataformaProponentesBarra" />

                                    <div className="landingPlataformaProponentesSubtituloBold">

                                        Saia do óbvio e busque novos patrocinadores!

                                    </div>

                                    <div className="landingPlataformaProponentesSubtitulo">

                                        Temos uma lista de 62 mil CNPJs que já investiram em leis de incentivo, nós te ajudamos a encontrar os que mais se aproximam do perfil do seu projeto.

                                    </div>

                                    <div className="landingPlataformaProponentesBotao">

                                        Ver preços

                                    </div>

                                </div>

                                <div className="landingPlataformaProponentesTextoImagem">

                                    <img className="imagemPreviewPlataforma" alt="imagemPlataformaProponente" src={this.state.imagem} />

                                </div>

                            </div>

                        </div>



                        

                        <div className="landingPlataformaProponentesConteudoContainer">

                            <div className="landingPlataformaProponentesConteudo">

                                <div className="landingPlataformaProponentesTextoPlataforma">

                                    <div className="landingPlataformaProponentesTitulo">

                                        Busca por CNPJ

                                    </div>

                                    <div className="landingPlataformaProponentesBarra" />

                                    <div className="landingPlataformaProponentesSubtituloBold">

                                        Já tem uma empresa em mente?

                                    </div>

                                    <div className="landingPlataformaProponentesSubtitulo">

                                        Você pode também acessar o relatório de investimento de empresas específicas, assim você vai mais preparado pra reunião.

                                    </div>

                                    <div className="landingPlataformaProponentesBotao">

                                        Ver preços

                                    </div>

                                </div>

                                <div className="landingPlataformaProponentesTextoImagem">

                                    <img className="imagemPreviewPlataforma" alt="imagemPlataformaProponente" src={Imagem2} />

                                </div>

                            </div>

                            </div>



                                                    

                            <div className="landingPlataformaProponentesConteudoContainer">

                                <div className="landingPlataformaProponentesConteudo">

                                    <div className="landingPlataformaProponentesTextoPlataforma">

                                        <div className="landingPlataformaProponentesTitulo">

                                            Relatórios de Investimento

                                        </div>

                                        <div className="landingPlataformaProponentesBarra" />

                                        <div className="landingPlataformaProponentesSubtituloBold">

                                            Encontrou uma empresa interessante?

                                        </div>

                                        <div className="landingPlataformaProponentesSubtitulo">

                                            Veja o perfil de investimento dela nos últimos 4 anos. Assim como "O Poderoso Chefão" você vai conseguir montar uma proposta irrecusável.

                                        </div>

                                        <div className="landingPlataformaProponentesBotao">

                                            Ver preços

                                        </div>

                                    </div>

                                    <div className="landingPlataformaProponentesTextoImagem">

                                        <img className="imagemPreviewPlataforma" alt="imagemPlataformaProponente" src={Imagem3} />

                                    </div>

                                </div>

                            </div>



                                                    

                            <div className="landingPlataformaProponentesConteudoContainer">

                                <div className="landingPlataformaProponentesConteudo">

                                    <div className="landingPlataformaProponentesTextoPlataforma">

                                        <div className="landingPlataformaProponentesTitulo">

                                            Novas atualizações

                                        </div>

                                        <div className="landingPlataformaProponentesBarra" />

                                        <div className="landingPlataformaProponentesSubtituloBold">

                                            Mantenha-se atualizado de novidades

                                        </div>

                                        <div className="landingPlataformaProponentesSubtitulo">

                                            Veja as movimentações do mercado no momento que elas acontecem. Nossas informações são integradas com as bases públicas e atualizadas em tempo real.

                                        </div>

                                        <div className="landingPlataformaProponentesBotao">

                                            Ver preços

                                        </div>

                                    </div>

                                    <div className="landingPlataformaProponentesTextoImagem">

                                        <img className="imagemPreviewPlataforma" alt="imagemPlataformaProponente" src={Imagem4} />

                                    </div>

                                </div>

                            </div>

                    </div>

                </div>

            )

        }

    }

export default PlataformaProponentes;