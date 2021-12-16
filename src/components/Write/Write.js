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
    const { user } = useContext(Context);
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
            window.location.replace("/articles/" + res.data.slug);
        } catch (err) { console.log(err) }
    };
    return (
        <div className="write container">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <CKEditor
                        activeClass="editor writeInput writeText"
                        content={desc}
                        onChange={e => setDesc(e.editor.getData())} />
                </div>
                <button className="writeSubmit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}