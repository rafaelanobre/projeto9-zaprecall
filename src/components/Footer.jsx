import React from "react";
import styled from "styled-components";

export default function Footer({answered,setAnswered,cardsNumber}){
    return(
        <FooterDiv>
            <Text> {answered}/{cardsNumber} CONCLUÍDOS</Text>
        </FooterDiv>
    )
}

//STYLED COMPONENTS
const FooterDiv = styled.div`
	width: 100%;
	height: 70px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
`;

const Text = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #333333;
`;
