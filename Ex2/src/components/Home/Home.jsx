import React from "react";
import Menu from "../Menu/Menu";
import { HomeStyled } from "../../styled";
import img1 from "../img/alto_astral.jpg";
import img2 from "../img/tons_pastel.jpg";
import img3 from "../img/novo_jeans.jpg";
import banner from "../img/banner_roupas.jpg";
import Footer from "../Footer/Footer";

export default function Home() {
    return(
    <HomeStyled>
        <Menu/>
        <div>
            <img src={banner} alt="Banner Roupas" />
        </div>
        <div className = "Tendências">
            <h2>
                Tendências da Temporada
            </h2>
            <div className = "Imagens">
                <div className = "img1">
                    <figure>
                        <img src={img1} alt="Imagem Pessoa" />
                    </figure>
                    <figcaption>
                        ALTO ASTRAL
                    </figcaption>
                </div>
                <div className = "img2">
                    <figure>
                        <img src={img2} alt="Imagem Pessoa" />
                    </figure>
                    <figcaption>
                        APOSTE NOS TONS PÁSTEIS
                    </figcaption>
                </div>
                <div className = "img3">
                    <figure>
                        <img src={img3} alt="Imagem Pessoa" />
                    </figure>
                    <figcaption>
                        O NOVO JEANS
                    </figcaption>
                </div>
            </div>
        </div>
        <Footer/>
    </HomeStyled>
    )
}