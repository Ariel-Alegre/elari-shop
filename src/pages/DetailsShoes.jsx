import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Icons from "../components/icons/Icons";
import Footer from "../components/footer/Footer.jsx";
import Details from "../components/Details/Details";

export default function AllProducts() {
    return (
        <div>
            <Navbar />
            <div>
             <Details/>
            </div>
       
                <Icons />
        </div>
    );
}
