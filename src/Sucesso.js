import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Sucesso(){
    const finalizacao = useLocation().state
    console.log(finalizacao)
    return(
        <>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <div className="titulo-sucesso">
                <h2>Pedido feito com sucesso!</h2>
            </div>
            <div className='container'>
                <div className ="pedido">
                    <div>
                        <h3><strong>Filme e sessão</strong></h3>
                        <p>{finalizacao.titulo}</p>
                        <p>{`${finalizacao.dia} ${finalizacao.hora}`}</p>
                    </div>
                    <div>
                    <h3><strong>Ingressos</strong></h3>
                    {finalizacao.clicados.map((id)=> <p>{`Assento ${id}`}</p>)} 
                    </div>
                    <div>
                    <h3><strong>Comprador</strong></h3>
                        <p>{`Nome: ${finalizacao.nome}`}</p>
                        <p>{`CPF: ${finalizacao.cpf}`}</p>
                    </div>
                </div>
                <div className='formulario'>
                <Link to={`/`}>
                    <button>Voltar pra Home</button>
                </Link>
            </div>
            </div>
        </>
    )
}