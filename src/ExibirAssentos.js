import { useState, useEffect } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import Formulario from './Formulario';




function Filtrar(setDisponivel, clicados,name, disponivel){
    if (disponivel === "disponivel"){
        clicados.push(name)
        console.log("clicados: ", clicados)
        setDisponivel("selecionado")
    } else {
        clicados.splice(clicados.indexOf(name),1)
        setDisponivel("disponivel")
    }
}

function RenderizarAssentos({assento,clicados}){
    const {id, name, isAvailable} = assento;
    const [disponivel, setDisponivel]=useState("disponivel");
    const [selecionados, setSelecionados] = useState([]);

    if (disponivel ==="selecionado"){
        return(
            <div className={disponivel} onClick={()=>Filtrar(setDisponivel, clicados,name, disponivel)}>
            <p>{name}</p>
        </div>
        )
    }
    else if (isAvailable){
        return(
            <div className={disponivel} onClick={()=>Filtrar(setDisponivel, clicados,name, disponivel)}>
            <p>{name}</p>
        </div>
        )
    } else if (!isAvailable){
        return(
            <div className="indisponivel" onClick={() =>alert("Assento não disponivel")}>
                <p>{name}</p>
            </div>
        )
    }

    
}


export default function ExibirAssentos({assentos,titulo, dia, hora }){
    let clicados =[];
    
    return (
    <>
        <div className='assentos'>
            {assentos.map((cadeira, index )=> <RenderizarAssentos key={index} assento={cadeira} clicados={clicados}/> )}
        </div>
        <div className='legendas'>
            <div>
                <div className='selecionado'></div>
                <p>Selecionado</p>
            </div>
            <div>
                <div className='disponivel'></div>
                <p>Disponivel</p>
            </div>
            <div>
                <div className='indisponivel'></div>
                <p>Indisponivel</p>
            </div>
        </div>
        <Formulario titulo={titulo} dia={dia} hora={hora} clicados={clicados}/>
        
    </>
    )
}