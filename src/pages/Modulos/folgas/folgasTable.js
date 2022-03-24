import React from 'react'
import dateFormat from 'dateformat'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {


    const rows = props.folgas.map(folga => {

        return (
            <tr>
                <td>{folga.descricao}</td>
                <td>{dateFormat(folga.periodoAqui, "dd/mm/yyyy")}</td>
                <td>{dateFormat(folga.finalData, "dd/mm/yyyy")}</td>
                <td>{folga.saldo}</td>
                <td>{folga.servidor.nome}</td>
                <td>{folga.servidor.cargo}</td>
                <td>
                    <button type="button"
                        className="btn btn-primary"
                        onClick={e => props.editAction(folga.id)}>
                        Editar</button>


                    <button type="button"
                        className="btn btn-danger"
                        onClick={e => props.deleteAction(folga)}>
                        Excluir</button>
                </td>

            </tr>
        )

    })
    return (

        <table className="table table-hover">

            <thead>


                <tr>

                    <th scope="col">Descrição</th>
                    <th scope="col">Data da Aquisição</th>
                    <th scope="col">Data Final</th>
                    <th scope="col">Total</th>
                    <th scope="col">Servidor</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>

            <tbody>
                {rows}

            </tbody>

        </table>

    )
}

