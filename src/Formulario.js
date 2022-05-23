import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Finalizar(e,titulo, dia, hora, clicados,nome,cpf,final){
    e.preventDefault();
    const reserva = {
        name:nome,
        cpf:cpf,
        ids: clicados
    }

    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",reserva);
    promise.then(()=>{
        const sucesso = {
            titulo,
            dia,
            hora,
            nome,
            cpf,
            clicados
        };
        final("/sucesso", {state: sucesso}, {replace:true});
    });
}

export default function Formulario({titulo, dia, hora, clicados}){
    const [nome, setNome]= useState('');
    const [cpf, setCpf]= useState('');
    const final = useNavigate();

    return(
        <>
            <div className='formulario'>
                <form onSubmit={(e)=>Finalizar(e,titulo, dia, hora, clicados,nome,cpf,final)}>
                    <label for="nome">Nomedo comprador:</label>
                    <input id="nome" type="text" value={nome} onChange={(e)=> setNome(e.target.value)} placeholder='Digite seu nome...'/>
                    <label for="cpf">CPF do comprador:</label>
                    <input id="cpf" type="text" value={cpf} onChange={(e)=> setCpf(e.target.value)} placeholder='Digite seu CPF'/>
                    <button type="submit">Reservar assento(s)</button>
                </form>
            </div>
        </>
    )
}