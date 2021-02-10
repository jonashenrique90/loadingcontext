import React from 'react';
import { getDepartments } from '../../services/api';
import { useLoading } from '../../hooks/loading';

const Departments: React.FC = () => {

    const {showLoading, hideLoading} = useLoading();
    
    const handleGetDepartments = async () => {
        showLoading('Carregando Departamantos');
        const response = await getDepartments().then(response => {
            hideLoading();
            return response;
        })
        console.log({ response });           
    }

    return (
        <div>
            <button onClick={handleGetDepartments}>Buscar departamentos</button>
        </div>
    )
}

export default Departments;
