import styled from "@emotion/styled"

const Container = styled.div`
    width: 600px;
    
    display: flex;
    padding: 2rem;
    margin-bottom: 0.5rem;
    box-shadow: 3px 2px 6px #333333;
`;

const LeftContainer = styled.div`
    width: 30%;
    margin-right: 15px;
`;

const RightContainer = styled.div`
    width: 70%;
`;
const RightSubContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
`
const RightSmallContainer = styled.div`
    margin-bottom: 10px;
`

const Avatar = styled.img`
    width: 100%;
    height: auto;
`;

const Heading = styled.h2`
    color:  #333333;
`;

const Label = styled.span`
    color:  #333333;
`


export {Container, LeftContainer, RightContainer, Avatar, Heading, Label, RightSubContainer, RightSmallContainer}