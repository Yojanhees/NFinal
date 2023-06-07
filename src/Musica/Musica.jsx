import { consultarCanciones } from "../services/servicioCanciones"
import { useState,useEffect } from "react"
export function Musica(){

    const [canciones,setCanciones]=useState(null)
    const[estacargando,setEscargando]=useState(true)
    useEffect(function(){

        consultarCanciones().then(function(respuesta){
            console.log(respuesta.tracks)
            setCanciones(respuesta.tracks)
            setEscargando(false)
        })

    },[])

    if(estacargando){
        return(
            <>
                <h1>ESTOY CARGANDO</h1>
            </>
        )
    }else{

        return(
            <>
    
               <div className="row row-cols-1 row-cols-md-2 g-5">
                    
                        {
                            canciones.map(function(cancion){
                                return(
                                    <div>
                                        <div className="col">
                                            <div className="card h-100 shadow">
                                                {console.log(cancion)}
                                                <h3 className="text-center fw-bold">nombre:{cancion.name}</h3>
                                                <img src={cancion.foto} alt="" className="img-fluid w-100"/>
                                                <audio src={cancion.preview_url} controls className="w-100"></audio>
                                                <h4 className="text-center">nombre del album:{cancion.name}</h4>
                                                <h5 className="text-center">Duracion:{cancion.duration_ms}</h5>
                                                <h5 className="text-center">popularidad:{cancion.popularity}</h5>
                                               <center><img src="https://i.scdn.co/image/ab67616d0000b273c61b46cf682d7f0183fcb87c" width={200}className="" alt="" /></center>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                           
                        }<div/>
            
                        </div>

                        </>
                    
                
               
            
        
        )

    }

   

}