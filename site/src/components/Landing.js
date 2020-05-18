import React from 'react'
import Brinks from '../images/brinks.png'
import JeJ from '../images/J&J.png'
import Facebook from '../images/facebook.png'
import IBM from '../images/ibm.png'
import Heineken from '../images/heineken.png'
import Sodexo from '../images/sodexo.png'
import Cogna from '../images/cogna.png'
import FrameMissao from '../images/FrameMissao.png'
import FrameCard1 from '../images/FrameCard1.png'
import FrameCard2 from '../images/FrameCard2.png'
import FrameCard3 from '../images/FrameCard3.png'
import PlataformaProponentes from './actioncomponents/PlataformaProponentes'
import PlataformaEmpresas from './actioncomponents/PlataformaEmpresas'
import Play from '../images/play.png'
import TiraDuvidas from '../images/tiraDuvidas.png'
import FotoDepoimento1 from '../images/fotoDepoimento1.png'
import IconeDepoimento from '../images/iconeDepoimento.png'
import Acreditam1 from '../images/artemisia_logo.png'
import Acreditam2 from '../images/cesnik_logo.png'
import Acreditam3 from '../images/dinamo_logo.png'
import Acreditam4 from '../images/empresab_logo.png'
import Acreditam5 from '../images/FGV.png'
import Acreditam6 from '../images/animus.png'
import Acreditam7 from '../images/image9.png'
import Acreditam8 from '../images/skoll_logo.png'

    class Landing extends React.Component {

        constructor() {

            super()

            this.state = {

            }

        }

        render() {

            return (

                <div>

                    <div className="bannerLandingPrincipal">

                        <div className="bannerTexto">

                            <div className="bannerTextoTitulo">
                                Escale o seu impacto social.
                            </div>

                            <div className="bannerTextoSubtitulo">
                                Plataforma que une empresas e proponentes semelhantes através da inteligência de dados
                            </div>

                            <div className="botoesContainer">

                                <div className="BannerBotao">Sou empresa</div>

                                <div className="BannerBotao">Sou proponente</div>

                            </div>

                        </div>

                    </div>

                    <div className="empresasParceiras">

                        <div className="empresa">

                            <img alt="imagem" src={JeJ} />

                        </div>

                        <div className="empresa">

                            <img alt="imagem" src={Heineken} />

                        </div>

                        <div className="empresa">

                            <img alt="imagem" src={Facebook} />

                        </div>

                        <div className="empresa">

                            <img alt="imagem" src={IBM} />

                        </div>

                        <div className="empresa">

                            <img alt="imagem" src={Brinks} />

                        </div>

                        <div className="empresa">

                            <img alt="imagem" src={Sodexo} style={{marginTop: '-10%'}} />

                        </div>

                        <div className="empresa">

                            <img alt="imagem" src={Cogna} style={{marginTop: '15%'}} />

                        </div>

                    </div>

                    <div className="landingMissao">

                        <div className="landingMissaoImagem">

                            <img className="landingMissaoImagemTag" alt="imagem" src={FrameMissao} />

                        </div>

                        <div className="landingMissaoTexto">

                            <div className="landingMissaoTextoTitulo">

                                A nossa missão é democratizar o acesso de recursos.

                            </div>

                            <div className="landingMissaoTextoSubtitulo">

                                Fundada em 2016, a partir de um sonho de fazer a diferença no mundo. Somos uma startup de tecnologia voltada para o impacto social. Especialistas em leis de incentivo, conectamos empresas, proponentes e governo para potencializar a transformação. Apostamos e acreditamos na democratização e transparência das informações e dados públicos como catalisadores de mudança social.
                            
                            </div>

                            <div className="landingMissaoAcao">

                                <div className="landingMissaoAcaoBotao">

                                    Saiba mais sobre nós

                                </div>

                                <div className="landingMissaoAcaoVideoApresentacao">

                                    <img alt="playVideo" src={Play} style={{marginRight: '10px'}} /> Veja o nosso vídeo de apresentação

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="landingVantagens">

                        <div className="landingVantagensTitulo">
                            
                            POR QUE A SIMBIOSE SOCIAL?

                        </div>

                        <div className="landingVantagensSubtitulo">
                            
                            Vantagens de ser simbiótico

                        </div>

                        <div className="landingVantagensCards">

                            <div className="landingVantagensCardInfo">

                                <div className="landingVantagensCardInfoImagem">

                                    <img className="landingVantagensCardInfoImagemTag" alt="imagem" src={FrameCard1} />

                                </div>

                                <div className="landingVantagensCardInfoTitulo">

                                    Dados, muitos dados

                                </div>

                                <div className="landingVantagensCardInfoSubtitulo">

                                    Mais de 25 anos de informações em Leis de Incentivo atualizadas em tempo real.

                                </div>

                            </div>

                            <div className="landingVantagensCardInfo">

                                <div className="landingVantagensCardInfoImagem">

                                  <img className="landingVantagensCardInfoImagemTag" alt="imagem" src={FrameCard2} />

                                </div>

                                <div className="landingVantagensCardInfoTitulo">

                                    <span className="palavraExtrangeira">“Match” </span> Simbiótico

                                </div>

                                <div className="landingVantagensCardInfoSubtitulo">

                                    Utilizamos nosso dados para criar relações duradouras entre patrocinadores e proponentes.

                                </div>

                            </div>

                            <div className="landingVantagensCardInfo">

                                <div className="landingVantagensCardInfoImagem">

                                    <img className="landingVantagensCardInfoImagemTag" alt="imagem" src={FrameCard3} />

                                </div>

                                <div className="landingVantagensCardInfoTitulo">

                                    Gestão completa

                                </div>

                                <div className="landingVantagensCardInfoSubtitulo">

                                    Plataforma unificada para patrocinadores e proponentes. Todo o processo, de ponta a ponta, em um lugar só.

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="landingPlataformaProponentes">

                        <div className="landingPlataformaProponentesTexto">

                            Nossa plataforma para <span className="textoCorDiferente">proponentes</span>

                        </div>

                        <PlataformaProponentes />

                    </div>

                    <div className="landingPlataformaEmpresas">

                        <div className="landingPlataformaEmpresasTexto">

                            Nossa plataforma para <span className="textoCorDiferente">empresas</span>

                        </div>

                        <PlataformaEmpresas />

                    </div>

                    <div className="landingTireSuasDuvidasContainer">

                        <div className="landingTireSuasDuvidasConteudo">

                            <div className="landingTireSuasDuvidasConteudoTexto">

                                <div className="landingTireSuasDuvidasConteudoTitulo">

                                    Tire suas dúvidas em relação às leis de incentivo

                                </div>

                                <div className="landingTireSuasDuvidasConteudoSubtitulo">

                                    Leis de incentivo podem ser nebulosas para muitas empresas e proponentes, acesse nosso canal especializado sobre o assunto e tenha acesso a todos os dados e informações que precisa saber sobre as diferentes leis no país.

                                </div>

                                <div className="landingTireSuasDuvidasConteudoBotao">

                                    Ir para o manual

                                </div>

                            </div>

                            <div className="landingTireSuasDuvidasConteudoImagem">

                                <img className="landingTireSuasDuvidasConteudoImagemTag" alt="tiraDuvidas" src={TiraDuvidas} />

                            </div>

                        </div>

                    </div>

                    <div className="landingDepoimentos">

                        <div className="landingDepoimentosTitulo">

                            Quem <span className="textoCorDiferente" style={{marginLeft: '5px', marginRight: '5px'}}>acredita</span> em nós

                        </div>

                        <div className="landingDepoimentosDepoimento">

                            <div className="landingDepoimentosDepoimentoHeader">

                                <div className="landingDepoimentosDepoimentoHeaderImagem">

                                    <img alt="fotoDepoimento" src={FotoDepoimento1} />

                                </div>

                                <div className="landingDepoimentosDepoimentoHeaderInfo">

                                    <div className="landingDepoimentosDepoimentoHeaderNome">

                                        Elizabeth Mendes

                                    </div>

                                    <div className="landingDepoimentosDepoimentoHeaderLocal">

                                        Gestora da Unidade Social Nossa Senhora Aparecida Recanto dos Anjos

                                    </div>

                                </div>

                                <div className="landingDepoimentosDepoimentoHeaderIcone">

                                    <img alt="iconeDepoimento" src={IconeDepoimento} />

                                </div>

                            </div>

                            <div className="landingDepoimentosDepoimentoMensagemContainer">

                                <div className="landingDepoimentosDepoimentoMensagem">

                                    “Eu chorei acho que uns três dias de alegria. Passei pedindo para Deus quase um ano para que a gente conseguisse esse recurso.”

                                </div>

                            </div>

                        </div>

                        <div className="landingDepoimentosDepoimentoEmpresasQueAcreditamContainer">

                            <div className="landingDepoimentosDepoimentoEmpresasQueAcreditam">

                                <div><img alt="empresaAcredita" src={Acreditam1} /></div>

                                <div><img alt="empresaAcredita" src={Acreditam2} /></div>

                                <div><img alt="empresaAcredita" src={Acreditam3} /></div>

                                <div><img alt="empresaAcredita" src={Acreditam4} /></div>

                                <div><img alt="empresaAcredita" src={Acreditam5} /></div>

                                <div><img alt="empresaAcredita" src={Acreditam6} /></div>

                                <div><img alt="empresaAcredita" src={Acreditam7} /></div>

                                <div><img alt="empresaAcredita" src={Acreditam8} /></div>

                            </div>

                        </div>

                    </div>

                </div>

            )

        }

    }

export default Landing;