import React from "react";
import "./Hero.css"
import pic1 from "../assets/pic1.png"
import TypedText from "./TypedText";

function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-introduction-wrapper">
                <h1 style={{textAlign:"center", paddingLeft:"2%", fontFamily:"sans-serif"}}>Who am I?</h1>
                <p className="hero-text-container"> 
                    <TypedText/>
                </p>
            </div>
            <img className = "hero-image-container" src={pic1}></img>
        </div>
    )
}

export default Hero
