import Keycloak from 'keycloak-js';
import React from 'react';
import { KeycloakProvider } from "react-keycloak";
import { AppRouter } from './routes';

const keycloak = Keycloak();

class PersistedApp extends React.PureComponent {
  onKeycloakEvent = (event: any, error: any) => {
    console.log('onKeycloakEvent', event, error);
  };

  onKeycloakTokens = (tokens: any) => {
    console.log('onKeycloakTokens', tokens);
  };

  render() {
    return (
      <KeycloakProvider
        keycloak={keycloak}
        //initConfig={{ onLoad: "check-sso "}}
        onEvent={this.onKeycloakEvent}
        onTokens={this.onKeycloakTokens}
      >
        <AppRouter />
      </KeycloakProvider>
    );
  }
}

export default PersistedApp;