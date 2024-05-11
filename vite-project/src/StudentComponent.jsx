import React from 'react';
import styled from 'styled-components';

const StyledStudent = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
`;

const StudentComponent = ({ student }) => {
  return (
    <StyledStudent>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </StyledStudent>
  );
};

export default StudentComponent;
