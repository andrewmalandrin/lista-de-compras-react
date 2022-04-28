import React from "react";
import * as ReactDOM from "react-dom/client"

// CSS

import './style/style.css'

// Componentes

import Header from "../components/Header";
import Main from "../components/Main";


const app = (
        <div id="container">
            <Header titulo="Lista de Compras"/>
            <Main></Main>
            
        </div>
    )



const App = ReactDOM.createRoot(document.getElementById("app"))

App.render(app)