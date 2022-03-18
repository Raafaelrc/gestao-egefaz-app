import React from 'react'
import ServidorService from '../../../app/service/servidorService';
import { errorMessage, succesMessage } from '../../../components/toastr';
import Cards from '../../../components/cards'
import DataTableSerrvidor from './dataTableSerrvidor';
import FormGroup from '../../../components/form-group';

import "../modulos.css"



export default class ConsultarServidor extends React.Component {

        
    state={
        nome:'',
        cargo:'',
        servidores:[]
    }

    constructor(){

        super();
        this.service = new ServidorService();
    }

    buscar=()=>{

        const servidorFiltro={
            nome:this.state.nome,
            cargo:this.state.cargo
        }

        this.service
        .consultar(servidorFiltro)
        .then(response=>{
            this.setState({servidores:response.data})
        }).catch(error=>{
            console.log(error)
        })

    }

    deletar=(servidor)=>{

        this.service.deletar(servidor.id)
        .then(response=>{
            const servidores=this.state.servidores
            const index = servidores.indexOf(servidor)
            servidores.splice(index,1);
            this.setState(servidores)

            succesMessage('Servidor deletado com sucesso')
        }).catch(error=>{
            errorMessage('Erro ao deletar servidor')
        })
    
    }

    editar=(id)=>{


    }

    render() {


        return (
            <div className="container">

                <Cards title="Buscar servidor">
                    <div classname="row">
                        <div className="col-lg-12">
                            <div classname="bs-component">


                                <FormGroup htmlFor="inputNome"
                                    label="Nome:">
                                    <input type="text"
                                        class="form-control"
                                        id="inputNome"
                                        value={this.state.nome}
                                        onChange={e=>this.setState({nome:e.target.value})}
                                        placeholder="Buscar por nome" />

                                </FormGroup >

                                <FormGroup htmlFor="inputCargo"
                                    label="Mátricula:">
                                    <input type="text"
                                        class="form-control"
                                        id="inputCargo"
                                        value={this.state.matricula}
                                        onChange={e=>this.setState({cargo:e.target.matricula})}
                                        placeholder="Buscar por mátricula" />
                                </FormGroup >

                                <button onClick={this.buscar} ttype="button" className="btn btn-success" >Buscar</button>

                            </div>
                        </div>
                    </div>

                </Cards>

                <br />

                <Cards>

                    <div classname="row">
                        <div className="col-lg-20">

                            <DataTableSerrvidor 
                            servidores={this.state.servidores}
                            editAction={this.editar}
                            deleteAction={this.deletar}/>

                        </div>
                    </div>

                </Cards>

                <a className="btn btn-danger" href="#/home" role="button">Voltar</a>

            </div>
        )
    }





    


}


