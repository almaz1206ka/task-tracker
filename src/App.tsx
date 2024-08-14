import React from "react";
import './App.css';
import { DragContainer } from "./components/DragContainer/DragContainer";
import { Cti } from "./components/CTI/Cti";

function App() {

    return (
        <div className="App">
            <Cti />
            <DragContainer />
        </div>
    )
};


export default App;