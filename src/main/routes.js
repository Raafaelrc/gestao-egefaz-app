import React from "react";

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import DashBoard from "../pages/modulos/inicio/Dashboard";
import SideMenu from '../components/Sidebar/SideMenu';
import CadastrarFolga from '../pages/modulos/folgas/cadastro';
import CadastrarServidor from '../pages/modulos/servidores/cadastrarServidor';
import ConsultarServidor from '../pages/modulos/servidores/consultaServidor';
import { useState } from 'react';
import 'toastr/build/toastr.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "../pages/login/login";

const SolicitarFolga = () => {
    return <h1>Solicitar Folga</h1>
}


const ConsultarFolga = () => {
    return <h1>Consultar Folga</h1>
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

function Rotas() {
    const [inactive, setInactive] = useState(false)
    return (
        <>


            <BrowserRouter>

                <SideMenu onCollapse={(inactive) => {
                    setInactive(inactive)

                }} />



                <div className={`container ${inactive ? 'inactive' : ""}`}>
                    <Switch>
                        <Route path={'/home'}>   <DashBoard />   </Route>

                        <Route path={'/cadastrar-folga'}>   <CadastrarFolga />   </Route>
                        <Route path={'/consultar-folga'}>   <ConsultarFolga />   </Route>
                        <Route path={'/solicitar-folga'}>   <SolicitarFolga />   </Route>

                        {/* <Route path={'/cadastrar-servidores/:id?'}>   <CadastrarServidor />   </Route>          */}

                        <Route path="/cadastrar-servidores/:id?" component={CadastrarServidor}></Route>
                        <Route path={'/consultar-servidores'}>   <ConsultarServidor />   </Route>

                        <Route path={'/cadastrar-patrimonio'}>   <CadastrarPatrimonio />   </Route>
                        <Route path={'/consultar-patrimonio'}>   <ConsultarPatrimonio />   </Route>
                        <Route path={'/movimentar-patrimonio'}>   <MovimentarPatrimonio />   </Route>

                        <Route path={'/cadastrar-reserva'}>   <CadastrarReserva />   </Route>
                        <Route path={'/consultar-reserva'}>   <ConsultarReserva />   </Route>
                       


                    </Switch>

                </div>




            </BrowserRouter>


        </>
    )

}

export default Rotas