import React from 'react'
import { SpeedDial } from 'primereact/speeddial';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';


import "../modulos.css"
import Footer from '../../../components/Footer/Footer';



export default function ConsultarServidor() {

    const toast = useRef(null);

    const items = [
        {
            label: 'Editar',
            icon: 'pi pi-pencil',
            command: () => {
                window.location.href = '/cadastrar-folga';
            }
        },
   
             
        {
            label: 'Visualizar',
            icon: 'pi pi-eye',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];


    return (
        <div className="container-fluid" style={{ marginBottom: '10%' }}>

            <div classname="row">
                <div id='contentTitulo'  >
                    <h3 >Consultar Servidor</h3>
                </div>

                <div className="col-lg-12">
                    <div classname="bs-component" id='contentUM' >
                        <div className='row'>
                            <div className="form-group col-md-3">
                                <label className='la' for="inputPassword4" >Matrícula</label>
                                <input type="text" className="form-control" id="inputText" placeholder="Matrícula" />
                            </div>
                            <div className="form-group col-md-7">
                                <label className='la' for="inputName4" aria-disabled>Nome Completo</label>
                                <input type="text" className="form-control" id="inputText" readOnly />
                            </div>
                            <div className='col-md-2' style={{ display: 'flex', alignItems: 'end', justifyContent: 'flex-end', padding: '5px' }}>
                                <button type="button" className="btn btn-primary" >Pesquisar</button>
                            </div>
                        </div>

                    </div>

                    <div classname="bs-component " id='contentUM'>
                        <div className='row'>
                            <table class="table">
                                <thead class="thead-dark form-group">
                                    <tr>
                                        <th scope="col">Matrícula</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Cargo</th>

                                    </tr>
                                </thead>
                                <tbody className='form-group'>
                                    <tr>
                                        <th scope="row">Matrícula 1</th>
                                        <td>Nome 1</td>
                                        <td>Cargo 1</td>


                                    </tr>

                                </tbody>
                            </table>
                            <div>
                                <Toast ref={toast} />
                                <div className="speeddial-delay-demo" style={{ position: 'relative',display:'flex', justifyContent:'end', height:'75px' }}>
                                    <SpeedDial  model={items} direction="left" transitionDelay={80} showIcon="pi pi-bars " hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
                                </div>
                            </div>


                        </div>






                    </div>
                </div>
            </div>
            
          <Footer/>

        
        </div>





    )


}


