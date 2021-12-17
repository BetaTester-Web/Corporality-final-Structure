import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import "./Login.css";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            window.location.replace("/write");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
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
                    <button type="submit" class="philosophySubmitButton d-flex align-items-center justify-content-center" disable={isFetching}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}