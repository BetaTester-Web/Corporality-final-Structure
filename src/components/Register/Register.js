import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "./register.css";

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
    return (
        <div className="container mx-auto login-container-1">
            <div className="row justify-content-between">
                <div className="col-lg-5 col-md-8 col-10 mx-auto text-center">
                    <form onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <input placeholder="Username" className="loginInput mt-3 mb-1" required onChange={(e) => setUsername(e.target.value)} />
                        <input placeholder="Email" className="loginInput mt-1 mb-1" required onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder="Password" className="loginInput mt-1 mb-1" required type="password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="login-button-wrapper mt-1">
                            <button type="submit" className="loginButton">Login</button>
                        </div>
                    </form>
                </div>
                {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
            </div>
        </div>
    );
}