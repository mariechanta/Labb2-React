// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDom from "react -dom/client";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import Nav from "./Nav";
import "/index.css";

  const App = () => {
    return (
        <header>
            <h1>Welcome to school APP</h1>
            <img
                src="img1.png"
                alt="Beskrivande text för bilden"
                style={{ width: '800px', height: '600px' }}
            />
        </header>
    );
};

export default App;
