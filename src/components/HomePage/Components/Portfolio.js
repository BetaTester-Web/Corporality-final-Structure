import React from 'react'

export default function Portfolio() {
    return (
        <>
            <div style={{ backgroundColor: "#F2F2F2" }}>
                <div className="container my-2 py-2">
                    <div className="align-items-center position-relative">
                        <p className="text-uppercase text-center fs-4 fw-bold py-3">
                            Portfolio
                        </p>
                        <img src="/media/Line 5.png" alt="" className="position-absolute start-50 bottom-0 translate-middle-x"/>
                    </div>
                </div>
                <div className="d-flex container py-2 px-1 justify-content-evenly flex-wrap">
                    <div className="my-3">
                        <img src="/media/Divine Intercess 1.png" alt="" width='100%' />
                        <p className="text-center pimgText">DIVINE INTERECESSION</p>
                    </div>
                    <div className="my-3">
                        <img src="/media/Home Constructio 1.png" alt="" width='100%' />
                        <p className="text-center pimgText">BUILD Q</p>
                    </div>
                    <div className="my-3">
                        <img src="/media/LIQMET Liquid Me 1.png" alt="" width='100%' />
                        <p className="text-center pimgText">LIQMET</p>
                    </div>
                </div>
            </div>
        </>
    )
}
