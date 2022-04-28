import React, { useState } from "react";

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
            <form onSubmit={addItem}>
                <label>Alimento</label><input type="text" name="alimento" onChange={getAlimento} value={alimento} required></input>
                <label>Quantidade</label><input type="text" name="quantidade" onChange={getQuantidade} value={quantidade} required></input>
                <button type="submit">OK</button>

            </form>
            
            <ul>
                <h2>{props.titulo}</h2>
                {lista.map(item => (
                    <li key={"alimento-"+ item.id}> {item.alimento}: {item.quantidade} <button onClick={() => deleteItem(item.id)} className="delete-button">APAGAR</button></li>
                ))}
            </ul>

            <button onClick={clearList} className="clear-button">Limpar a lista</button>
            
        </div>
        
    )
}

