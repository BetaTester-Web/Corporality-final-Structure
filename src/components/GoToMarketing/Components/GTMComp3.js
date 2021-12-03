import React from 'react';
import "./GTMComp3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import AllCardsNew from "./AllCardsNew/AllCardsNew";

function GTMComp3(){
    return(
        <>
            <div className="container text-center mx-auto d-flex flex-column align-items-center justify-content-center">
                <div className="heading">
                    DELIVERING UNIQUE VALUE PROPOSITIONS
                </div>
                <div className="mb-5 mt-2 text">
                    The founding structure of the GTM strategy is to plan, refine, iterate and plan again till you are convinced and confident about stepping forward. The key to a profitable product launch is crafting an actionable and practical go-to-marketing plan while dodging and eliminating disastrous hiccups and glitches.
                </div>
                <AllCardsNew />
            </div>
        </>
    );
}

export default GTMComp3;