import React from "react";
import Experience from "./Experience/Experience";
import { Potential } from "./Potential/Potential";
import WorldMap from "./Map/Map"; import { Footer } from "../Home/Footer/Footer";
import { CoreBeliefs } from "./Belief/Belief";
import {BussinessSection} from "./Bussiness/BussinessSection"
import { XstreamMinds } from "./Inovation/Innovation";
import { Navbar } from "./Navbar/Navbar";


function AboutPage() {
    return (
        <div>    
            <Navbar></Navbar>
            <Potential></Potential>
            <BussinessSection></BussinessSection>
            <CoreBeliefs></CoreBeliefs>
            <XstreamMinds></XstreamMinds> 
            <Experience></Experience>
            <WorldMap></WorldMap>
            <Footer></Footer>
        </div>
    );
}

export default AboutPage;