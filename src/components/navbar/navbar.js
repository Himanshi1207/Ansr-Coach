import { useState } from 'react'
import React from "react"
import { Link } from 'react-scroll'
import Modal from "../popup/modal";
import './style.css'
const Navbar = () => {

    const [openmodal, setopenmodal] = useState(false)
    return (
        <>
            <nav>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="top">
                    <Link to='main'>

                        <div className="logotext">
                            𝐇𝐔𝐌𝐀𝐍𝐄
                        </div>
                    </Link>
                    <div className="nav-link">
                        <ul className="nav-links">
                            <li><Link to='main' smooth={true} duration={1500} className="links">Home</Link></li>
                            <li><Link to='aboutus' smooth={true} duration={1000} className="links">About Us</Link></li>
                            <li><Link to='reach' smooth={true} duration={1000} className="links">Our Reach</Link></li>
                            <li><Link to='stories' smooth={true} duration={1000} className="links">Our Stories</Link></li>
                            <li><Link to='joinus' smooth={true} duration={1000} className="links">Join Us</Link></li>
                            <li className="button"
                                onClick={() => { setopenmodal(true) }}><a href="#">
                                    Donate Now</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {openmodal && <Modal />}
        </>
    );
}
export default Navbar;