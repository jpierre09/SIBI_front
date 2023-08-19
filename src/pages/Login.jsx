import React from 'react';
import LoginForm from '../components/Login/LoginSibi';
import axios from 'axios';

const LoginPage = () => {

  const handleLogin = (username, password) => {
    const csrftoken = getCookie('csrftoken');

    axios.post('http://127.0.0.1:8000/api-auth/login/', {
        username: username,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        withCredentials: true
    })
    .then(response => {
        if (response.status === 200) {
            console.log("Inicio de sesión exitoso:", response.data);
            window.location.href = "/";
            // console.log(username)
        }
    })
    .catch(error => {
        console.error("Error en el inicio de sesión:", error.response);
        // console.log(username)
    });
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
