import axios from "axios"
export async function consultarConAxios(){

      //URI=URL+EP DEL SERVICIO
      const IDARTISTA="1t20wYnTiAT0Bs7H1hv9Wt"
      const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`

      //CONSTRUYO LA PETICION
      const PETICION={
            method:"GET",
            headers:{
                  "Authorization":TOKEN
            }
      }

      
      //ORDENAR MI RESPUESTA
      try{
             //UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API
            let respuesta=await axios.get(URI,PETICION)
            let canciones=respuesta.data
            return canciones

      }catch(error){
            throw new Error("upss fallamos "+error)
      }
}