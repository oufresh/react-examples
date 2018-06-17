import React from 'react';
import UserContext from '../../user/UserContext';

const User = (props) => {
    return (
        <UserContext.Consumer>
            {user => (
                <label>{'Logged user: ' + user}</label>
            )}
        </UserContext.Consumer>
    );
};

export default User;