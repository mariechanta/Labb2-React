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
      <h1>Welcome to school APP</h1>
            <img
                src="img1.png"
                alt="Beskrivande text för bilden"
                style={{ width: '1000px', height: '600px' }}
            />

    </StyledHeader>
  );
};

export default Header;
