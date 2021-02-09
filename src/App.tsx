import React, { useState, createContext } from 'react';
import Users from './components/Users';
import Departments from './components/Departments';
import Loading from './components/Loading';
import './index.css';

const LoadingContext = createContext({
  loading: false,
  message: '',
  showLoading: (message: string) => {},
  hideLoading: () => {}
})

const App = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const showLoading = (message: string) => {
    setLoading(true);
    setMessage(message);
  }

  const hideLoading = () => setLoading(false);

  const value = {
    loading,
    message,
    showLoading,
    hideLoading
  }

  return (
    <>
      <LoadingContext.Provider value={value}>
        <LoadingContext.Consumer>
          {
            ({ showLoading, hideLoading, loading, message }) => (
              <>
                <Users {...{ showLoading, hideLoading }}/>
                <Departments {...{ showLoading, hideLoading }} />
                <Loading {...{ loading, message }} />
              </>
            )
          }
          
        </LoadingContext.Consumer>
      </LoadingContext.Provider>
    </>
  );
}

export default App;
