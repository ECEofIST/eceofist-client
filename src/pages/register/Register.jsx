import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Topbar from "../../components/topbar/Topbar";

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };


    return <div className="register">
        <div className="topBarContainerInLogin">
        </div>
        <Topbar />
        <form className="registerForm" onSubmit={handleSubmit}>
            <span className="registerTitle">Register</span>
            <label>Username</label>
            <input
                type="text"
                autoFocus={true}
                placeholder="Type your username..."
                onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input
                type="email"
                placeholder="Type your email..."
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
                type="password"
                placeholder="Type your password..."
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="registerButton">Register</button>
        </form>
        <Link className="link" to="/login">
            <button className="loginButton">
                Login
            </button>
        </Link>
        {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}

    </div>;
}
