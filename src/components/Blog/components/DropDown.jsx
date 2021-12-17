import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./DropDown.css"

const DropDown = ({initial, list, className}) => {
    if(!list){
        list = []
    }
    const navigate = useNavigate();
    console.log(list)
    const [select, setSelect] = useState(initial || '')
    return (
        <div className={`dropdown customDropDown ${className || ''}`}>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                {select}
            </button>
            {
                initial !== "Recent Post"?
                <ul className={`dropdown-menu${initial=="Recent Post"? " recentPostContainer" : ""}`} aria-labelledby="dropdownMenuButton2">
                    {
                        list.map((item, index) => <li key={index} onClick={() => setSelect(item)}><a className="dropdown-item" href="#">{item}</a></li>)
                    }
                </ul>
                :
                <ul className={`dropdown-menu${initial=="Recent Post"? " recentPostContainer" : ""}`} aria-labelledby="dropdownMenuButton2">
                    {
                        list.map((item, index) => (
                        <li key={index} >
                            <img src={item.photo} alt="" />
                            <Link to={`/${item.slug}`} className="dropdown-item">{item.title}</Link>
                        </li>))
                    }
                </ul>
            }
    </div>
    )
}

export default DropDown
