import React from 'react'
import Logo from '../images/Simbiose_Social.png'

    class Footer extends React.Component {

        constructor() {

            super()

            this.state = {



            }

        }

        render() {
            
            const Hoje = new Date();
            const Ano = Hoje.getFullYear();

            return (

                <>

                <div className="landingFooter">

                    <div className="landingFooterContent">

                        <div className="landingFooterContentColunaImagem">

                            <img alt="imagemLogoFooter" src={Logo} />

                        </div>

                        <div className="landingFooterContentColunaInfo">

                            <div className="landingFooterContentColunaInfoTexto">

                                SIMBIOSE SOCIAL

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Home page

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Para empresas

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Para proponentes
                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Sobre nós

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Press

                            </div>

                        </div>

                        <div className="landingFooterContentColunaInfo">

                            <div className="landingFooterContentColunaInfoTexto">

                                ASSISTÊNCIA

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Central de ajuda

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Contato

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Email

                            </div>

                        </div>

                        <div className="landingFooterContentColunaInfo">

                            <div className="landingFooterContentColunaInfoTexto">

                                LEGAL

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Termos e condições

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Política de privacidade

                            </div>

                            <div className="landingFooterContentColunaInfoItem">

                                Termos de uso

                            </div>

                        </div>

                        <div className="landingFooterContentColunaNewsletter">

                            <div className="landingFooterContentColunaNewsletterTexto">

                                Assine nossa newsletter

                            </div>

                            <div className="landingFooterContentColunaNewsletterSubtitulo">

                                Enviamos novidades da Simbiose Social para você. 

                            </div>

                            <div className="landingFooterContentColunaNewsletterFormularioContainer">

                                <div className="landingFooterContentColunaNewsletterFormularioCima">

                                    <input className="landingFooterContentColunaNewsletterFormularioNome" placeholder="Digite seu nome" />

                                    <select className="landingFooterContentColunaNewsletterFormularioDropdown" placeholder="Selecione uma categoria">
                                        <option value="empresa">Sou uma empresa</option>
                                        <option value="proponente">Sou um proponente</option>
                                        <option value="servidor">Sou um servidor públio</option>
                                    </select>

                                </div>

                                <div className="landingFooterContentColunaNewsletterFormularioBaixo">

                                    <input className="landingFooterContentColunaNewsletterFormularioEmail" placeholder="Digite seu email" />

                                    <div className="landingFooterContentColunaNewsletterFormularioEnviar">Enviar</div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="landingFooterDescription">

                        Simbiose Assessoria em projetos culturais e desportivos - CNPJ: 26.984.592/0001-17 - Endereço: Avenida Angélica, 2529 - São Paulo - SP - CEP: 01227-200 Copyright © {Ano} Simbiose Social. Todos os direitos reservados.

                    </div>

                </div>

                <div className="landingFooterMobile">

                    <div className="landingFooterContentMobile">

                        <div className="landingFooterContentColunaImagem">

                            <img alt="imagemLogoFooter" src={Logo} />

                        </div>

                        <div className="landingFooterContentColunaContainer">

                            <div className="landingFooterContentColunaInfo">

                                <div className="landingFooterContentColunaInfoTexto">

                                    SIMBIOSE SOCIAL

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Home page

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Para empresas

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Para proponentes
                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Sobre nós

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Press

                                </div>

                            </div>

                            <div className="landingFooterContentColunaInfo">

                                <div className="landingFooterContentColunaInfoTexto">

                                    ASSISTÊNCIA

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Central de ajuda

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Contato

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Email

                                </div>

                            </div>

                            <div className="landingFooterContentColunaInfo">

                                <div className="landingFooterContentColunaInfoTexto">

                                    LEGAL

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Termos e condições

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Política de privacidade

                                </div>

                                <div className="landingFooterContentColunaInfoItem">

                                    Termos de uso

                                </div>

                            </div>

                        </div>

                        <div className="landingFooterContentColunaNewsletter">

                            <div className="landingFooterContentColunaNewsletterTexto">

                                Assine nossa newsletter

                            </div>

                            <div className="landingFooterContentColunaNewsletterSubtitulo">

                                Enviamos novidades da Simbiose Social para você. 

                            </div>

                        </div>

                    </div>

                    <div className="landingFooterDescription">

                        Simbiose Assessoria em projetos culturais e desportivos - CNPJ: 26.984.592/0001-17 - Endereço: Avenida Angélica, 2529 - São Paulo - SP - CEP: 01227-200 Copyright © {Ano} Simbiose Social. Todos os direitos reservados.

                    </div>

                </div>

                </>

            )

        }

    }

export default Footer;