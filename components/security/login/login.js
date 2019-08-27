//import liraries
import React from 'react';
import LoginFormComponent from './loginform';
import SecurityBaseComponent from '../../base/security.base';

// create a component
export default class LoginComponent extends SecurityBaseComponent {
    render() {
        return (
            <this.BaseLayout>
                <LoginFormComponent />
            </this.BaseLayout>
        );
    }
}