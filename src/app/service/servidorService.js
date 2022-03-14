import ApiService from "../apiservice";

class ServidorService extends ApiService {

    constructor() {
        super('/api/servidores/')
    }
    cadastrar(credenciais) {

        return this.post('cadastrar', credenciais)
    }
    servidoresId(id) {

        return this.get(`${id}`)
    }

    solicitarFolga(id,servidor){
        return this.post(`solicitar/${id}`,servidor)
    }

     consultar(servidorFiltro){
        let params = `?nome=${servidorFiltro.nome}`

        if(servidorFiltro.cargo){
            params= `${params}&cargo=${servidorFiltro.cargo}`
        }

        return this.get(params);

     }     
     
     deletar(id){

        return this.delete(`/${id}`)
     }

     listar(servidores){

         return this.get('lista',servidores)
     }
 }

export default ServidorService