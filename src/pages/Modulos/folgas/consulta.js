import React from 'react'
import Cards from '../../../components/cards'
import FormGroup from '../../../components/form-group.js'
import FolgaService from "../../../app/service/folgaService"
import Props from './folgasTable'



// import { withRouter } from "react-router-dom";
import { succesMessage } from '../../../components/toastr.js'
import { errorMessage } from '../../../components/toastr'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

import Header from '../../../components/header/Header.js'

class ConsultaFolga extends React.Component {


    state = {

        descricao: '',
        periodoAqui: '',
        mensagem: false,
        deletarFolga: {},
        servidores: [],
        folgas: []
    }


    constructor() {
        super();
        this.service = new FolgaService();
    }



    buscar = () => {

        const folgasFiltro = {
            descricao: this.state.descricao,
            servidor: this.state.servidores
        }
        this.service.consulta(folgasFiltro)
            .then(response => {
                this.setState({ folgas: response.data })
            }).catch(error => {
                console.log(error)
            })

    }

    showMessage = (folgas) => {
        this.setState({ mensagem: true, deletarFolga: folgas })

    }

    deletar = () => {

        this.service.deletar(this.state.deletarFolga.id)
            .then(response => {
                const folgas = this.state.folgas
                const index = folgas.indexOf(this.state.deletarFolga)
                folgas.splice(index, 1);
                this.setState(folgas)

                succesMessage('Folga deletada com sucesso')
                this.cancelarDeletar();
            }).catch(error => {
                errorMessage('Erro ao deletar folga')
            })

    }

    editar = (id) => {

        this.props.history.push(`/cadastro-folga/${id}`)

    }

    cancelar = () => {

        this.props.history.push('/')

    }



    cancelarDeletar = () => {

        this.setState({ mensagem: false, deletarFolga: {} })
    }




    render() {

        const confirmar = (

            <div>

                <Button label="Confirmar" icon="pi pi-check" onClick={this.deletar} />

                <Button label="Cancelar" icon="pi pi-times" onClick={this.cancelarDeletar}
                    className="p-button-secondary" />

            </div>
        );


        return (
            <>

              
                 
                 <div className="container-fluid" style={{ marginBottom: '10%' }}>
 
 
 
 
                     <div classname="row">
                         <div id="contentTitulo" >
                             <h3 >Consultar Folga</h3>
                         </div>
 
                         <div className="col-lg-12">
                             <div classname="bs-component" id="contentUM">

                                                    <FormGroup
                                                        htmlFor="inputServidor"
                                                        label="Servidor">
                                                        <input type="data"
                                                            class="form-control"
                                                            id="inputPeriodoAqui"
                                                            value={this.state.servidores}
                                                            onChange={e => this.setState({ servidores: e.target.value })}
                                                            placeholder='Informe o nome do Servidor' />
                                                    </FormGroup >

                                                    <button onClick={this.buscar} ttype="button" className="btn btn-success" >Buscar</button>
                                                    <button onClick={this.cancelar} ttype="button" className="btn btn-primary" >Cancelar</button>
                                                </div>
                                            </div>
                                        </div>

                                 
                                    <br />

                                    <Cards>

                                        <div className='container-fluid'>
                                            <div className="col-lg-12">

                                                <Props folgas={this.state.folgas}
                                                    deleteAction={this.showMessage}
                                                    editAction={this.editar} />

                                            </div>
                                        </div>

                                        <div className='container-fluid'>

                                            <Dialog header="Atenção"
                                                visible={this.state.mensagem}
                                                style={{ width: '50vw' }}
                                                modal={true}
                                                footer={confirmar}
                                                onHide={() => this.setState({ mensagem: false })}>
                                                <p>Confirmar a exlcusão desta folga?</p>
                                            </Dialog>

                                        </div>

                                    </Cards>

                                    <div>

                                        <button onClick={this.cancelar} ttype="button" className="btn btn-primary" >Voltar</button>

                                    </div>

                                </div>
                      
            </>
        )
    }

}

export default ConsultaFolga







