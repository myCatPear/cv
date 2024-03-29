import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main style={{position:"relative"}}>
                <Main/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
