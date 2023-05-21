import React from "react";
import styled from "styled-components";
import logo from '../assets/logo.svg'

export default function LoginPage({setLogin}){
    return(
        <Page>
            <LogoImg src={logo} alt="Logo ZapRecall"></LogoImg>
            <H1>ZapRecall</H1>
            <LoginButton onClick={() => {
                    setLogin(false);
                }} data-test="start-btn">
                Iniciar Recall!
            </LoginButton>
        </Page>
    )
}

//STYLED COMPONENTS
const Page = styled.div`
	width: 100vw;
	height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

const LogoImg = styled.img`
    width: 140px;
`;

const H1 = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    padding: 35px;
`;

const LoginButton = styled.button`
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #D70900;
`;