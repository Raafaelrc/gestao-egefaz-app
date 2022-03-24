import Cards from "../../../components/cards";
import React from "react";
import FolgaService from "../../../app/service/folgaService";
import ListarFolgas from "./listarFolgas";


import { withRouter } from "react-router-dom";
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { errorMessage } from "../../../components/toastr"
import { succesMessage } from "../../../components/toastr"
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";


class VisualizarFolga extends React.Component {


    state = {


        mensagem: false,
        deletarFolga: {},
        servidores: [],
        folgas: []
    }



    constructor() {
        super();
        this.service = new FolgaService();
    }


    solicitarFolga = (id) => {

        this.props.history.push(`/solicitar-folga/${id}`)

    }

    detalhesFolga = (id) => {

        this.props.history.push(`/detalhes/${id}`)
    }

    solicitadas = (id) => {

        this.props.history.push(`/solicitadas/${id}`)
    }


    showMessage = (folga) => {
        this.setState({ mensagem: true, deletarFolga: folga })

    }

    deletar = () => {

        this.service.deletar(this.state.deletarFolga.id)
            .then(response => {
                const folgas = this.state.folgas
                const index = this.state.folgas.indexOf(this.state.deletarFolga)
                folgas.splice(index, 1);
                this.setState(folgas)

                succesMessage('Folga deletada com sucesso')
                this.cancelarDeletar();
            }).catch(error => {
                errorMessage('Erro ao deletar folga')
            })

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
                <Header />

                <div className="container-fluid" style={{ marginBottom: '10%' }}>




                    <div classname="row">
                        <div id="contentTitulo" >
                            <h3 >Solicitar Folga</h3>
                        </div>

                        <div className="col-lg-12">
                            <div classname="bs-component" id="contentUM">


                                <ListarFolgas solicitarAction={this.solicitarFolga}
                                    deleteAction={this.detalhesFolga}
                                    detalhesAction={this.solicitadas} />
                            </div>

                            <div>

                                <Dialog header="Atenção"
                                    visible={this.state.mensagem}
                                    style={{ width: '50vw' }}
                                    modal={true}
                                    footer={confirmar}
                                    onHide={() => this.setState({ mensagem: false })}>
                                    <p>Deseja realmente excluir esta folga?
                                        Esta ação não poderá ser revertida</p>
                                </Dialog>

                            </div>



                        </div>
                    </div>


                </div>
                
            </>

        )
    }

}

export default withRouter(VisualizarFolga)
