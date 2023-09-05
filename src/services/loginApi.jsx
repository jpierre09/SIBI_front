import axios from 'axios';

export const handleLogin = async (username, password, setLoginError) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/token/',
      {
        username: username,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 200) {
      console.log('Inicio de sesión exitoso:', response.data);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('username', username);
      window.location.href = '/';
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error.response);
    setLoginError('Credenciales inválidas. Inténtalo de nuevo.');
  }
};

export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
};

export const saveAccessToken = (newAccessToken) => {
  localStorage.setItem('access_token', newAccessToken);
};
