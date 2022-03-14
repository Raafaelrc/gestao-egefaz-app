import ApiService from "../apiservice";

class PatrimonioService extends ApiService{

    constructor() {
        super('/api/patrimonio/')
    }
    cadastrar(credenciais) {

        return this.post('cadastrar', credenciais)
    }
  
     deletar(id){

        return this.delete(`/${id}`)
     }

    
}

export default PatrimonioService