import React, { useState } from "react";
import styled from "styled-components"
import starticon from '../assets/starticon.svg'
import turnicon from '../assets/turnicon.svg'
import AnswerIcons from '../AnswerIcons'



export default function Card({index,card,ListIcons,answered,setAnswered,icons,setIcons}){
    const [cardState, setCardState] = useState("closed");
    let answer = "";
    let closedTextColor;
    let answerIconSrc;
    let answerIconDataTest;

    
    function openCard(){
        setCardState("open");
    }
    function turnCard(){
        setCardState("turned");
    }
    function answerCard(status){
        setAnswered(answered + 1);
        answer = status;

        setCardState("answered")
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
            <OpenQuestion data-test="flashcard">
                <QuestionText data-test="flashcard-text">{card.question}</QuestionText>
                <TurnIcon src={turnicon} onClick={turnCard} data-test="turn-btn"></TurnIcon>
            </OpenQuestion>
        )
    }
    if (cardState === "turned"){
        return(
            <TurnedCard data-test="flashcard">
                <AnswerText data-test="flashcard-text">{card.answer}</AnswerText>
                <ButtonsDiv>
                    <NoButton onClick={() => answerCard("wrong")} data-test="no-btn">Não lembrei</NoButton>
                    <PartialButton onClick={() => answerCard("almost")}  data-test="partial-btn">Quase não lembrei</PartialButton>
                    <ZapButton onClick={() => answerCard("right")}  data-test="zap-button">Zap!</ZapButton>
                </ButtonsDiv>
            </TurnedCard>
        )
    }
    if (cardState === "answered") {
        

        if (answer === "right") {
            closedTextColor = '#FF3030';
            answerIconSrc = AnswerIcons[0].icon;
            answerIconDataTest = AnswerIcons[0].datatest;
        } else if (answer === "almost") {
            closedTextColor ='#2FBE34';
            answerIconSrc = AnswerIcons[1].icon;
            answerIconDataTest = AnswerIcons[1].datatest;
        } else if (answer === "wrong") {
            closedTextColor = '#FF922E';
            answerIconSrc = AnswerIcons[2].icon;
            answerIconDataTest = AnswerIcons[2].datatest;
        }

        return (
            <Question data-test="flashcard">
                <AnsweredText data-test="flashcard-text" answer={answer}>
                    Pergunta {index + 1}
                </AnsweredText>
                <AnswerIcon data-test={answerIconDataTest}>{answerIconSrc}</AnswerIcon>
            </Question>
        );
    }
}

//STYLED COMPONENTS

//CLOSED
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

//OPENED

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

//TURNED
const TurnedCard = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
`;

const AnswerText = styled.h4`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 15px;
`;

const ButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NoButton = styled.button`
    width: 82px;
    height: 36px;
    background: #FF3030;
    border-radius: 5px;
    border: none;


    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
`;

const PartialButton = styled.button`
    width: 82px;
    height: 36px;
    background: #FF922E;
    border-radius: 5px;
    border: none;


    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
`;

const ZapButton = styled.button`
    width: 82px;
    height: 36px;
    background: #2FBE34;
    border-radius: 5px;
    border: none;


    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
`;

//ANSWERED
const AnsweredText = styled.h3`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    text-decoration-line: line-through;
    color: ${props => props.answer === "right" ? "#FF3030" : props.answer === "almost" ? "#2FBE34" : props.answer === "wrong" ? "#FF922E" : undefined};
`;

const AnswerIcon = styled.div`
    width: 20px;
`;
