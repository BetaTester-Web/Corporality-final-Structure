import React, { useState } from 'react'
import "./Philosophy.css"

const NewPhilosophy = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className="philosophyContainer">
            <div className="philosophyHead">
                <h2 data-aos="fade-down">PHILOSOPHY</h2>
                <hr className="philosophyLine" />
                <p data-aos="fade-down" className="philosophySubtiles">
                    To use agility to its optimum to bring satisfaction,
                    experience and brilliance in outcomes for our clients.
                </p>
            </div>
            <div className="philosophyBody">
                <img data-aos="fade-right" src="/img/HomePage/media/amico.png" alt="" />
                <div data-aos="fade-left" className="philosophyFormWrapper">
                    <div className="philosophyForm">
                        <h3>Request a callback</h3>
                        <div className="customInput">
                            <label htmlFor="philosophyFirstName" className={firstName && "labelToTop"}>First Name</label>
                            <input id="philosophyFirstName" className={firstName && "activeInput"} value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="" />
                        </div>
                        <div className="customInput">
                            <label htmlFor="philosophyLastName" className={lastName && "labelToTop"} >Last Name</label>
                            <input id="philosophyLastName" className={lastName && "activeInput"} value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="" />
                        </div>
                        <div className="customInput">
                            <label htmlFor="philosophyEmail" className={email && "labelToTop"}>Email Id</label>
                            <input id="philosophyEmail" className={email && "activeInput"} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="" />
                        </div>
                        <div className="customInput">
                            <label htmlFor="philosophyMobile" className={mobile && "labelToTop"}>Mobile</label>
                            <input id="philosophyMobile" className={mobile && "activeInput"} value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" placeholder="" />
                        </div>
                        <button type="button" class="philosophySubmitButton">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPhilosophy
