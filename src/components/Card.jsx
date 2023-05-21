import React, { useState } from "react";
import styled from "styled-components"
import starticon from '../assets/starticon.svg'
import turnicon from '../assets/turnicon.svg'

export default function Card({index,card,ListIcons,answered,setAnswered,icons,setIcons}){
    const [cardState, setCardState] = useState("closed");
    function openCard(){
        setCardState("open");
    }
    function turnCard(){
        setCardState("answered");
    }

    if (cardState === "closed"){
        return(
            <Question data-test="flashcard">
                <ClosedText data-test="flashcard-text">Pergunta {index + 1}</ClosedText>
                <PlayIcon src={starticon} onClick={openCard} data-test="play-btn"></PlayIcon>
            </Question>
        )
    }
    if (cardState === "open"){
        return(
            <OpenQuestion>
                <QuestionText data-test="flashcard-text">{card.question}</QuestionText>
                <TurnIcon src={turnicon} onClick={turnCard} data-test="turn-btn"></TurnIcon>
            </OpenQuestion>
        )
    }
    if (cardState === "turned"){
        return(
            <div>Virado</div>
        )
    }
    if (cardState === "answered"){
        return(
            <div>Respondido</div>
        )
    }
}

//STYLED COMPONENTS
const Question = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
`;

const PlayIcon = styled.img`
    width: 20px;
`;

const ClosedText = styled.h3`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    color: #333333;
`;

const OpenQuestion = styled.div`
    width: 300px;
    height: 130px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    position: relative;
`;

const TurnIcon = styled.img`
    width: 20px;
    position: absolute;
    bottom: 5%;
    right: 5%;
`;

const QuestionText = styled.h4`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
`;
