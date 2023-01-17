import React from "react"
import img2 from "../images/Star1.png"

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src = {props.img} className = "card--image"/>
            <div className="card--stats">
                <img src= {img2} className = "card--star"/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <div className="card--details">
                <p>{props.title}</p>
                <p><b>From ${props.price}</b> / person</p>
            </div>
        </div>
    )
} 