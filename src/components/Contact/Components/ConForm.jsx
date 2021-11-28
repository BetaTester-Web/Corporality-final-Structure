
import './ConForm.css'

const ConForm = () => {
    return (
        <>
            <div className="p-2 p-lg-0 pt-lg-5">
                <div className="container">
                    <div className="d-lg-flex align-items-center justify-content-between ">
                        <div className="conform-info-box mx-5">
                            <h2 className="conform-info-heading">LET’S TALK</h2>
                            <p className="conform-info-para">Our customer experience experts are always ready to provide you with all the answers. Call us now!</p>

                            <div className="conformc-add position-relative">
                                <div className="conformww-img">
                                    <img className="img-fluid" src="./img/Contact/Group 783.png" alt="" />
                                </div>

                                <div className="conform-diamond">

                                    <img className="img-fluid conform-diamo conform-cal" src="./img/Contact/Group 709.png" alt="" />
                                    <img className="img-fluid conform-diamo" src="./img/Contact/Rectangle 64.png" alt="" />
                                    <p>+61 2 83794089</p>
                                </div>

                            </div>

                        </div>

                        <div className="fluid">
                            <div className="conform-contactForm  p-4 m-3">
                                <p className="conform-contactHeading text-uppercase fw-bold my-5 fs-4">Contact us</p>
                                <div className="row my-3">
                                    <div className="col mx-2" >
                                    <input type="text" name="fname" placeholder="First Name" className="philosophy-input" />
                                        <label for="fname" className="philosophy-input-label">First Name</label>
                                    </div>
                                    <div className="col ">
                                    <input type="text" name="fname" placeholder="Last Name" className="philosophy-input" />
                                        <label for="fname" className="philosophy-input-label">Last Name</label>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col mx-2">
                                        <input type="text" name="fname" placeholder="Email" className="philosophy-input" />
                                        <label for="fname" className="philosophy-input-label">Email</label>
                                    </div>
                                    <div className="col">
                                    <input type="text" name="fname" placeholder="Mobile" className="philosophy-input" />
                                        <label for="fname" className="philosophy-input-label">Mobile</label>
                                    </div>
                                </div>
                                <div className="col my-3 mx-2">
                                <input type="text" name="fname" placeholder="Website URL" className="philosophy-input" />
                                        <label for="fname" className="philosophy-input-label">Website URL</label>
                                </div>
                                <div className="col my-3 mx-2">
                                    <textarea className="form-control" placeholder="Your Message" aria-label="Your Message" id="textBox" rows="5"></textarea>
                                </div>

                                <button type="button" className="btn footer-button">
                                    <div className="footer-button-text">

                                        Send Request
                                    </div>
                                </button>
                                <button type="button" class="btn btn-light reset-btn">Reset</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ConForm