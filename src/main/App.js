
import SideMenu from '../components/Sidebar/SideMenu';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import DashBoard from '../pages/Modulos/Inicio/Dashboar';
import CadastrarFolga from '../pages/Modulos/folgas/cadastro';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ConsultarFolga = () => {
  return <h1>Consultar Folga</h1>
}
const SolicitarFolga = () => {
  return <h1>Solicitar Folga</h1>
}

const CadastrarServidor = () => {
  return <h1>Cadastrar Servidor</h1>
}
const ConsultarServidor = () => {
  return <h1>Consultar Servidor</h1>
}

const CadastrarPatrimonio = () => {
  return <h1>Cadastrar Patrimônio</h1>
}
const ConsultarPatrimonio = () => {
  return <h1>Consultar Patrimônio</h1>
}
const MovimentarPatrimonio = () => {
  return <h1>Movimentar Patrimônio</h1>
}

const CadastrarReserva = () => {
  return <h1>Cadastrar Reserva</h1>
}
const ConsultarReserva = () => {
  return <h1>Consultar Reserva</h1>
}

function App() {
  const [inactive, setInactive] = useState(false)

  return (
    <div className="App">

      <Router>

        <Header />
        <SideMenu onCollapse={(inactive) => {
          setInactive(inactive)

        }} />




        <div className={`container ${inactive ? 'inactive' : ""}`}>
          <Switch>
            <Route exact path={'/home'}>   <DashBoard />   </Route>

            <Route path={'/cadastrar-folga'}>   <CadastrarFolga />   </Route>
            <Route path={'/consultar-folga'}>   <ConsultarFolga />   </Route>
            <Route path={'/solicitar-folga'}>   <SolicitarFolga />   </Route>

            <Route path={'/cadastrar-servidores'}>   <CadastrarServidor />   </Route>            
            <Route path={'/consultar-servidores'}>   <ConsultarServidor />   </Route>

            <Route path={'/cadastrar-patrimonio'}>   <CadastrarPatrimonio />   </Route>
            <Route path={'/consultar-patrimonio'}>   <ConsultarPatrimonio />   </Route>
            <Route path={'/movimentar-patrimonio'}>   <MovimentarPatrimonio />   </Route>

            <Route path={'/cadastrar-reserva'}>   <CadastrarReserva />   </Route>
            <Route path={'/consultar-reserva'}>   <ConsultarReserva />   </Route>
          </Switch>

        </div>

        <div className={`footer ${inactive ? 'inactive' : ""}`}>
          <Footer />

        </div>


      </Router>

    </div>
  );
}

export default App;
