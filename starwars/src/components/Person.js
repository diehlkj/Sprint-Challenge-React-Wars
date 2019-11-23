import React from 'react';
import styled from 'styled-components';

const Person = props => {

    const PersonContainer = styled.div`
        width: 400px;
        padding: 10px;
        margin: 10px auto;
        border: 5px solid rgba(133, 181, 254, 0.74);
        border-radius: 40px 0px 40px 0px;
        background-color: rgba(33, 117, 251, 0.71);
        background-image:
            radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%),
            repeating-linear-gradient(90deg,rgba(223, 234, 251, 0.5),rgba(223, 234, 251, 0.5) 1px,rgba(123, 177, 211, 0) 1px,rgba(123, 177, 211, 0) 16px),
            repeating-linear-gradient(0deg,rgba(223, 234, 251, 0.5),rgba(223, 234, 251, 0.5) 1px,rgba(123, 177, 211, 0) 1px,rgba(123, 177, 211, 0) 14px);
    `;
    const Name = styled.h2`
        font-size: 26px
    `;
    const Data = styled.p`
        font-size: 20px
    `;

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
