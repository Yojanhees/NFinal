export async function consultarCanciones(){

    //RECETA PARA CONSUMIR APIS CON JS

    //1. PA' ONDE VAS OME
    // URL+ EP DEL SERVICIO
    const IDARTISTA="1t20wYnTiAT0Bs7H1hv9Wt"
    const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN="Bearer BQCqmTrcfuaXtoPIk2_3AyJojDyzhAOQgrS-YyHiT6s-wU-kOaC23VeuWBlXmR8DUuJxEe_PPpv5lO1C_VqOtoqgZQAe_5bgzktZiuMw5UOhjYn2Cg0"

    //2. QUE VAS HACER ALLA OME...
    //CONFIGURO LA PETICION
    let peticion={
        method:"GET",
        headers:{
            "Authorization":TOKEN
        },
    }

    //3. PIDA EL TAXI
    //utilice la promesa FETCH para ir al back y consumir el API
    let respuesta=await fetch(URI,peticion)
    let canciones=await respuesta.json()

    return canciones
}