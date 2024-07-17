import React from "react";
import mypic from "../images/1652515247755 (1).jpg"

export default function Info(){
    return( 
    <div>
        <img className="info--img" src={mypic} alt="My-image"></img>
        <h1 className="info--name">Ansak Mahir</h1>
        <p className="info--title">Backend Developer</p>
        <p className="info--website">ansak.me</p>
        <div className="buttons">
            <div className="action_btn">
            <button  className="btn_email"  ><i className="fa fa-envelope"></i>Email</button>
            <button  className="btn_linkedin" ><i className="fab fa-linkedin linkedin-icon"></i>LinkedIn</button>
            </div>
        </div>
    </div>
    )
   
}