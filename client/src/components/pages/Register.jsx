import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            } else if (response.status === 409) {
                console.error("Username already exists:", data.message);
                alert("Username already exists.");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error creating user:", error);
            alert("Failed to create user.");
        }
    };
    
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account?</p>
            <Link to="/Login">Login</Link>
        </div>
    );
}