import React from "react";

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import DashBoard from "../pages/Modulos/inicio/Dashboard";
import SideMenu from '../components/Sidebar/SideMenu';
import CadastrarFolga from '../pages/Modulos/folgas/cadastro';
import ConsultaFolga from '../pages/Modulos/folgas/consulta'
import SolicitarFolga from '../pages/Modulos/folgas/solicitacao'
import CadastrarServidor from '../pages/Modulos/servidores/cadastrarServidor';
import ConsultarServidor from '../pages/Modulos/servidores/consultaServidor';
import { useState } from 'react';
import 'toastr/build/toastr.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "../components/header/Header";






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

function Rotas() {
    const [inactive, setInactive] = useState(true)
    return (
        <>


            <BrowserRouter>
                <Header/>
                <SideMenu onCollapse={(inactive) => {
                    setInactive(inactive)

                }} />



                <div className={`container ${inactive ? 'inactive' : ""}`}>
                    <Switch>
                        <Route exact path={'/'}>   <DashBoard />   </Route>

                        <Route exact path={'/cadastrar-folga'}>   <CadastrarFolga />   </Route>
                        <Route exact path={'/consultar-folga'}>   <ConsultaFolga />   </Route>
                        <Route exact path={'/solicitar-folga'}>   <SolicitarFolga />   </Route>


                        <Route exact path="/cadastrar-servidores/:id?" component={CadastrarServidor}></Route>
                        <Route path={'/consultar-servidores'}>   <ConsultarServidor />   </Route>

                        {/* <Route exact path={'/cadastrar-patrimonio'}>   <CadastrarPatrimonio />   </Route>
                        <Route exact path={'/consultar-patrimonio'}>   <ConsultarPatrimonio />   </Route>
                        <Route exact path={'/movimentar-patrimonio'}>   <MovimentarPatrimonio />   </Route>

                        <Route exact path={'/cadastrar-reserva'}>   <CadastrarReserva />   </Route>
                        <Route exact path={'/consultar-reserva'}>   <ConsultarReserva />   </Route> */}



                    </Switch>

                </div>




            </BrowserRouter>


        </>
    )

}

export default Rotas