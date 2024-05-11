// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Skolapplikation</h1>
    </StyledHeader>
  );
};

export default Header;
