// import React, { useEffect, useContext, useRef, useState } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import "./Login.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.min.js';
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";


// function Login() {
//     // const [username, setUsername] = useState("");
//     // const [password, setPassword] = useState("");
//     const userRef = useRef();
//     const passwordRef = useRef();
//     const { dispatch, isFetching } = useContext(Context);
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         dispatch({ type: "LOGIN_START" });
//         try {
//             const res = await axios.post("/auth/login", {
//                 username: userRef.current.value,
//                 password: passwordRef.current.value,
//             });
//             dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//         } catch (err) {
//             dispatch({ type: "LOGIN_FAILURE" });
//         }
//     };
//     useEffect(() => {
//         Aos.init({
//             disable: function () {
//                 var maxWidth = 800;
//                 return window.innerWidth < maxWidth;
//             }
//         });
//     });
//     return (
//         <div className="login">
//             <span className="loginTitle">Login</span>
//             <form className="loginForm" onSubmit={handleSubmit}>
//                 <label>Username</label>
//                 <input
//                     type="text"
//                     className="loginInput"
//                     placeholder="Enter your username..."
//                     ref={userRef}
//                 />
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     className="loginInput"
//                     placeholder="Enter your password..."
//                     ref={passwordRef}
//                 />
//                 <button className="loginButton" type="submit" disabled={isFetching}>
//                     Login
//                 </button>
//             </form>
//             <button className="loginRegisterButton">
//                 <Link className="link" to="/register">
//                     Register
//                 </Link>
//             </button>
//         </div>
//     );
// }

// export default Login;

import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    // const dispatch1 = useContext(Context);
    // console.log(dispatch1);

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

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
}
