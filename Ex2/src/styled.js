import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 20vw;
    
    
`

export const MenuStyled = styled.menu`
    nav {
        height: 20px;
    }

    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
    }

    a{
        text-decoration: none;
        color: black;
    }

    li:hover {
        border-bottom: 2px solid; 
    }

`

export const HomeStyled = styled.div`

    img {
        max-width: 100%;
    }
    
    text-align: center;

    .Imagens {
        display: flex;
        justify-content: space-around;
        height: 50vh;
    }

    figure {
        margin: 10px
    }

    figcaption {
        cursor: pointer;
    }

    .Tendências img {
        height: 25vh;
        width: 18vw;
    }

`

export const SobreStyled = styled.div`
    img {
        max-width: 100%;
    }

    .Nomes {
        height: 58.6vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`


export const FooterStyled = styled.footer`
    text-align: center;
    margin: 0;
    background: #fe9005;
    height: 10.8vh;

    h2{
        padding-top: 2%;
        font-size: medium;
    }

    p {
        font-size: x-small;
    }

`