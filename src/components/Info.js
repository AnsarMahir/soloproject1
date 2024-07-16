import React from "react";
import mypic from "../images/1652515247755 (1).jpg"

export default function Info(){
    return( 
    <div>
        <img className="info--img" src={mypic} alt="My-image"></img>
        <h1 className="info--name">Ansak Mahir</h1>
        <p className="info--title">Backend Developer</p>
        <div className="buttons">
            <div className="action_btn">
            <button  className="btn_email"  onclick="myFunction()">Save</button>
            <button  className="btn_linkedin" onclick="myFunction2()">Cancel</button>
            </div>
        </div>

    </div>
    
    
    
    )
   
}