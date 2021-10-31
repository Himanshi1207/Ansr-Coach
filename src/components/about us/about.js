import React from 'react'
import './about.css'
const About = () => {
    return (
        <div id='aboutus'>
            <section className="fullcontainer" id="aboutsection">
                <div className="cont">
                    <h2 className="sectiontitle">About Us</h2>
                    <p className="content">Humane Foundation, an Indian social development organization, is directly benefitting over 10 lakh children and their families every year. We have more than 200 live welfare projects on education, healthcare, livelihood, and women’s empowerment in over 2,000 remote villages and urban slums across 25 states of India.
                        Education empowers an individual to earn their livelihood and also increases one's awareness on a range of issues. From healthcare, to appropriate social behavior, to understanding one's rights – Humane Foundation seeks to educate, empower and cultivate better citizens.</p>
                    <div className="cards">
                        <div className="donationbox">
                            <div className="title">Give Donation</div>
                            <p>We at Humane Foundation urges people to come forward and donate a bit from their earning for the betterment and well-being of the society </p>
                            <button>Donate Now</button>
                        </div>
                        <div className="volunteerbox">
                            <div className="title">Become a Volunteer</div>
                            <p>We at Humane Foundation persuade young minds to come forward with their ideas and help our foundation grow more and reach more people.</p>
                            <button>Become Now</button>
                        </div>
                        <div className="scholarshipbox">
                            <div className="title">Give Scholarship</div>
                            <p>We at Humane Foundation works on the principle everything for everyone. We want you to give scholarship so that we could help more people </p>
                            <button>Give Immediately</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default About;