import React from 'react'
import "./Philosophy.css"

const NewPhilosophy = () => {
    return (
        <div className="philosophyContainer">
            <div className="philosophyHead">
                <h2>PHILOSOPHY</h2>
                <hr className="philosophyLine" />
                <p className="philosophySubtiles">
                    To use agility to its optimum to bring satisfaction,
                    experience and brilliance in outcomes for our clients.
                </p>
            </div>
            <div className="philosophyBody">
                <img src="/img/HomePage/media/amico.png" alt="" />
                <div className="philosophyForm">
                    <h3>Request a callback</h3>
                    <div className="customInput">
                        <label htmlFor="philosophyFirstName" className="labelToTop">First Name</label>
                        <input id="philosophyFirstName" type="text" placeholder="" />
                    </div>
                    <div className="customInput">
                        <label htmlFor="philosophyLastName">Last Name</label>
                        <input id="philosophyLastName" type="text" placeholder="" />
                    </div>
                    <div className="customInput">
                        <label htmlFor="philosophyEmail">Email Id</label>
                        <input id="philosophyEmail" type="email" placeholder="" />
                    </div>
                    <div className="customInput">
                        <label htmlFor="philosophyMobile">Mobile</label>
                        <input id="philosophyMobile" type="text" placeholder="" />
                    </div>
                    <div className="philosophySubmitButtonWrapper">
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
