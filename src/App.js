import './App.css';
import React, {Component } from 'react';
import styled from 'styled-components';
import PromptBox from './components/promptBox';

const Title = styled.div`
  color: green;
  font-size: 50px;
  text-align: center;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  // hover colour change
  &:hover {
    color: red; // <Thing> when hovered
  }
`;

class App extends Component {
  render  () {
    return (
    <div>
      <Title>
        Welcome to the fancy AI prompt app thing
      </Title >
      <Button>
        Render Image
      </Button>
      <PromptBox/>
    </div>
    );
  }
}

export default App;
