import React from 'react';
import { LoadingProvider } from './loading';

const AppProvider: React.FC = ({ children }) => {
    return (
        <div>
            <LoadingProvider>{ children }</LoadingProvider>
        </div>
    )
}

export default AppProvider
