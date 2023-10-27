import LoginRegistrationTitle from '../../components/LoginRegistrationTitle/LoginRegistrationTitle';
import './Login.css';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className='login'>
                <LoginRegistrationTitle title="User Login" />
            </div>

            <LoginForm />
        </div>
    );
};

export default Login;