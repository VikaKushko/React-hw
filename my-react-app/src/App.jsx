import React from "react";
import './App.css'
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {
    return (
        <div className="app">
            <Header />
            <Navbar />
            <Main />
        </div>
    );
}

export default App;
