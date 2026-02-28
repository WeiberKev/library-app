import { useState } from 'react';
import { registrarUsuario, loginUsuario, obtenerUsuarios } from './api';

const App = () => {
    const [usuarios, setUsuarios] = useState([]);

    const manejarRegistro = async () => {
        const nuevoUsuario = { username: 'andres123', password: 'segura123' };
        await registrarUsuario(nuevoUsuario);
    };

    const manejarLogin = async () => {
        const usuario = await loginUsuario({ username: 'andres123', password: 'segura123' });
        console.log('Usuario logueado:', usuario);
    };

    const listarUsuarios = async () => {
        const data = await obtenerUsuarios();
        setUsuarios(data);
    };

    return (
        <div>
            <button onClick={manejarRegistro}>Registrar Usuario</button>
            <button onClick={manejarLogin}>Login</button>
            <button onClick={listarUsuarios}>Listar Usuarios</button>
            <ul>
                {usuarios.map(user => <li key={user.id}>{user.username}</li>)}
            </ul>
        </div>
    );
};

export default App;