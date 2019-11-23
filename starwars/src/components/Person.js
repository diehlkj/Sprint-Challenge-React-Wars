import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import './App.css';

const Person = props => {

  return (
    <div className="Person">
      <p>{props.name}</p>
      <p>{props.gender}</p>
      <p>{props.birth_year}</p>
      <p>{props.hair_color}</p>
      <p>{props.eye_color}</p>
      <p>{props.height}</p>
      <p>{props.mass}</p>
    </div>
  );
}

export default Person;
