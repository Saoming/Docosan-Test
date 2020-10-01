import styled from "@emotion/styled"

const Container = styled.div`
    width: 600px;
    
    display: flex;
    padding: 2rem;
    background: #f4f4f4;
    margin-bottom: 0.5rem;
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
`

const Avatar = styled.img`
    width: 100%;
    height: auto;
`;

const Heading = styled.h2`

`;

const Label = styled.span`

`


export {Container, LeftContainer, RightContainer, Avatar, Heading, Label, RightSubContainer}