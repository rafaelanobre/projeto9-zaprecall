import React from "react";
import styled from "styled-components";

export default function Footer({answered,setAnswered,cardsNumber,icons}){
    return(
        <FooterDiv data-test="footer">
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
