import React from 'react'

export default function Philosophy() {
    return (
        <>
            <div className="container my-3 text-center px-0">
                <div className="py-2 my-2">
                    <div className="align-items-center">
                        <p className="text-uppercase align-middle fs-4 fw-bold my-2">
                            Philosophy
                        </p>
                        <img src="/media/Line 5.png" alt="" />
                    </div>
                    <div className="text-center fs-5 philText">
                        To use agility to its optimum to bring satisfaction, experience and brilliance in outcomes for our clients.
                    </div>
                </div>
                <div className="container">
                    <div className="d-sm-flex flex-wrap">
                        <div className="col">
                            <img src="/media/amico.png" alt="" width="100%" />
                        </div>
                        <div className="col">
                            <div className="p-4 m-4 philForm align-items-left">
                                <p className="text-uppercase fw-bold my-4 fs-4">
                                    Request for a callback
                                </p>
                                <div className="form-floating m-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">First Name</label>
                                </div>
                                <div className="form-floating m-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Last Name</label>
                                </div>
                                <div className="form-floating m-3">
                                    <input type="email" className="form-control" id="floatingPassword" placeholder="Email" />
                                    <label for="floatingPassword">Email</label>
                                </div>
                                <div className="form-floating m-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Mobile</label>
                                </div>
                                <button type="button" class="btn formbtn btn-sm text-uppercase">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
