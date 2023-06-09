import React, { useState, useEffect } from "react";
import styled from "styled-components"
import starticon from '../assets/starticon.svg'
import turnicon from '../assets/turnicon.svg'
import righticon from "../assets/rightanswer.svg";
import almosticon from "../assets/almostanswer.svg";
import wrongicon from "../assets/wronganswer.svg";



export default function Card({index,card,answered,setAnswered,icons,setIcons}){
    const [cardState, setCardState] = useState("closed");
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        if (cardState === "answered") {
            if (answer === "right") {
                setIcons(icons => [...icons, { src: righticon, test: "zap-icon" }]);
            } else if (answer === "almost") {
                setIcons(icons => [...icons, { src: almosticon, test: "partial-icon" }]);
            } else if (answer === "wrong") {
                setIcons(icons => [...icons, { src: wrongicon, test: "no-icon" }]);
            }
        }
    }, [cardState, answer, setIcons]);

    
    function openCard(){
        setCardState("open");
    }
    function turnCard(){
        setCardState("turned");
    }
    function answerCard(status) {
        setAnswer(status);
        setAnswered(answered + 1);
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
            return (
                <Question data-test="flashcard">
                    <RightText data-test="flashcard-text">
                        Pergunta {index + 1}
                    </RightText>
                    <AnswerIcon src={righticon} data-test="zap-icon"></AnswerIcon>
                </Question>
            );

        } else if (answer === "almost") {
            return(
                <Question data-test="flashcard">
                    <AlmostText data-test="flashcard-text">
                        Pergunta {index + 1}
                    </AlmostText>
                    <AnswerIcon src={almosticon} data-test="partial-icon"></AnswerIcon>
                </Question>
            )
        } else if (answer === "wrong") {
            return(
                <Question data-test="flashcard">
                    <WrongText data-test="flashcard-text">
                        Pergunta {index + 1}
                    </WrongText>
                    <AnswerIcon src={wrongicon} data-test="no-icon"></AnswerIcon>
                </Question>
            )
        }
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
    background: #FFFFD4;
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
    background: #FFFFD4;
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
const RightText = styled.h3`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    text-decoration-line: line-through;
    color: #2FBE34;
`;
const AlmostText = styled.h3`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    text-decoration-line: line-through;
    color: #FF922E;
`;
const WrongText = styled.h3`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    text-decoration-line: line-through;
    color: #FF3030;
`;

const AnswerIcon = styled.img`
    width: 20px;
`;