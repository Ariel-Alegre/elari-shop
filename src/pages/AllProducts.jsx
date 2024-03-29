import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Product/Products";
import Icons from "../components/icons/Icons";
import Footer from "../components/footer/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AllProducts() {
    return (
        <div>
            <Navbar />
            <div>
                <Products />
            </div>
           
                <Icons />
        </div>
    );
}
