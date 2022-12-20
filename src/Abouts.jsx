import React from "react";
import Common from "./Common";
import image from '../src/image/hero1.jpeg';


const Abouts =()=>{
    return(
        <>
           <Common 
           name="Welcome to About Page" 
           imgsrc={image} 
           visit='/contact' 
           btnname="Contact Now"/>
        </>
    )

}

export default Abouts;