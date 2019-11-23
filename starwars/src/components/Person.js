import React from 'react';
import styled from 'styled-components';

const Person = props => {

    const PersonContainer = styled.div`
        width: 400px;
        background: #fff;
        padding: 10px;
        margin: 10px auto;
    `;
    const Name = styled.h2``;
    const Data = styled.p``;

    return (
        <PersonContainer className="Person">
            <Name>{props.name}</Name>
            <Data>Gender: {props.gender}</Data>
            <Data>Born: {props.birth_year}</Data>
            <Data>Hair Color: {props.hair_color}</Data>
            <Data>Eye Color: {props.eye_color}</Data>
            <Data>Height {props.height}</Data>
            <Data>Mass: {props.mass}</Data>
        </PersonContainer>
    );
}

export default Person;
