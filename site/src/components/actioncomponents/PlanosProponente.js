import React from 'react'

    class PlanosProponente extends React.Component {

        constructor() {
            
            super()

            this.state = {
                plano: 1,
            }

        }

        alteraPlano = (plano) => {

            this.setState({
                plano: plano
            })

        }

        render() {

            return (

                <div>

                    <div className="paginaPropoentesPlanosProponenteDesktop">

                        <div className="paginaPropoentesPlanosProponenteContainer">

                            <div className="paginaPropoentesPlanosProponenteTexto">

                                Escolha o plano alinhado a você

                            </div>

                            <div className="paginaPropoentesPlanosProponentePlanosHeader">

                                <div className="paginaPropoentesPlanosProponentePlano" 
                                onClick={() => this.alteraPlano(1)}
                                style={{
                                    backgroundColor: this.state.plano === 1 ? '#1F99A7' : '',
                                    color: this.state.plano === 1 ? '#FFF' : ''
                                }}>

                                    <span className="paginaPropoentesPlanosTextoBold">1</span> USUÁRIO

                                </div>

                                <div className="paginaPropoentesPlanosProponentePlano"
                                onClick={() => this.alteraPlano(2)}
                                style={{
                                    backgroundColor: this.state.plano === 2 ? '#1F99A7' : '',
                                    color: this.state.plano === 2 ? '#FFF' : ''
                                }}>

                                    <span className="paginaPropoentesPlanosTextoBold">3</span> USUÁRIOS

                                </div>

                                <div className="paginaPropoentesPlanosProponentePlano"
                                onClick={() => this.alteraPlano(3)}
                                style={{
                                    backgroundColor: this.state.plano === 3 ? '#1F99A7' : '',
                                    color: this.state.plano === 3 ? '#FFF' : ''
                                }}>

                                    <span className="paginaPropoentesPlanosTextoBold">5</span> USUÁRIOS

                                </div>

                            </div>

                            <div className="paginaPropoentesPlanosProponenteCards">

                                <div className="paginaPropoentesPlanosProponenteCard">

                                    <div className="paginaPropoentesPlanosProponenteCardPeriodicidade">

                                        TESTE DA PLATAFORMA

                                    </div>

                                    <div className="barraDivideCardProponentePlanos" />

                                    <div className="paginaPropoentesPlanosProponenteCardPreco">

                                        <div className="paginaPropoentesPlanosProponenteCardValor">

                                            Grátis

                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardValorDescricao">

                                            

                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardValorTotal">

                                            

                                        </div>

                                    </div>

                                    <div className="paginaPropoentesPlanosProponenteCardConteudo">

                                        Agende um teste do sistema com a nossa equipe

                                    </div>

                                    <div className="paginaPropoentesPlanosProponenteCardFooter">

                                        <div className="paginaPropoentesPlanosProponenteCardFooterConteudo">

                                            <div className="paginaPropoentesPlanosProponenteCardFooterBotao">

                                                Realizar Cadastro

                                            </div>

                                            <div className="paginaPropoentesPlanosProponenteCardFooterMensagem">

                                                Sujeito a termos e condições

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="paginaPropoentesPlanosProponenteCard" style={{
                                    backgroundColor: '#1F99A7',
                                    color: '#FFF'
                                }}>

                                    <div className="paginaPropoentesPlanosProponenteCardPeriodicidade" style={{
                                        color: '#FFF'
                                    }}>

                                        ASSINATURA ANUAL

                                    </div>

                                    <div className="barraDivideCardProponentePlanos" />

                                    <div className="paginaPropoentesPlanosProponenteCardPreco">

                                        
                                        
                                        <div className="paginaPropoentesPlanosProponenteCardValor" style={{
                                            color: '#FFF'
                                        }}>

                                            <span className="paginaPropoentesPlanosProponenteCardPrecoRS">R$</span>

                                            {
                                            
                                                this.state.plano === 1 ? '99,00' : 
                                                    this.state.plano === 2 ? '79,00' : '69,00'
                                                
                                            }

                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardValorDescricao" style={{
                                            color: '#FFF'
                                        }}>

                                            mensais por usuário cobrado

                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardValorTotal"style={{
                                                color: '#FFF'
                                            }}>

                                        {

                                            this.state.plano === 1 ? '' : 
                                                this.state.plano === 2 ? 'Total R$237,00 mensais' : 'Total R$345,00 mensais'

                                        }

                                        </div>

                                    </div>

                                    <div className="paginaPropoentesPlanosProponenteCardConteudo" style={{
                                        color: '#FFF'
                                    }}>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Desconto de 50%
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Mais de 62 mil patrocinadores
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Dados consolidados em relatórios
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Dicas de aporte
                                            
                                        </div>

                                    </div>

                                    <div className="paginaPropoentesPlanosProponenteCardFooter">

                                        <div className="paginaPropoentesPlanosProponenteCardFooterConteudo">

                                            <div className="paginaPropoentesPlanosProponenteCardFooterBotao" style={{
                                                backgroundColor: '#FFF',
                                                color: '#71CAD4'
                                            }}>

                                                Realizar Cadastro

                                            </div>

                                            <div className="paginaPropoentesPlanosProponenteCardFooterMensagem" style={{
                                                color: '#FFF'
                                            }}>

                                                Sujeito a termos e condições

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="paginaPropoentesPlanosProponenteCard">

                                    <div className="paginaPropoentesPlanosProponenteCardPeriodicidade">

                                        ASSINATURA SEMESTRAL

                                    </div>

                                    <div className="barraDivideCardProponentePlanos" />

                                    <div className="paginaPropoentesPlanosProponenteCardPreco">
                                        
                                        <div className="paginaPropoentesPlanosProponenteCardValor">

                                            <span className="paginaPropoentesPlanosProponenteCardPrecoRS">R$</span>

                                            {

                                                this.state.plano === 1 ? '139,00' : 
                                                    this.state.plano === 2 ? '109,00' : '99,00'
                                                
                                            }

                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardValorDescricao">

                                            mensais por usuário cobrado

                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardValorTotal">

                                            {

                                                this.state.plano === 1 ? '' : 
                                                    this.state.plano === 2 ? 'Total R$327,00 mensais' : 'Total R$495,00 mensais'

                                            }

                                        </div>

                                    </div>

                                    <div className="paginaPropoentesPlanosProponenteCardConteudo">

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Desconto de 50%
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Mais de 62 mil patrocinadores
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Dados consolidados em relatórios
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Dicas de aporte
                                            
                                        </div>

                                    </div>

                                    <div className="paginaPropoentesPlanosProponenteCardFooter">

                                        <div className="paginaPropoentesPlanosProponenteCardFooterConteudo">

                                            <div className="paginaPropoentesPlanosProponenteCardFooterBotao">

                                                Realizar Cadastro

                                            </div>

                                            <div className="paginaPropoentesPlanosProponenteCardFooterMensagem">

                                                Sujeito a termos e condições

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="paginaPropoentesPlanosProponenteCard">

                                    <div className="paginaPropoentesPlanosProponenteCardPeriodicidade">

                                        ASSINATURA MENSAL

                                    </div>

                                    <div className="barraDivideCardProponentePlanos" />

                                    <div className="paginaPropoentesPlanosProponenteCardPreco">
                                        
                                        <div className="paginaPropoentesPlanosProponenteCardValor">

                                            <span className="paginaPropoentesPlanosProponenteCardPrecoRS">R$</span>

                                            {

                                                this.state.plano === 1 ? '199,00' : 
                                                    this.state.plano === 2 ? '159,00' : '139,00'
                                                
                                            }

                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardValorDescricao">

                                            Mensais por usuário cobrado

                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardValorTotal">

                                        {

                                            this.state.plano === 1 ? '' : 
                                                this.state.plano === 2 ? 'Total R$477,00 mensais' : 'Total R$695,00 mensais'

                                        }

                                        </div>

                                    </div>

                                    <div className="paginaPropoentesPlanosProponenteCardConteudo">

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Desconto de 50%
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Mais de 62 mil patrocinadores
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Dados consolidados em relatórios
                                            
                                        </div>

                                        <div className="paginaPropoentesPlanosProponenteCardConteudoItem">
                                            
                                            Dicas de aporte
                                            
                                        </div>

                                    </div>

                                    <div className="paginaPropoentesPlanosProponenteCardFooter">

                                        <div className="paginaPropoentesPlanosProponenteCardFooterConteudo">

                                            <div className="paginaPropoentesPlanosProponenteCardFooterBotao">

                                                Realizar Cadastro

                                            </div>

                                            <div className="paginaPropoentesPlanosProponenteCardFooterMensagem">

                                                Sujeito a termos e condições

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="paginaPropoentesPlanosProponenteDesktopMensagem">

                        * Assinaturas para mais de 5 usuários entre em contato com o nosso atendimento suporte@simbiose.social

                    </div>

                </div>

            )

        }

    }

export default PlanosProponente;