import React from 'react';
import LoginForm from '../components/Login/LoginSibi';

const LoginPage = () => {
  
  const handleLogin = (username, password) => {
    // Lógica para el inicio de sesión
    // Por ejemplo: llamar a una API, actualizar el estado global, etc.
    console.log(`Intentando iniciar sesión con ${username} y ${password}`);
  };

  return (
    <div>
      {/* <h1>Página de inicio de sesión</h1> */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
