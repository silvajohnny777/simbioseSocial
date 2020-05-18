import React from 'react'
import { NavLink } from "react-router-dom";

    class MenuMobile extends React.Component {

        constructor() {
            
            super() 

            this.state = {
                widthMenu: false,
            }

        }

        componentWillReceiveProps() {

            this.setState({
                widthMenu: this.props.ativaMenuMobile
            })

        }

        render() {

            return (

                <div className="menuMobileContainer">

                    <div className="menuMobile" style={{width: this.props.ativaMenuMobile ? '100%' : '0%',}}>

                        <div className="menuMobileConteudoInfo" style={{display: this.props.ativaMenuMobile ? '' : 'none',}}>

                            <div className="menuMobileConteudoInfoContainer">

                                <div className="menuMobileConteudoInfoColunaEsquerda">

                                    <div className="menuMobileConteudoInfoColunaTitulo">

                                        MENU

                                    </div>

                                    <div className="menuMobileConteudoInfoColunaItemContainer">

                                        <NavLink className="menuMobileConteudoInfoColunaItem" to="/empresas" onClick={() => this.props.ativaMenuMobileFuncao()}>

                                            Para empresas

                                        </NavLink>

                                    </div>

                                    <div className="menuMobileConteudoInfoColunaItemContainer">

                                        <NavLink className="menuMobileConteudoInfoColunaItem" to="/proponentes" onClick={() => this.props.ativaMenuMobileFuncao()}>

                                            Para proponentes

                                        </NavLink>

                                    </div>

                                    <div className="menuMobileConteudoInfoColunaItemContainer">

                                        <NavLink className="menuMobileConteudoInfoColunaItem" to="/sobre-nos" onClick={() => this.props.ativaMenuMobileFuncao()}>

                                            Sobre nós

                                        </NavLink>

                                    </div>

                                </div>

                                <div className="menuMobileConteudoInfoColunaDireita">

                                    <div className="menuMobileConteudoInfoColunaTitulo">

                                        ASSISTÊNCIA

                                    </div>

                                    <div className="menuMobileConteudoInfoColunaItem">

                                        Central de ajuda

                                    </div>

                                    <div className="menuMobileConteudoInfoColunaItem">

                                        Contato

                                    </div>

                                    <div className="menuMobileConteudoInfoColunaItem">

                                        Email

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            )

        }

    }

export default MenuMobile;