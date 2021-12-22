import { useContext, useEffect, useState } from "react";
import { CKEditor } from 'ckeditor4-react';
import "./write.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        window.location.replace("/login");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newarticle = {
            username: user.username,
            title,
            desc
        };
        console.log(user.email);
        console.log(title);
        console.log(desc);
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newarticle.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post("/articles", newarticle);
            window.location.replace("/" + res.data.slug);
        } catch (err) { console.log(err) }
    };
    return (
        <div className="write container">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <div className="d-flex justify-content-between">
                        <label htmlFor="fileInput" className="philosophySubmitButton">
                            Upload blog cover image
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        {user && <div class="philosophySubmitButton d-flex align-items-center justify-content-center float-end" onClick={handleLogout}>
                            Logout
                        </div>}
                    </div>
                    <div className="customInput mt-3 mb-2">
                        <label htmlFor="philosophyFirstName" className={title && "labelToTop"}></label>
                        <input type="text"
                            placeholder="Title"
                            autoFocus={true}
                            onChange={e => setTitle(e.target.value)} className={title && "activeInput"} required />
                    </div>
                </div>
                <div className="writeFormGroup">
                    <CKEditor
                        activeClass="editor writeInput writeText"
                        content={desc}
                        onChange={e => setDesc(e.editor.getData())} />
                </div>
                <button type="submit" class="philosophySubmitButton d-flex align-items-center justify-content-center mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
}