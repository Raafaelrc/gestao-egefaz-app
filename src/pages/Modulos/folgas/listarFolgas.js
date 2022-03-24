import React, { useState, useEffect } from "react";
import { SplitButton } from 'primereact/splitbutton';
import { Button } from 'primereact/button';
import { buscarFolgas } from "../../../app/help2";

export default listarFolgas => {

    

    const [folgas, setFolgas] = useState([]);

        useEffect(() => {
            buscarFolgas().then((folgas) => {
                setFolgas(folgas)
            });
        }, []);

   const rows= folgas.map(servidor => {

    const items = [
        {
            label: 'Folgas cadastradas',
            icon: 'pi pi-calendar-times',
            command: (e) => listarFolgas.deleteAction(servidor.id)
        },
        {
            label: 'Folgas solicitadas',
            icon: 'pi pi-calendar-times',
            command: (e) => listarFolgas.detalhesAction(servidor.id)
        }
]
        
        return (
            <tr>
            
                <td>{servidor.nome}</td>
                <td>{servidor.cargo}</td>
                <td>{servidor.folga}</td>
                <td>{servidor.solicitar}</td>

                <td className="button-e">
                    <Button className="p-button-raised  p-button-secondary"
                        onClick={e => listarFolgas.solicitarAction(servidor.id)}>
                        Solicitar folga</Button>

                        <SplitButton className="button"
                          label="Detalhes"
                          model={items}></SplitButton>
                </td>

               

            </tr>
        )

    })
    return (

        <table className="table table-hover">

            <thead>


                <tr>

                    <th scope="col">Nome do servidor</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Folgas cadastradas</th>
                    <th scope="col">Folgas Solicitadas</th>
                    <th className="action" scope="col">Ações</th>
                    
                </tr>
            </thead>

            <tbody>
                {rows}

            </tbody>

        </table>

    )
}




































































    //     const [folgas, setFolgas] = useState([]);

//     useEffect(() => {
//         buscarFolgas().then((folgas) => {
//             setFolgas(folgas)
//         });
//     }, []);





//     return (


//         <div>

//             const rows = folgas.map((folga) => {

//                 return (
//                     <tr>
//                         <td>{folga.saldo}</td>
//                         <td>{folga.total}</td>
//                         <td>{folga.usufruidas}</td>
//                         <td>{folga.servidor.nome}</td>

//                     </tr>
//                 )
//             })
            

//             <table className="table table-hover">

//                 <thead>


//                     <tr>

//                         <th scope="col">Total</th>
//                         <th scope="col">Saldo</th>
//                         <th scope="col">Usufruidas</th>
//                         <th scope="col">Nome</th>
//                         <th scope="col">Cargo</th>
//                         <th scope="col">Ações</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {rows}
//                 </tbody>

//             </table>



//         </div>
//     )

// }

