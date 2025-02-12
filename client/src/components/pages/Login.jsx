import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
                username: <input type="text" name="username" /> <br />
                password: <input type="text" name="password" />
            <p>Dont have an account?</p>
            <Link
                to="/Register"
                >
                Register
            </Link>
        </div>
    );
}