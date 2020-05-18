import React from 'react'
import Imagem1 from '../../images/plataformaEmpresa1.png'
import Imagem2 from '../../images/plataformaEmpresa2.png'
import Imagem3 from '../../images/plataformaEmpresa3.png'
import Imagem4 from '../../images/plataformaProponente4.png'

    class PlataformaEmpresas extends React.Component {

        constructor(){

            super()

            this.state = {
                componenteAtivo: 'radar',
                imagem: Imagem1,
                titulo: 'Radar de projetos',
                subtituloBold: '',
                subtitulo: 'São mais de 20 mil projetos captando recursos neste momento. Otimize o processo de busca analisando apenas aqueles que estejam alinhados com a sua estratégia de investimento.',
            }

        }

        mudaComponenteAtivo = (componente) => {

            componente === 'radar' &&

            this.setState({
                componenteAtivo: componente,
                imagem: Imagem1,
                titulo: 'Radar de projetos',
                subtituloBold: '',
                subtitulo: 'São mais de 20 mil projetos captando recursos neste momento. Otimize o processo de busca analisando apenas aqueles que estejam alinhados com a sua estratégia de investimento.',
            })

            componente === 'cnpj' &&

            this.setState({
                componenteAtivo: componente,
                imagem: Imagem2,
                titulo: 'Leis de Incentivo',
                subtituloBold: '',
                subtitulo: 'Nossas bases estão integradas com 25 diferentes leis de incentivo nos âmbitos federal, estadual e municipal. Faça a gestão dos seus investimentos em um lugar só.',
            })

            componente === 'relatorios' &&

            this.setState({
                componenteAtivo: componente,
                imagem: Imagem3,
                titulo: 'Auditoria',
                subtituloBold: '',
                subtitulo: 'Em 10 dias úteis auditamos os projetos mapeados para garantir a segurança do seu investimento. Entregamos um pacote de documentos consolidado e uma análise completa de risco assinada pelo escritório jurídico <span> CQS Advogados </span>',
            })

            componente === 'atualizacoes' &&

            this.setState({
                componenteAtivo: componente,
                imagem: Imagem4,
                titulo: 'Pós investimento',
                subtituloBold: '',
                subtitulo: 'Acompanhe a execução do projeto após o investimento. Programe envios automáticos de formulários e tenha acesso a um relatório de execução para mensurar o impacto social gerado.',
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

                                RADAR DE PROJETOS

                            </div>

                            <div className="landingPlataformaProponentesHeaderIcone"
                                style={{
                                    backgroundColor: this.state.componenteAtivo === 'cnpj' ? '#71CAD4' : '', 
                                    color: this.state.componenteAtivo === 'cnpj' ? '#FFF' : ''
                                }} 
                                onClick={() => this.mudaComponenteAtivo('cnpj')}>

                                LEIS DE INCENTIVO

                            </div>

                            <div className="landingPlataformaProponentesHeaderIcone"
                                style={{
                                    backgroundColor: this.state.componenteAtivo === 'relatorios' ? '#71CAD4' : '', 
                                    color: this.state.componenteAtivo === 'relatorios' ? '#FFF' : ''
                                }} 
                                onClick={() => this.mudaComponenteAtivo('relatorios')}>

                                AUDITORIA

                            </div>

                            <div className="landingPlataformaProponentesHeaderIcone"
                                style={{
                                    backgroundColor: this.state.componenteAtivo === 'atualizacoes' ? '#71CAD4' : '', 
                                    color: this.state.componenteAtivo === 'atualizacoes' ? '#FFF' : ''
                                }} 
                                onClick={() => this.mudaComponenteAtivo('atualizacoes')}>

                                PÓS INVESTIMENTO

                            </div>

                        </div>

                    </div>

                    <div className="landingPlataformaProponentesConteudoContainerDesktop">

                        <div className="landingPlataformaProponentesConteudo">

                            <div className="landingPlataformaProponentesTextoPlataforma">

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

                                    Ver mais sobre

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

                                        Radar de projetos

                                    </div>

                                    <div className="landingPlataformaProponentesBarra" />

                                    <div className="landingPlataformaProponentesSubtituloBold">

                                        

                                    </div>

                                    <div className="landingPlataformaProponentesSubtitulo">

                                        São mais de 20 mil projetos captando recursos neste momento. Otimize o processo de busca analisando apenas aqueles que estejam alinhados com a sua estratégia de investimento.

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

                                        Leis de Incentivo

                                    </div>

                                    <div className="landingPlataformaProponentesBarra" />

                                    <div className="landingPlataformaProponentesSubtituloBold">

                                        

                                    </div>

                                    <div className="landingPlataformaProponentesSubtitulo">

                                        Nossas bases estão integradas com 25 diferentes leis de incentivo nos âmbitos federal, estadual e municipal. Faça a gestão dos seus investimentos em um lugar só.

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

                                            Auditoria

                                        </div>

                                        <div className="landingPlataformaProponentesBarra" />

                                        <div className="landingPlataformaProponentesSubtituloBold">

                                            

                                        </div>

                                        <div className="landingPlataformaProponentesSubtitulo">

                                            Em 10 dias úteis auditamos os projetos mapeados para garantir a segurança do seu investimento. Entregamos um pacote de documentos consolidado e uma análise completa de risco assinada pelo escritório jurídico <span> CQS Advogados </span>'

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

                                            Pós investimento

                                        </div>

                                        <div className="landingPlataformaProponentesBarra" />

                                        <div className="landingPlataformaProponentesSubtituloBold">

                                            

                                        </div>

                                        <div className="landingPlataformaProponentesSubtitulo">

                                            Acompanhe a execução do projeto após o investimento. Programe envios automáticos de formulários e tenha acesso a um relatório de execução para mensurar o impacto social gerado.

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

export default PlataformaEmpresas;