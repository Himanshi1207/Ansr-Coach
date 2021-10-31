import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our approach</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Affiliate program</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Help Us</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Payment options</a></li>
                                <li><a href="#">Donatre Now </a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>contact us</h4>
                            <ul>
                                <li><a href="#">humane@gmail.com</a></li>
                                <li><a href="#">+91 9586439756</a></li>
                                <li><a href="#">Kakrola, Near Dwarka Mor Metro Station, New delhi –110078. Paschim Vihar, New Delhi, Delhi 110063</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;