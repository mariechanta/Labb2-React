/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledTeacher = styled.div`
  background-color: #e0e0e0;
  padding: 10px;
  margin-bottom: 10px;
`;

// eslint-disable-next-line react/prop-types
const TeacherComponent = ({ teacher }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <StyledTeacher>
      // eslint-disable-next-line react/prop-types, react/prop-types, react/prop-types, react/jsx-no-comment-textnodes, react/prop-types, react/prop-types, react/jsx-no-comment-textnodes, react/prop-types, react/prop-types, react/jsx-no-comment-textnodes
      <h2>{teacher.name}</h2>
      // eslint-disable-next-line react/prop-types, react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes
      <p>Subject: {teacher.subject}</p>
      // eslint-disable-next-line react/prop-types, react/prop-types, react/prop-types, react/prop-types
      <p>Experience: {teacher.experience}</p>
    </StyledTeacher>
  );
};

export default TeacherComponent;
