import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginSibi';
import { handleLogin } from '../services/loginApi';

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
