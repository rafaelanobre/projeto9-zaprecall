import React from "react"
import styled from "styled-components"
import starticon from '../assets/starticon.svg'

export default function Card({index,card,ListIcons,answered,setAnswered,icons,setIcons}){
    return(
        <Question>
            <ClosedText>Pergunta {index + 1}</ClosedText>
            <PlayIcon src={starticon} ></PlayIcon>
        </Question>
    )
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
    color:#333333;
`;

const ClosedText = styled.h3`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    color: #333333;
`;
