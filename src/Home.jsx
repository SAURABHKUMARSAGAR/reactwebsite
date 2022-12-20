import React from "react";
import Common from "./Common";
import image from '../src/image/hero.jpeg';



const Home =()=>{
    return(
        <>
            <Common
           name="Grow your bussiness with" 
           imgsrc={image} 
           visit='/service' 
           btnname="Get Started"
            />
        </>
           
    )
}

export default Home;
