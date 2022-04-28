import React, { useState } from "react";
import Lista from "./Main/Lista";


export default function Main(){
    
    return (
        <main>
            <Lista titulo="Compras"></Lista>
            <footer>
                <p>Siga-me no instagram <a href="https://www.instagram.com/delmalandrin/" target="_blank">Andrew Malandrin</a></p>
            </footer>
        </main>
    )
}

