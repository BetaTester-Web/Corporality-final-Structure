import React, { useEffect, useContext, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./Login.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from "axios";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
        <div className="container">
            <div className="philosophyForm mx-auto">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Login</h3>
                    <div className="customInput">
                        <label htmlFor="philosophyFirstName" className={username && "labelToTop"}>Username</label>
                        <input ref={userRef} id="philosophyFirstName" className={username && "activeInput"} value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="" required />
                    </div>
                    <div className="customInput">
                        <label htmlFor="philosophyEmail" className={password && "labelToTop"}>Password</label>
                        <input ref={passwordRef} id="philosophyEmail" className={password && "activeInput"} onClick={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="" required />
                    </div>
                    <button type="submit" class="philosophySubmitButton d-flex align-items-center justify-content-center">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;