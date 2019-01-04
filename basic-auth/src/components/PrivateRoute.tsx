import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export interface PrivateRouteProps {
    Component: any;
    rest: any;
}

export const PrivateRoute = (pr: PrivateRouteProps) => {
    const { Component, rest } = pr;
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
    );
}