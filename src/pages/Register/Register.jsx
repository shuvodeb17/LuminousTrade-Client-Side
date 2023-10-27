import LoginRegistrationTitle from '../../components/LoginRegistrationTitle/LoginRegistrationTitle';
import './Register.css';
import RegisterForm from './RegisterForm';

const Register = () => {
    return (
        <div className="login-wrapper">
            <div className='login'>
                <LoginRegistrationTitle title="Register" />
            </div>

            <RegisterForm />
        </div>
    );
};

export default Register;