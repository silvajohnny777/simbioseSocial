import React from 'react';
import './Landing.css';
import './components/pages/Proponentes.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import PageNotFound from "./components/PageNotFound"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Potencialize from "./components/Potencialize"
import Proponentes from "./components/pages/Proponentes"
import Empresas from "./components/pages/Empresas"
import SobreNos from "./components/pages/SobreNos"
import MenuMobile from './components/actioncomponents/MenuMobile'

class App extends React.Component {

  constructor() {

    super()

    this.state = {
      menuMobileAtivo: false,
    }

  }

  ativaMenuMobile = () => {

    this.setState({
      menuMobileAtivo: !this.state.menuMobileAtivo
    })

  }

  fechaMenuMobile = () => {

    this.setState({
      menuMobileAtivo: false
    })

  }

  render() {

    return (

      <div className="App">
        <div className="containerLanding">      
          <BrowserRouter>
              <Navbar 
                ativaMenuMobile={this.ativaMenuMobile}
                menuMobileAtivo={this.state.menuMobileAtivo}
                fechaMenuMobile={this.fechaMenuMobile}
              />
                  <MenuMobile
                    ativaMenuMobile={this.state.menuMobileAtivo}
                    ativaMenuMobileFuncao={this.ativaMenuMobile}
                  />
              <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/proponentes" component={Proponentes} />
                <Route path="/empresas" component={Empresas} />
                <Route path="/sobre-nos" component={SobreNos} />
                <Route component={PageNotFound} />
              </Switch>
              <Potencialize />
              <Footer />
            </BrowserRouter>
          </div>
      </div>

    )

  }
}

export default App;
