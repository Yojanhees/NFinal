import { Route, Routes } from "react-router-dom"
import { Shop } from "../Shop/Shop"
import { Footer } from "../shared/Footer/Footer"
import { Fans } from "../Fans/Fans"
import { Musica } from "../Musica/Musica"
import { History } from "../History/History"

import { Menu } from "../Menu/Menu"

export function Rutas() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/menu" element={<Menu/>} />
                <Route path="/fans" element={<Fans/>} />
                <Route path="/shop" element={<Shop/>} /> 
                <Route path="/musica" element={<Musica/>} />
                <Route path="/history" element={<History/>} />
                

                

                
            </Routes>
            <Footer></Footer>
        </>
    )
}