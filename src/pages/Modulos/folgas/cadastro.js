import React, { useState } from "react";
import Cards from "../../../components/cards";
import FormGroup from "../../../components/form-group";


import FolgaService from "../../../app/service/folgaService";
import { InputTextarea } from "primereact/inputtextarea"
import AsyncSelect from "react-select/async"
import { succesMessage } from "../../../components/toastr";
import { errorMessage } from "../../../components/toastr";


import '../modulos.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class CadastroFolga extends React.Component {
    state = {

        descricao: '',
        periodoAqui: '',
        finalData: '',
        saldo: '',
        servidor: 0
    }

    validar() {
        const msg = []

        if (!this.state.descricao) {
            msg.push('A descrição deve ser informada')
        }
        if (!this.state.periodoAqui) {

            msg.push('A data de aquisição deve ser informada')
        }

        if (this.state.servidor === 0) {

            msg.push('O servidor deve ser selecionado')

        }
        return msg;


    }

    constructor() {
        super();
        this.service = new FolgaService()
    }


    // componentDidMount() {
    //     const params = this.props.match
    //     if (params.id) {
    //         this.service.obterPorId(params.id)
    //             .then(response => {
    //                 this.setState({ ...response.data })
    //             }).catch(error => {
    //                 errorMessage(error.response.data)
    //             })
    //     }
    // }

    cancelar = () => {

        this.props.history.push('/')
    }

    cadastro = () => {

        const msgs = this.validar();
        if (msgs && msgs.length > 0) {
            msgs.forEach((msgs, index) => {
                errorMessage(msgs)

            });
            return false

        }

        const folga = {

            descricao: this.state.descricao,
            periodoAqui: this.state.periodoAqui,
            finalData: this.state.finalData,
            saldo: this.state.saldo,
            servidor: this.state.servidor

        }
        if (this.state.periodoAqui > this.state.finalData) {

            errorMessage("A data final deve ser posterior a data de aquisição");

            this.state.saldo = 0;

        }
        else {


            this.service.cadastrarFolga(folga)
                .then
                (response => {
                    succesMessage('Folga cadastrada com sucesso')


                    this.setState({
                        descricao: '',
                        periodoAqui: '',
                        finalData: '',
                        saldo: '',
                        servidor: 0
                    })
                }).catch
                (response => { errorMessage('Erro ao cadastrar folga') })
        }

    }

    editar = () => {

        const { descricao, id, servidor } = this.state
        const folga = { descricao, id, servidor }

        this.service.solicitarFolga(folga)
            .then
            (response => { succesMessage('Solicitçaõ realizada com sucesso') })
            .catch
            (response => { errorMessage('Erro ao solicitar folga') })


    }


    render() {
        const uploadOptions = { label: 'Enviar', icon: 'pi pi-upload', className: 'p-button-success' };

        const d = new Date(this.state.periodoAqui);
        const d2 = new Date(this.state.finalData);
        const diffTime = Math.abs(d.getTime() - d2.getTime());
        const Diffdays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // ----------------------------------------------------------------------
        if (d2 < d) {

            this.state.saldo = 0;

        }

        else


            this.state.saldo = (Diffdays + 1);



        const mapResponseToValuesAndLabels = (data) => ({
            value: data.id,
            label: data.nome,
        });

        async function callApi(value) {
            const data = await fetch(`http://localhost:8080/api/servidores/lista`)
                .then((response) => response.json())
                .then((response) => response.map(mapResponseToValuesAndLabels))
                .then((final) =>
                    final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase()))
                );

            return data;
        }


        return (


            <div className="container-fluid" style={{ marginBottom: '10%' }}>




                <div classname="row">
                    <div style={{ background: '#1B1936', color: '#f0f0f0', marginTop: '10vh', border: ' 1px solid #f0f0f0', borderRadius: '5px', padding: '10px', boxShadow: '5px 5px 5px #fdca3f' }} >
                        <h3 >Cadastrar Folga</h3>
                    </div>

                    <div className="col-lg-12">
                        <div classname="bs-component" style={{ padding: '10px', marginTop: '20px', borderRadius: '5px', background: '#f0f0f0' }}>


                            <FormGroup hatmlFor="inputServidores">
                                <label className="la" htmlFor="range">Servidor *</label>



                                <div>
                                    <AsyncSelect
                                        placeholder="Selecione o servidor"
                                        cacheOptions
                                        loadOptions={callApi}
                                        onInputChange={(data) =>
                                            console.log(data)}
                                        onChange={(data) => this.setState({ servidor: data.value })}
                                        defaultOptions
                                    />
                                </div>

                            </FormGroup>

                            <div className="row" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <div className="col">
                                    <label className="la" htmlFor="range">Período inicial:*</label>
                                    <input className="form-control" type="date"
                                        name="data"
                                        value={this.state.periodoAqui}
                                        onChange={(e) => this.setState({ periodoAqui: e.target.value })} />
                                </div>



                                <div className="col">
                                    <label className="la" htmlFor="range">Período Final:*</label>
                                    <input className="form-control" type="date"
                                        name="data"
                                        value={this.state.finalData}
                                        onChange={(e) => this.setState({ finalData: e.target.value })} />
                                </div>

                                <div className="col">

                                    <label className="la" htmlFor="range">Quantidade de dias:</label>

                                    <input className="form-control"
                                        disabled="true"
                                        type="number"
                                        name="total"
                                        value={this.state.saldo}
                                        onChange={(e) => this.setState({ saldo: e.target.value })} />
                                </div>



                                <div className="mg-1">



                                    <label className="la" style={{ marginTop: '20px' }}>Arquivo de comprovação </label>
                                    <label className="la-1" htmlFor="arquivo" style={{ width: '20%' }}>
                                        <i className="pi pi-upload"
                                            style={{ 'fontSize': '16px', "marginRight": "10px" }}></i>Enviar</label>

                                    <input type="file"
                                        name="arquivo"
                                        id="arquivo" style={{ background: 'blue' }}
                                    />


                                </div>
                            </div>



                            <FormGroup
                                htmlFor="inputDescricao">
                                <label className="la" htmlFor="range">Descrição *</label>
                                <InputTextarea style={{ width: '100%' }} value={this.state.descricao}

                                    onChange={(e) => this.setState({ descricao: e.target.value })}
                                    rows={5} cols={30} autoResize />
                            </FormGroup>

                            <button onClick={this.cadastro} type="button" className="btn btn-success " style={{ marginRight: '15px' }} >Salvar</button>
                            <button onClick={this.cancelar} type="button" className="btn btn-danger btnCancelar"  >Cancelar</button>
                        </div>
                    </div>
                </div>



            </div >


        )
    }

}


export default CadastroFolga












