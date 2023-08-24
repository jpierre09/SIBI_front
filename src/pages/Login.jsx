import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginSibi';
import { handleLogin } from '../services/loginApi';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



// Función para manejar el cierre de sesión
export const handleLogout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('username');
  window.location.href = "/loginSibi";  // Redirige al usuario a la página de inicio de sesión
}

const LoginPage = () => {
  const [loginError, setLoginError] = useState(null);

  const handleUserLogin = async (username, password) => {
    try {
      await handleLogin(username, password, setLoginError);
    } catch (error) {
      console.error('Error en el manejo del inicio de sesión.', error);
      setLoginError(
        'Hubo un error en el inicio de sesión. Por favor, inténtalo de nuevo.'
      );
    }
  const [loginError, setLoginError] = React.useState(null);


  const handleLogin = (username, password) => {
    axios.post('http://127.0.0.1:8000/api/token/', {
        username: username,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.status === 200) {
            console.log("Inicio de sesión exitoso:", response.data);
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('username', username); 
            window.location.href = "/";
        }
    })
    .catch(error => {
      setLoginError("Credenciales inválidas. Inténtalo de nuevo.");
      console.error("Error en el inicio de sesión:", error.response);
    });
  };

  // Función para manejar el cierre de sesión
  const handleLogout = async () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login'; // Redirige al usuario a la página de inicio de sesión
  };
  

  return (
    <div>
      <LoginForm onLogin={handleLogin} errorMessage={loginError} />
      {/* Puedes añadir un botón o algún mecanismo para llamar a handleLogout cuando el usuario quiera cerrar sesión */}
    </div>
  );
};

export default LoginPage;
