import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sessao(){
    
    const {idSessao} = useParams();
    const [assentos, setAssentos] = useState([]);
    console.log(assentos);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then( resposta => setAssentos(resposta.data));
    },[]);
    
    return(
        <>

        </>
    )
}