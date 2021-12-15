import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';

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
            console.log(res.data);
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="container">
            <div className="philosophyForm mx-auto">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Register</h3>
                    <div className="customInput">
                        <label htmlFor="philosophyFirstName" className={username && "labelToTop"}>Username</label>
                        <input id="philosophyFirstName" className={username && "activeInput"} value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="" required />
                    </div>
                    <div className="customInput">
                        <label htmlFor="philosophyLastName" className={email && "labelToTop"} >Email</label>
                        <input id="philosophyLastName" className={email && "activeInput"} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="" required />
                    </div>
                    <div className="customInput">
                        <label htmlFor="philosophyEmail" className={password && "labelToTop"}>Password</label>
                        <input id="philosophyEmail" className={password && "activeInput"} onClick={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="" required />
                    </div>
                    <button type="submit" class="philosophySubmitButton d-flex align-items-center justify-content-center">
                        Submit
                    </button>
                </form>
                <div>
                    {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
                </div>
            </div>
        </div>
    );
}