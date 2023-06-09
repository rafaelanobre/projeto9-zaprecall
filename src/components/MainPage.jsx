import React from "react";
import { useState } from 'react'
import styled from "styled-components";
import logo from '../assets/logo.svg'
import CardQuestions from '../CardQuestions'
import Card from './Card.jsx'
import Footer from "./Footer";

export default function MainPage({answered,setAnswered}){
    const [icons, setIcons] = useState([]);

    return(
        <Page>
            <TopDiv>
                <LogoImg src={logo} alt="Logo ZapRecall"></LogoImg>
                <H2>ZapRecall</H2>
            </TopDiv>
        
            <>
            {CardQuestions.map((card, index) => {
                return (
                    <Card
                        key={index}
                        index={index}
                        card={card}
                        answered={answered}
                        setAnswered={setAnswered}
                        icons={icons}
                        setIcons={setIcons}
                    />
                );
            })}
            </>

            <Footer answered={answered} setAnswered={setAnswered} cardsNumber={CardQuestions.length} icons={icons} />


        </Page>
    )
}

//STYLED COMPONENTS
const Page = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;
`;
const TopDiv = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoImg = styled.img`
    width: 60px;
`;

const H2 = styled.h2`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    padding: 35px;
`;