import React from 'react';
import Users from './components/Users';
import Departments from './components/Departments';
import './index.css';
import AppProvider from './hooks';

const App = () => {

  return (
    <>
      <AppProvider>
        <Users/>
        <Departments />
      </AppProvider>
    </>
  );
}

export default App;
