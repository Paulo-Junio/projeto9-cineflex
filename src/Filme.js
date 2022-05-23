import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";

function RenderizarHorarios({horarios}){
    const {id, weekday, date, showtimes} = horarios;
    return (<>
        <div className="horarios">
            <span>{`${weekday} - ${date}`}</span>
            <div className='opcoes'>
                <Link to={`/sessao/${showtimes[0].id}` }>
                    <button>{showtimes[0].name}</button>
                </Link>
                <Link to={`/sessao/${showtimes[0].id}`}>
                    <button>{showtimes[1].name}</button>
                </Link>
            </div>
        </div>
    </>)
}
export default function Filme(){
    const {idFilme} = useParams();
    const [horarios, setHorarios] = useState([]);
    const [dados, setDados] = useState({})

    function Armazenar(resposta){
        setHorarios(resposta.data.days);
        setDados(resposta.data)
    }
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then(resposta => Armazenar(resposta));
    },[]);

    return(
        <>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <div className="titulo">
                <h2>Selecione o horário</h2>
            </div>
            <div className='container'>
                {horarios.map((dia, index )=> <RenderizarHorarios key={index} horarios={dia}/>)}
            </div> 
            <div className='rodape'>
                <div className='box-rodape'>
                    <img src={dados.posterURL}/>
                </div>
                <span>{dados.title}</span>
            </div>
        </>
    )
}