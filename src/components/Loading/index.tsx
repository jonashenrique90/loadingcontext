import React from 'react';
import Spinner from 'react-spinkit';

interface LoadingProps {
    loading: boolean;
    message: string;
}

const Loading: React.FC<LoadingProps> = ( { loading, message }) => {

    return loading ? (
        <div className='overlay-content'> 
            <div className='wrapper'> 
                <Spinner 
                    name='ball-pulse-rise' 
                    fadeIn='none' 
                    color='yellow' 
                /> 
                <span className='message'> 
                    {message} 
                </span> 
            </div> 
        </div> 
    ) : null
}

export default Loading;
