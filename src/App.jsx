import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Abouts from "./Abouts";
import Service from "./Service";
import Contacts from "./Contacts";
import {Redirect, Route,Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Footers from "./Footers";



 
const Website=()=>{
return(
    <>
    <Footers/>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/abouts" component={Abouts}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contacts}/>
    <Redirect to="/"/>
    </Switch>

    </>
)
}
export default Website;