const BASE_URL='http://localhost:8080/api/servidores/'

 export const fetchStates=()=>{

const url=`${BASE_URL}lista`

return fetch(url).then(response=> response.json())
}
