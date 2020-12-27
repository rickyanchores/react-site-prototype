import React from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import "./styles.css";

export default function App(){
    return(
         <div className="App">
             <Header />
             <Showcase />
            
         </div>
    )
}