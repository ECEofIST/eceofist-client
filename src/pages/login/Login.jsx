import { Link } from "react-router-dom";
import "./Login.css";
import Topbar from "../../components/topbar/Topbar";

import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };


    return <div className="login">
        <div className="topBarContainerInLogin">
        </div>
        <Topbar />
        <form className="loginForm" onSubmit={handleSubmit}>
            <span className="loginTitle">Login</span>
            <label>Username</label>
            <input type="text" autoFocus={true} placeholder="Type your username..." ref={userRef} />

            <label>Password</label>
            <input type="password" placeholder="Type your password..." ref={passwordRef} />

            <button className="loginBtn" type="submit" disabled={isFetching}>Login</button>
        </form>
        <Link className="link" to="/register">
            <button className="registerBtn">
                Register
            </button>
        </Link>
    </div>;
}
