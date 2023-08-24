import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginSibi';
import { handleLogin } from '../services/loginApi';



// Función para manejar el cierre de sesión
export const handleLogout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('username');
  window.location.href = "/loginSibi";  // Redirige al usuario a la página de inicio de sesión
}

const LoginPage = () => {
  const [loginError, setLoginError] = useState(null);


  return (
    <div>
      <LoginForm onLogin={handleLogin} errorMessage={loginError} />
      {/* Puedes añadir un botón o algún mecanismo para llamar a handleLogout cuando el usuario quiera cerrar sesión */}
    </div>
  );
};

export default LoginPage;
