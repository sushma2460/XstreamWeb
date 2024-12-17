import React from "react";
import { Navbar } from "./Navbar/Navbar";
import PrivacyPolicy from "./Privacy/Privacy";
import { Footer } from "../Home/Footer/Footer";


function Policy() {
    return (
        <div>    
            <Navbar></Navbar>
            <PrivacyPolicy></PrivacyPolicy>
            <Footer></Footer>
        </div>
    );
}

export default Policy;