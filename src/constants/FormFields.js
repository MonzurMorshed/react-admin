import GoogleIcon from '../../src/assets/images/social_icon/google.png';
import AppleIcon from '../../src/assets/images/social_icon/apple.png';
import MicrosoftIcon from '../../src/assets/images/social_icon/microsoft.png';

const signupFields = [
    {
        labelText: 'Email Address',
        labelFor: 'emailAddress',
        placeholder: 'Email Address',
        type: 'email',
        autoComplete: 'email',
        isRequired: true,
        name: 'email',
        id: 'emailAddress',
    }
];

const loginFields = [
    {
        labelText: 'Email Address',
        labelFor: 'emailAddress',
        placeholder: 'Email Address',
        type: 'email',
        autoComplete: 'email',
        isRequired: true,
        name: 'email',
        id: 'emailAddress',
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        placeholder: 'Password',
        type: 'password',
        autoComplete: 'current-password',
        isRequired: true,
        id: 'password',
        name: 'password'
    }
];

const socialBtn = [
    {
        labelText: 'Continue with Google',
        labelFor: 'google',
        iconImg: GoogleIcon,
    },
    {
        labelText: 'Continue with Microsoft',
        labelFor: 'microsoft',
        iconImg: MicrosoftIcon,
    },
    {
        labelText: 'Continue with Apple',
        labelFor: 'apple',
        iconImg: AppleIcon,
    }
];

export { loginFields, socialBtn, signupFields}