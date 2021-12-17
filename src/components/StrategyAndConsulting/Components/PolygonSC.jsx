import React from "react"
import "./PolygonSC.css"
import PlainStrategy1 from "./images/PlainPolygon.png"
import PlainStrategy2 from "./images/PlainPolygon2.png"
import cardSgCustomer from './images/MainpolygonCustomerSc.png'

const PolygonSc = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="CardsInSc">
                        <div className="Card_1_sc_one">
                            <img src={cardSgCustomer} alt=" "  />
                            <div className="textBoxCustomers">
                                <div className="">
                                <div className="First_TExt_BOx_Sc_1">Customer-Centered Design</div>
                                </div>
                                <p className="First_TExt_BOx_Sc_1_2">We craft newer and better customer experiences that increase satisfaction and loyalty leading to business growth</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="CardsInSc">
                        <div className="Card_2_sc_one">
                            <img src={cardSgCustomer} alt=""  />
                            <div className="textBoxCustomers2">
                                <p className="First_TExt_BOx_Sc_2">AI-Powered Insights</p>
                                <p className="First_TExt_BOx_Sc_2_1">Corporality uses the power of AI, analytics and automation to gather thoughtful insights that fuel innovation and empowers organisations to make better marketing decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PolygonSc