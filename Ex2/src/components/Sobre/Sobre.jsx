import React from "react";
import Menu from "../Menu/Menu";
import { SobreStyled } from "../../styled";
import banner from "../img/banner_roupas.jpg";
import Footer from "../Footer/Footer";

export default function Sobre() {
    return(
    <SobreStyled>
        <Menu/>
        <div>
            <img src={banner} alt="Banner Roupas" />
        </div>
        <div className="Nomes">
            <h2>Fundadores!</h2>
            <ul>
                <li>Enzo Pavanelli rm:88790</li>
                <li>Guilherme Aversa Ferreira rm:80369</li>
                <li>Luis Henrique Pires Tsujino rm:87341</li>
                <li>Murilo Sousa de Carvalho rm:88650</li>
            </ul>
        </div>
        <Footer/>
    </SobreStyled>
    )
}



