import { route } from 'navi';
import React from 'react';
import { withKeycloak } from "react-keycloak";

const LoginPage = withKeycloak(({ keycloak }) => {
  return (
    <div>
      <button type="button" onClick={() => keycloak.login()}>
        Login
      </button>
    </div>
  );
});

export default route({
  title: 'Login',
  view: <LoginPage />
});