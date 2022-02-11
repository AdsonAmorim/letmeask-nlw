import React from 'react';
import { useState, useEffect } from 'react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline }
  from 'react-google-login';
import { http } from '../../services/http';

type Response = GoogleLoginResponse | GoogleLoginResponseOffline

export function SocialLogin() {
  const [loginData, setLoginData] = useState({});

  const responseGoogle = (response: Response) => {
    // verifica se há o campo na resposta [typeguard]
    if ('googleId' in response) {
      setLoginData(response.profileObj);
    } else {
      console.log(response.code);
    }
  };

  const config = {
    headers: {
      type: 'admin',
    },
  };

  // Gambi da braba
  useEffect(() => {
    if (Object.keys(loginData).length > 0) {
      http.post('/create-user', loginData, config)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }, [loginData]);

  return (
    <>
      <GoogleLogin
        // eslint-disable-next-line max-len
        clientId={process.env.REACT_APP_CLIENT_ID!}
        buttonText="Entrar com Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        theme="dark"
      />
    </>
  );
}
