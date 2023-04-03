// App.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.color || 'blue'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
`;

function App() {
  return (
    <div>
      <Button color="green">Green Button</Button>
      <Button>Blue Button</Button>
    </div>
  );
}

export default App;