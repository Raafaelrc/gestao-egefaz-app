import React, { useState, useEffect } from "react";

import "./lista.css"

import { buscarFolgas } from "../app/help2";

export default listarFolgas => {

    const [folgas, setFolgas] = useState([]);

        useEffect(() => {
            buscarFolgas().then((folgas) => {
                setFolgas(folgas)
            });
        }, []);

   const rows= folgas.map(folga => {

        return (
            <tr>
            
                <td>{folga.servidor.nome}</td>
                <td>{folga.servidor.cargo}</td>
                <td>{folga.usufruidas}</td>
                <td>{folga.saldo}</td>
                <td className="but">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={e => listarFolgas.solicitarAction(folga.id)}>
                        Solicitar folga</button>


                    <button type="button"
                        className="btn btn-danger"
                        onClick={e => listarFolgas.deleteAction(folga)}>
                        Excluir</button>
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
                    <th scope="col">Usufruidas</th>
                    <th scope="col">Saldo</th>
                    <th className="action" scope="col">Ações</th>
                    
                </tr>
            </thead>

            <tbody>
                {rows}

            </tbody>

        </table>

    )
}

