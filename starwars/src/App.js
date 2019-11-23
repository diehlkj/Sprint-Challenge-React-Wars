import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Person from "./components/Person";
import "./App.css";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const CardContainer = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  const [swapi, setSwapi] = useState([]);
  const [swapiPage, setSwapiPage] = useState(1);


  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people?page=${swapiPage}`)
      .then(response => {
        setSwapi(response.data.results);
        console.log(response);
      })
      .catch(error => console.log(`Uh oh... ${error}`));
  }, [swapiPage]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2>Characters</h2>

      <button onClick={() => {
        if (swapiPage > 1) {
          return setSwapiPage(swapiPage - 1);
        } else {
          console.log('Cant Go Back');
        }
      }}>Previous Page</button>
      <button onClick={() => {
          return setSwapiPage(swapiPage + 1);
      }}>Next Page</button>

      <CardContainer>
        {swapi.map(data => {
          return (
            <Person
              name={data.name}
              gender={data.gender}
              birth_year={data.birth_year}
              hair_color={data.hair_color}
              eye_color={data.eye_color}
              height={data.height}
              mass={data.mass}
              key={data.url}
            />
          );
        })}
      </CardContainer>
    </div>
  );
};

export default App;
