//import liraries
import React from 'react';
import SecurityBaseComponent from '../../base/security.base';
import RegisterFormComponent from './registerform';

// create a component
export default class RegisterComponent extends SecurityBaseComponent {
    render() {
        return (
            <this.BaseLayout>
                <RegisterFormComponent />
            </this.BaseLayout>
        );
    }
}