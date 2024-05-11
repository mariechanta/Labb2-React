// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useContext, useMemo, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StudentComponent from './StudentComponent';
import TeacherComponent from './TeacherComponent';
import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import ErrorComponent from './ErrorComponent';

// Styled component
const MainContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

// Context
const SchoolContext = React.createContext();

// Initial state for reducer
const initialState = {
  students: [],
  teachers: [],
  loading: true,
  error: null
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        students: action.payload.students,
        teachers: action.payload.teachers,
        loading: false,
        error: null
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const fetchData = async () => {
  try {
    const response = await axios.get('https://tyra.io/sv/moduler/');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const data = await fetchData();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchDataFromAPI();
  }, []);

  const { students, teachers, loading, error } = state;

  const sortedStudents = useMemo(() => {
    // Sort students alphabetically
    return students.sort((a, b) => a.name.localeCompare(b.name));
  }, [students]);

  const renderStudents = useCallback(() => {
    return sortedStudents.map(student => (
      <StudentComponent key={student.id} student={student} />
    ));
  }, [sortedStudents]);

  const renderTeachers = useCallback(() => {
    return teachers.map(teacher => (
      <TeacherComponent key={teacher.id} teacher={teacher} />
    ));
  }, [teachers]);

  return (
    <MainContainer>
      <Header />
      {loading && <LoadingSpinner />}
      {error && <ErrorComponent error={error} />}
      <SchoolContext.Provider value={{ students, teachers }}>
        <div>
          <h2>Students</h2>
          {renderStudents()}
        </div>
        <div>
          <h2>Teachers</h2>
          {renderTeachers()}
        </div>
      </SchoolContext.Provider>
      <Footer />
    </MainContainer>
  );
};

export default App;
