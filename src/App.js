import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: green;
  font-size: 50px;
  text-align: center;
`

function App() {
  return (
    <div>
      <Title>
        Welcome to the fancy AI prompt app thing
      </Title >
    </div>
  );
}

export default App;
