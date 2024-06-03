import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding : 1rem;
    display : flex;
    flex-direction : row;
    align-itmes : flex-start;
    justify-content : flex-start;
    background-color : lightgrey;
`;

const Block = styled.div`
padding : ${(props) => props.padding};
border : 1px solid black;
border-radius : 1rem;
background-color : ${(props) => props.backgroundColor};
color : white;
font-size : 2rem;
font-weight : bold;
text-align : center;
`;

const Title = styled.h1`
    font-size : 1.5em;
    color : white;
    text-align : center;
`;

const Button = styled.button`
    color:${props => props.dark ? "white" : "dark"};
    background:${props => props.dark ? "black" : "white"};
    border:1px solid black;
    `;
const RoundedButton = styled(Button)`
border-radius : 16px;
    `;

const blockItems = [
    {
        label : "1",
        padding : "1rem",
        backgroundColor : "red",
    },
    {
        label : "2",
        padding : "3rem",
        backgroundColor : "green",
    },
    {
        label : "3",
        padding : "2rem",
        backgroundColor : "blue",
    },

]


function MainPage2(props) {
    return (
        <Wrapper>
            {blockItems.map((blockItem) => {
                return (
                    <Block
                        padding = {blockItem.padding}
                        backgroundColor = {blockItem.backgroundColor}
                    >
                        {blockItem.label}
                    </Block>
                )
            })}
            {/* <Title>안녕, 리액트</Title>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <RoundedButton>Round Button</RoundedButton>
            <RoundedButton dark>Round Button</RoundedButton> */}
        </Wrapper>
    )
}

export default MainPage2;