import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  color: #000;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
    color: #FF0033;
  }

  @media (min-width: 992px) {
    font-size: 28px;
    color: #0033CC;
  }
`;

const MyComponent = () => {
  return (
    <Wrapper>
      <h1>Hello World</h1>
      <p>This is a paragraph.</p>
    </Wrapper>
  );
};

export default MyComponent;