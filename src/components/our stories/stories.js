import React from 'react'
import './stories.css'
const Stories = () => {
    return (
        <div id='stories'>
            <section className="programs" id="programsection">
                <div className="cont">
                    <h2 className="sectiontitle">our stories</h2>
                    <div className="boxcontainer">
                        <div className="box">
                            <div className="cardimage"></div>
                            <div className="programtitle">Education to every child</div>
                            <div className="donationcount">
                                Donation achieved: <span>$986897</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="cardimage"></div>
                            <div className="programtitle">Make life easier for them</div>
                            <div className="donationcount">
                                Donation achieved: <span>$958947</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="cardimage"></div>
                            <div className="programtitle">Helping every kid</div>
                            <div className="donationcount">
                                Donation achieved: <span>$856974</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="cardimage"></div>
                            <div className="programtitle">Clean water for everyone</div>
                            <div className="donationcount">
                                Donation goal: <span>$954683</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Stories;