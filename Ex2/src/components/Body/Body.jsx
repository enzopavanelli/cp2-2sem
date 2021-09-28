import React from "react";
import { Route } from "react-router";
import Home from "../Home/Home";
import ModaFeminina from "../ModaFeminina/ModaFeminina";
import ModaInfantil from "../ModaInfantil/ModaInfantil";
import ModaMasculina from "../ModaMasculina/ModaMasculina";
import Sobre from "../Sobre/Sobre";


export default function Body() {
    return(
        <>
        <Route path="/Home" component= {Home} />
        <Route path="/ModaFeminina" component= {ModaFeminina} />
        <Route path="/ModaMasculina" component= {ModaMasculina} />
        <Route path="/ModaInfantil" component= {ModaInfantil} />
        <Route path="/Sobre" component= {Sobre} />
        </>
    )
}