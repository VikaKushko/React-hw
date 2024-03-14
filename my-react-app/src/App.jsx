import React from "react";
import Progress from "./Components/Progress.jsx";
import './App.css';

const App = () => {
    return (
        <div>
            <h1>Kushko Vika</h1>
            <Progress percentage={40} />
            <Progress percentage={75} />
        </div>
    );
};

export default App;