import React from "react"
import {Container, LeftContainer, RightContainer,  RightSubContainer, RightSmallContainer, Avatar, Heading, Label} from "./styled-list"
import Star from "./star"

const List = ({ name, rating, imgUrl, clinicName, clinicAddress, specialties}) => {

    return (
        <Container>
            <LeftContainer>
                <Avatar src={imgUrl} />
            </LeftContainer>
            <RightContainer>
                <Heading> {name}</Heading>
                <Star number={rating} />
                <RightSubContainer>
                    {specialties.map( (specialty) => {
                        return  <Label key={specialty.specialty_id}> {specialty.name}</Label>
                    }) }
                </RightSubContainer>
                <RightSmallContainer>
                    <Label> {clinicName}</Label>
                </RightSmallContainer>
                <RightSmallContainer>
                    <Label> {clinicAddress}</Label>
                </RightSmallContainer>
            </RightContainer>
        </Container>
    );
}
export default List