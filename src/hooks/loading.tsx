import React, { createContext, useContext, useState } from 'react';
import Loading from '../components/Loading';

interface LoadingContextData {
    loading: boolean,
    message: string,
    showLoading(message: string): void;
    hideLoading(): void;
}

const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

const LoadingProvider: React.FC = ({ children }) => {
	const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const showLoading = (message: string) => {
    setLoading(true);
    setMessage(message);
  }

  const hideLoading = () => setLoading(false);

	return (
		<LoadingContext.Provider value={{ loading, message, showLoading, hideLoading }}>
		  {children}
      <Loading {...{ loading, message }} />
		</LoadingContext.Provider >
	);
}

function useLoading(): LoadingContextData {
	const context = useContext(LoadingContext);

	if (!context) {
		throw new Error('useLoading must be used within a LoadingProvider')
	}
	return context;
}

export { LoadingProvider, useLoading };