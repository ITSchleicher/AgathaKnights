import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <p>This is the login page</p>
            <p>Dont have an account?</p>
            <Link
                to="/Register"
                >
                Register
            </Link>
        </div>
    );
}