// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  background-color: #ffcccc;
  color: #cc0000;
  padding: 10px;
  margin-bottom: 10px;
`;

// eslint-disable-next-line react/prop-types
const ErrorComponent = ({ error }) => {
  return (
    <StyledError>
      <p>Error: {error}</p>
    </StyledError>
  );
};

export default ErrorComponent;
