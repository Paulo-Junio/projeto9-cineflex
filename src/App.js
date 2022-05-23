import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filme from "./Filme";
import Listagem from "./Listagem";
import Sucesso from "./Sucesso";
import Sessao from "./Sessao";
import "./reset.css";
import "./estilos.css"



export default function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listagem />} />
                <Route path="/filme/:idFilme" element={<Filme/>} />
                <Route path="/sessao/:idSessao" element={<Sessao />} />
                <Route path="/sucasso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    )
}