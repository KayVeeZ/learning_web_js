import React from "react";
import Footer from "./footer";

const NavBar = (props) => {
    return (
        <div>
            <div className="logo">{props.logoText}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <Footer/>
            </ul>
        </div>

    )
};

export default NavBar;