import React from "react"
import {Container, LeftContainer, RightContainer, RightSubContainer, Avatar, Heading, Label} from "./styled-list"
import Star from "./star"

const List = ({ name, distance, rating, language, imgUrl, clinicName, clinicAddress, specialties}) => {

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
                <Label> {clinicName}</Label>
                <Label> {clinicAddress}</Label>
            </RightContainer>
        </Container>
    );
}
export default List