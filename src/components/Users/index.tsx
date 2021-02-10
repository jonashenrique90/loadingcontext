import React from 'react';
import { getUsers } from '../../services/api';
import { useLoading } from '../../hooks/loading';

const Users: React.FC = () => {
    const { showLoading, hideLoading } = useLoading();

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
