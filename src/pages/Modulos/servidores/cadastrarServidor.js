import React from 'react'
import FormGroup from "../../../components/form-group";
import FolgaService from "../../../app/service/folgaService";
import { InputTextarea } from "primereact/inputtextarea"
import AsyncSelect from "react-select/async"
import { succesMessage } from "../../../components/toastr";
import { errorMessage } from "../../../components/toastr";

import { InputMask } from 'primereact/inputmask';

import "../modulos.css"


class CadastrarServidor extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{ marginBottom: '10%' }}>




                <div classname="row">
                    <div style={{ background: '#1B1936', color: '#f0f0f0', marginTop: '10vh', border: ' 1px solid #f0f0f0', borderRadius: '5px', padding: '10px', boxShadow: '5px 5px 5px #fdca3f' }} >
                        <h3 >Cadastrar Servidor</h3>
                    </div>

                    <div className="  col-lg-12">
                        <div classname="bs-component contentServidor" style={{ padding: '10px', marginTop: '20px', borderRadius: '5px', background: '#f0f0f0' }}>
                            <FormGroup >
                                <div className="row" >
                                    <div className="form-group col-md-6">
                                        <label className='la' for="inputName4">Nome Completo*</label>
                                        <input type="text" className="form-control" id="inputText" placeholder="Nome completo" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label className='la' for="inputPassword4">Matrícula*</label>
                                        <input type="text" className="form-control" id="inputText" placeholder="Matrícula" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label className='la' for="inputPassword4">CPF*</label>
                                        <InputMask type="text" className="form-control" mask='999.999.999-99' placeholder="CPF" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='la' for="inputPassword4">Cargo*</label>
                                        <input type="text" className="form-control" id="inputText" placeholder="Cargo" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='la' for="inputPassword4">Lotação*</label>
                                        <input type="text" className="form-control" id="inputText" placeholder="Lotação" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label className='la' for="inputPassword4">RG*</label>
                                        <input type="text" className="form-control" id="inputText" placeholder="Matrícula" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label className='la' for="inputPassword4">Data de Nascimento*</label>
                                        <input type="date" className="form-control" id="inputText" placeholder="Data de Nascimento" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='la' for="inputPassword4">Estado civíl*</label>
                                        <select  id="inputEstado" className="form-control">
                                            <option selected>Selecione </option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='la' for="inputPassword4">Nacionalidade*</label>
                                        <input type="text" className="form-control" id="inputText" placeholder="Nacionalidade" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='la' for="inputPassword4">Naturalidade*</label>
                                        <input type="text" className="form-control" id="inputText" placeholder="Naturalidade" />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label className='la' for="inputPassword4">Sexo*</label>
                                        <select  id="inputSexo" className="form-control">
                                            <option selected>Selecione </option>
                                            <option selected>Masculino </option>
                                            <option selected>Feminino </option>
                                            <option selected>Outros </option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='la' for="inputEmail">E-mail*</label>
                                        <input type="text" className="form-control" id="inputText" placeholder="E-mail" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label className='la' for="phone">Telefone*</label>
                                        <InputMask  type="tel" className="form-control" mask="(99)99999-9999" placeholder='Telefone' />
                                    </div>



                                
                                        {/* Formulario de endereço */}
                                    <div className="form-group col-md-2">
                                        <label className='la' for="inputCEP">CEP*</label>
                                        <InputMask type="text" className="form-control" mask='99999-999' id="inputCEP" placeholder='CEP' />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label className='la' for="inputEstado">Estado*</label>
                                        <select id="inputEstado" className="form-control">
                                            <option selected>UF</option>
                                            <option>TO</option>

                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='la' for="inputCity">Cidade*</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>



                                    <div className="form-group">
                                        <label className='la' for="inputAddress">Endereço*</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" />
                                    </div>
                                    <div className="form-group">
                                        <label className='la' for="inputAddress2">Complemento</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc." />
                                    </div>

                                </div>
                               
                                <button type="submit" className="btn btn-secondary">Cadastrar</button> 
                                <button type="submit" className="btn btn-danger">Cancelar</button>
                            </FormGroup>


                        </div>
                    </div>
                </div>



            </div >




        )
    }
}

export default CadastrarServidor
