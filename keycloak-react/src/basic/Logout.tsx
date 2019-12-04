import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'

export interface ILogoutProps extends RouteComponentProps<any> {
    keycloak: any;
}

class Logout extends Component<ILogoutProps, {}> {

  logout() {
    this.props.history.push('/');
    this.props.keycloak.logout();
  }

  render() {
    return (
      <button onClick={ () => this.logout() }>
        Logout
      </button>
    );
  }
}
export default withRouter(Logout);