import React from 'react';
import { getDepartments } from '../../services/api';

interface DepartmentsProps {
    showLoading(message: string): void;
    hideLoading(): void;
}

const Departments: React.FC<DepartmentsProps> = ( { showLoading, hideLoading }) => {
    
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
