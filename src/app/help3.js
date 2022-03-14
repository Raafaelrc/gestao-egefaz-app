const BASE_URL='http://localhost:8080/api/folgas/'

 export const buscarFolgas=()=>{

const url=`${BASE_URL}lista`

return fetch(url).then(response=> response.json())
}