import React, { useEffect, useContext, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./Login.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from "axios";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";


function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    // const { dispatch, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // dispatch({ type: "LOGIN_START" });
        try {
            // const res = await axios.post("/auth/login", {
            //     username: userRef.current.value,
            //     password: passwordRef.current.value,
            // });
            // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            // dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    useEffect(() => {
        Aos.init({
            disable: function () {
                var maxWidth = 800;
                return window.innerWidth < maxWidth;
            }
        });
    });
    return (
        <div className="container mx-auto login-container-1">
            <div className="row justify-content-between">
                <div className="col-lg-5 col-md-8 col-10 mx-auto text-center">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <input ref={userRef} placeholder="Username" className="loginInput mt-3 mb-1" required />
                        <input ref={passwordRef} placeholder="Password" className="loginInput mt-1 mb-1" required type="password" />
                        <div className="login-button-wrapper mt-1">
                            {/* <button disabled={isFetching} type="submit" className="loginButton">Login</button> */}
                            <button type="submit" className="loginButton">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;