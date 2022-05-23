import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import ExibirAssentos from './ExibirAssentos';


export default function Sessao(){
    const {idSessao} = useParams();
    const [filme, setFilme] = useState(null)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then(resposta => {setFilme(resposta.data)});
    },[]);
  
 
    return(
        <>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <div className="titulo">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
           {filme === null ? null :
                <>
                    <div className='container'>
                    <ExibirAssentos  assentos={filme.seats} titulo={filme.movie.title} dia={filme.day.weekday} hora={filme.name}/>
                </div>
                <div className='rodape'>
                    <div className='box-rodape'>
                        <img src={filme.movie.posterURL}/>
                    </div>
                    <div>
                        <p>{filme.movie.title}</p>
                        <p>{`${filme.day.weekday} - ${filme.name}`}</p>
                    </div> 
                </div> 
                </>
            } 
            

        </>
    )
}