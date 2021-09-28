import React from "react";
import { Link } from "react-router-dom";
import { MenuStyled  } from "../../styled";

export default function Menu() {
    return(
    <MenuStyled> 
        <nav>
            <ul>
                <li><Link to ='/Home'>Home</Link></li>
                <li><Link to ='/ModaFeminina'>Moda Feminina</Link></li>
                <li><Link to='/ModaMasculina'>Moda Masculina</Link></li>
                <li><Link to='/ModaInfantil'>Moda Infantil</Link></li>           
                <li><Link to='/Sobre'>Sobre</Link></li>
            </ul>
        </nav>
    </MenuStyled>
    )
}