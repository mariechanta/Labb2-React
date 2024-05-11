/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledStudent = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
`;

const StudentComponent = ({ student }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <StyledStudent>
      // eslint-disable-next-line react/prop-types
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </StyledStudent>
  );
};

export default StudentComponent;
