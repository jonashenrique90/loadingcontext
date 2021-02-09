import React from 'react';
import { getUsers } from '../../services/api';

interface UsersProps {
    showLoading(message: string): void;
    hideLoading(): void;
}

const Users: React.FC<UsersProps> = ( { showLoading, hideLoading }) => {

    const handleGetUsers = async () => {
        showLoading('Carregando usuários')
        const response = await getUsers().then(response => {
            hideLoading();
            return response;
        })
        console.log({ response });
    }

    return (
        <div>
            <button onClick={handleGetUsers}>Buscar usuários</button>
        </div>
    )
}

export default Users;
