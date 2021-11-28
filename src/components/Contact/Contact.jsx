import React from 'react'
import ConForm from './Components/ConForm'
import ContactMap from './Components/ContactMap'

const Contact = () => {
    return (
        <div className="d-flex flex-column">
            <ConForm/>
            <ContactMap/>
        </div>
    )
}

export default Contact
