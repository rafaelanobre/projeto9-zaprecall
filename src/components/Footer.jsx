import React from "react";
import styled from "styled-components";
import congrats from "../assets/congrats.svg"
import sad from "../assets/sad.svg"

export default function Footer({answered,setAnswered,cardsNumber,icons}){
    return(
        <FooterDiv data-test="footer">
            {answered === cardsNumber && (
                (() => {
                    for (let i = 0; i < icons.length; i++) {
                    if (icons[i].test === "no-icon") {
                        return (
                        <DivResult data-test="finish-text">
                            <TopDivResult>
                            <ResultIcon src={sad} alt="Putz..."></ResultIcon>
                            <ResultTitle>Putz...</ResultTitle>
                            </TopDivResult>
                            <ResultText>Ainda faltam alguns... Mas não desanime!</ResultText>
                        </DivResult>
                        );
                    }
                    }
                    return (
                    <DivResult data-test="finish-text">
                        <TopDivResult>
                        <ResultIcon src={congrats} alt="Parabéns!"></ResultIcon>
                        <ResultTitle>Parabéns!</ResultTitle>
                        </TopDivResult>
                        <ResultText>Você não esqueceu de nenhum flashcard!</ResultText>
                    </DivResult>
                    );
                })()
            )}



            <Text> {answered}/{cardsNumber} CONCLUÍDOS</Text>
            <IconsDiv>
            {icons.map((icon, index) => {
                return (
                    <IconBottom
                        key={index}
                        src={icon.src}
                        data-test={icon.test}
                        alt={icon.test}
                    />
                );
            })}
            </IconsDiv>
        </FooterDiv>
    )
}

//STYLED COMPONENTS
const FooterDiv = styled.div`
	width: 100%;
	//height: 80px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    padding: 20px;
`;

const Text = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #333333;
    margin-bottom: 5px;
`;

const IconsDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconBottom = styled.img`
    width: 23px;
    margin: 5px;
`;

const DivResult = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TopDivResult = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ResultIcon = styled.img`
    width: 25px;
    margin: 15px;
`;

const ResultTitle= styled.h4`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 18px;
    color: #333333;
`;

const ResultText = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
    margin-bottom: 15px;
`;