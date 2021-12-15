import React, { useState } from 'react'
import "./DropDown.css"

const DropDown = ({initial, list, className}) => {
    if(!list){
        list = []
    }
    const [select, setSelect] = useState(initial || '')
    return (
        <div className={`dropdown customDropDown ${className || ''}`}>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                {select}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                {
                    list.map((item, index) => <li key={index} onClick={() => setSelect(item)}><a className="dropdown-item" href="#">{item}</a></li>)
                }
            </ul>
    </div>
    )
}

export default DropDown
