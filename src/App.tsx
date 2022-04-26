import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Main/>
                <Skills/>
            </main>
        </div>
    );
}

export default App;
