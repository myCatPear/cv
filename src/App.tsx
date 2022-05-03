import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import {RemoteJob} from "./components/RemoteJob/RemoteJob";
import Contacts from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Main/>
                <Skills/>
                <Projects/>
                <RemoteJob/>
                <Contacts/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
