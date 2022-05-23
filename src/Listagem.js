import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function RenderizarFilmes({id, src}){
    return(
        <div className='box-filme' >
            <Link to={`/filme/${id}`}>
                <img src={src}/>
            </Link>
        </div>
    );
}


export default function Listagem(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then( resposta => setFilmes(resposta.data));
    },[]);
    
    return(
        <>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <div className="titulo">
                <h2>Selecione o filme</h2>
            </div>
            <div className='container'>
                {filmes.map((filme, index )=> <RenderizarFilmes key={index} id={filme.id} src={filme.posterURL} />)}
            </div>
        </>
    )
}
