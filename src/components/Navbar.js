import React from "react";
import logo from '../images/logo.svg'
export default function Navbar(){
    return(
        <nav >
            
             <img className='nav--icon' src={logo}  alt='logo'/>
             <h3 className="nav--logo_text">ReactFacts</h3>
             <h4 className="nav--title">ReactCourse - project 1</h4>

        </nav>
        
    )

}