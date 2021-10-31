import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <div id='joinus'>
            <section class="section1">

                <div class="containers">
                    <div class="contactinfo">
                        <div>
                            <h2 class="head1">Contact Info</h2>
                            <ul class="info">
                                <li >
                                    <span >
                                        <div class="fas fa-map-marker-alt"></div>
                                    </span>
                                    <span >
                                    Kakrola, Near Dwarka Mor Metro Station<br></br>
                                    New delhi –110078. Paschim Vihar, New Delhi, Delhi 110063
                                    </span>
                                </li>
                                <li >
                                    <span>
                                        <div class="fas fa-envelope-open-text"></div>
                                    </span>
                                    <span >
                                    humane@gmail.com
                                    </span>
                                </li>
                                <li >
                                    <span >
                                        <div class="fas fa-phone-volume"></div>
                                    </span>
                                    <span >
                                    +91 9586439756
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <ul class="sci">
                            <li ><a href="" class="fab fa-twitter"></a></li>
                            <li ><a href="" class="fab fa-facebook"></a></li>
                            <li ><a href="" class="fab fa-linkedin"></a></li>
                            <li ><a href="" class="fab fa-pinterest"></a></li>
                            <li ><a href="" class="fab fa-instagram"></a></li>
                        </ul>
                    </div>
                    <div class="contactform">
                        <h2>Join Us</h2>
                        <div class="formbox">
                            <div class="inputbox w50">
                                <input type="text" required></input>
                                <span>First Name</span>
                            </div>
                            <div class="inputbox w50">
                                <input type="text" required></input>
                                <span>Last Name</span>
                            </div>
                            <div class="inputbox w50">
                                <input type="email" required></input>
                                <span>Email Address </span>
                            </div>
                            <div class="inputbox w50">
                                <input type="text" required></input>
                                <span>Mobile No.</span>
                            </div>
                            <div class="inputbox w100">
                                <textarea required></textarea>
                                <span>Write your message here...</span>
                            </div>
                            <div class="inputbox w100">
                                <input type="submit" value="Send" required></input>
                                {/* <!-- <span>First Name</span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;