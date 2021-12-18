import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./DropDown.css"
import purpc from "../img/purpc.png"
import bluec from "../img/bluec.png"
import yc from "../img/yc.png"

const DropDown = ({initial, list, className, loading}) => {
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
                initial !== "Recent Post" && !loading?
                <ul className={`dropdown-menu${initial=="Recent Post"? " recentPostContainer" : ""}`} aria-labelledby="dropdownMenuButton2">
                    {
                        list.map((item, index) => <li key={index} onClick={() => setSelect(item)}><a className="dropdown-item" href="#">{item}</a></li>)
                    }
                </ul>
                :
                <ul className={`dropdown-menu${initial=="Recent Post"? " recentPostContainer" : ""}`} aria-labelledby="dropdownMenuButton2">
                    {
                        list.map((item, i) => (
                        <li key={i} >
                            {/* <img src={item.photo} alt="" /> */}
                            <img src={i%3==0? purpc : i%3==2? yc : bluec} alt="" />
                            <Link to={`/${item.slug}`} className="dropdown-item"><p>{item.title}</p></Link>
                        </li>))
                    }
                </ul>
            }
    </div>
    )
}

export default DropDown
