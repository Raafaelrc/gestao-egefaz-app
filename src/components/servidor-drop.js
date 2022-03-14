import { useEffect, useState } from "react"

import './css/drop.css'
import '../views/folgas/folga.css'
import { fetchStates } from "../app/help"

const ServidorDrop = ({onChange=()=>{}}) => {

    const [servidores, setServidor] = useState([])

    useEffect(() => {
        fetchStates().then((servidor) => {
            setServidor(servidor)
        })

    }, [])

    return (

            <select id="servidor"
            name="servidor" onChange={onChange}>
                <option value="">Selecione o servidor</option>
            {servidores.map((servidor)=>{
                const {id,nome}=servidor
                return(<option value={id} key={id}>{nome}</option>)
            })}

            </select>


)

}
export default ServidorDrop