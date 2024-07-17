import React from "react";
import twitter from "../images/Twitter Icon.png"
import instagram from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"
import facebook from "../images/Facebook Icon.png"

export default function Footer(){
    return (
        <div className="Foot--icons">
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={instagram}></img>
            <img src={github}></img>
        </div>
    )
}