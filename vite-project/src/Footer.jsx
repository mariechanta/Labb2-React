// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2024 Skolapplikation. Alla rättigheter förbehållna.</p>
    </StyledFooter>
  );
};

export default Footer;
