import React, { useState } from "react";
import createPdf from "../../src/js/createPdf"

export default function Lista (props){
    
    const [lista, setLista] = useState([
    ])
    const [alimento, setAlimento] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [id, setId] = useState(0)


    function getAlimento(event){
        event.preventDefault()
        setAlimento(event.target.value)
    }

    function getQuantidade(event){
        event.preventDefault()
        setQuantidade(event.target.value)
    }

    function addItem(event){
        event.preventDefault()
        setId(id + 1)
        setLista([...lista,{"id":id, "alimento":alimento, "quantidade":quantidade}])
        setAlimento('')
        setQuantidade('') 
    }

    function deleteItem(idAlimento){

        setLista(lista.filter((ident) => ident.id !== idAlimento ))
    
        
    }

    function clearList(){
        setLista(lista.filter((e) => e.id === null ))
    }

    return(
        <div className="lista-div">

            <p>Crie sua lista de compras e salve em PDF</p>

            <form onSubmit={addItem}>
                
                <label>Alimento</label><input type="text" name="alimento" onChange={getAlimento} value={alimento} required></input>
                <label>Quantidade</label><input type="text" name="quantidade" onChange={getQuantidade} value={quantidade} required></input>
                <button type="submit" className="ok-button">OK</button>

            </form>
            
            <ul>
                <h2>{props.titulo}</h2>
                {lista.map(item => (
                    <li key={"alimento-"+ item.id}> {item.alimento}: {item.quantidade} <button onClick={() => deleteItem(item.id)} className="delete-button">X</button></li>
                ))}
            </ul>

            <button onClick={clearList} className="clear-button">Limpar a lista</button>
            <button onClick={() => {createPdf(lista)}} className="pdf-button">Gerar Pdf</button>
            
        </div>
        
    )
}

