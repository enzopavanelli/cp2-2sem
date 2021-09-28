import React from "react";
import Menu from "../Menu/Menu";
import { HomeStyled } from "../../styled";
import img1 from "../img/roupainf1.jpg";
import img2 from "../img/roupainf2.jpg";
import img3 from "../img/roupainf3.jpg";
import banner from "../img/banner_infantil.png";
import Footer from "../Footer/Footer";

export default function ModaInfantil() {
    return(
    <HomeStyled>
        <Menu/>
        <div>
            <img src={banner} alt="Banner Roupas" />
        </div>
        <div className = "Tendências">
            <h2>
                Compre já!
            </h2>
            <div className = "Imagens">
                <div className = "img1">
                    <figure>
                        <img src={img1} alt="Imagem Pessoa" />
                    </figure>
                    <figcaption>
                        Compre!
                    </figcaption>
                </div>
                <div className = "img2">
                    <figure>
                        <img src={img2} alt="Imagem Pessoa" />
                    </figure>
                    <figcaption>
                        Compre!
                    </figcaption>
                </div>
                <div className = "img3">
                    <figure>
                        <img src={img3} alt="Imagem Pessoa" />
                    </figure>
                    <figcaption>
                        Compre!
                    </figcaption>
                </div>
            </div>
        </div>
        <Footer/>
    </HomeStyled>
    )
}