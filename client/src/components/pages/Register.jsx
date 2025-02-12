import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <h1>Register</h1>
            username: <input type="text" name="username" /> <br />
            password: <input type="text" name="password" />
            <p>Already have an account?</p>
            <Link
                to="/Login"
                >
                Login
            </Link>

        </div>
    );
}