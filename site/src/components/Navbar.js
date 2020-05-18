import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../images/Simbiose_Social.png'
import MenuMobileInativo from '../images/mobilenavinativo.png'
import MenuMobileAtivo from '../images/mobilenavativo.png'

    class Navbar extends React.Component {

        constructor() {

            super()

            this.state = {



            }

        }

        render() {

            return (

                <div className="navbarContainer">

                    <div className="navbarContent">

                        <div className="navbarBranding">

                            <NavLink className="iconeNavbarLogo" to="/" onClick={() => this.props.fechaMenuMobile()}>

                            <img alt="logoSimbio" src={Logo} />

                            </NavLink>

                        </div>

                        <div className="navbarActions">

                            <NavLink className="iconeNavbar" to="/empresas">
                                Para empresas
                            </NavLink>

                            <NavLink className="iconeNavbar" to="/proponentes">
                                Para proponentes
                            </NavLink>

                            <NavLink className="iconeNavbar" to="/sobre-nos">
                                Sobre nós
                            </NavLink>

                            |

                            <a className="iconeNavbarAcao" href="https://simbiose.tech">
                                Login
                            </a>

                            <a className="iconeNavbarAcao-servico" href="#">
                                Contratar serviço
                            </a>

                        </div>

                        <div className="imagemMenuMobile" onClick={() => this.props.ativaMenuMobile()}>

                            {

                                this.props.menuMobileAtivo ? 

                                    <img alt="hamburguerMobile" className="imagemMenuMobileTag" src={MenuMobileAtivo} />   

                                :

                                    <img alt="hamburguerMobile" className="imagemMenuMobileTag" src={MenuMobileInativo} />                                

                            }

                        </div>

                    </div>

                </div>
            )
    
        }
    }

export default Navbar;