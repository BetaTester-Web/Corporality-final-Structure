import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="position-relative vw-100" >
                <video autoPlay muted loop className="vw-100">
                    <source src="/media/BannerVideo.mp4" type="video/mp4" />
                </video>
                <div className="position-absolute position-relative bottom-0 start-0 carsl">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active data-bs-interval='500">
                                <div className="container carslBox bg-opacity-75 text-wrap">
                                    <p className="fw-bold carslHead text-uppercase">
                                        global sales and marketing company
                                    </p>
                                    <p className="carslText">
                                        Identifying every opportunity to convert your potentials into ready-to-buy states
                                    </p>
                                    <p className="carslText">
                                        Leading Management Consulting Firm Australia
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item data-bs-interval='500">
                                <div className="container carslBox bg-opacity-75 text-wrap">
                                    <p className="fw-bold carslHead text-uppercase">
                                        Reimagining your boundaries
                                    </p>
                                    <p className="carslText">
                                        Expanding your reach to provide more than just marketing solutions
                                        Superior Online Marketing Company Australia
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item data-bs-interval='500">
                                <div className="container carslBox bg-opacity-75 text-wrap">
                                    <p className="fw-bold carslHead text-uppercase">
                                        The future of businesses is right here
                                    </p>
                                    <p className="carslText">
                                        Implement the most effective digital marketing strategies for your business
                                        Premier marketing company Australia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute bottom-0 end-0 social">
                        <p className="my-0 socialText">Social</p>
                        <div className="row">
                            <div className="col socialBlocks">
                                <a href="/"><img src="/media/Group 618.png" alt="" className="img-fluid align-top" /></a>
                            </div>
                            <div className="col socialBlocks">
                                <a href="/"><img src="/media/Group 617.png" alt="" className="img-fluid align-top" /></a>
                            </div>
                            <div className="col socialBlocks">
                                <a href="/"><img src="/media/Group 616.png" alt="" className="img-fluid align-top" /></a>
                            </div>
                            <div className="col socialBlocks">
                                <a href="/"><img src="/media/Group 615.png" alt="" className="img-fluid align-top" /></a>
                            </div>
                            <div className="col socialBlocks">
                                <a href="/"><img src="/media/Group 614.png" alt="" className="img-fluid align-top" /></a>
                            </div>
                            <div className="col socialBlocks">
                                <a href="/"><img src="/media/Group 613.png" alt="" className="img-fluid align-top" /></a>
                            </div>
                        </div>
                    </div>
                    <img src="/media/Rectangle 66.png" alt="" className="carslD1 position-absolute bottom-0 end-0" />
                    <img src="/media/Rectangle 67.png" alt="" className="carslD2 position-absolute top-0 end-0" />
                </div>
                <div className="dBox position-absolute position-relative top-100 start-0 translate-middle">
                    <div>
                        <div className="phnBtn position-absolute">
                            <img src="/media/Group 709.png" alt="" className="img-fluid"/>
                        </div>
                        <p className="my-0 position-absolute start-0 top-50 translate-middle phnNum py-2">+61 2 83794089</p>
                    </div>
                    <img src="/media/Rectangle 65.png" alt="" className="bigD1 position-absolute" />
                    <img src="/media/Rectangle 64.png" alt="" className="bigD2 position-absolute start-50 top-50 translate-middle" />
                </div>
            </div>
        </>
    )
}
