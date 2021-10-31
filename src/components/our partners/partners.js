import React from 'react'
import './partners.css'
import pic1 from './images/google.png'
import pic2 from './images/amazon.png'
import pic3 from './images/tata.png'
import pic4 from './images/oracle.png'

const Partners = () => {
    return (
        <>
            <section className="fc" id="partsection">
                <div className="contai">
                    <h2 className="partnertitle">Our Partners</h2>
                    <div className="images">
                        <div className="im">
                            <img src={pic1}></img>
                        </div>
                        <div className="im">
                            <img src={pic2}></img>
                        </div>
                        <div className="im">
                            <img src={pic3}></img>
                        </div>
                        <div className="im">
                            <img src={pic4}></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Partners;