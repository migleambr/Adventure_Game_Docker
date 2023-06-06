import './App.css'
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {

    return (

        <>
            <div className="footer-top-container">

                <div className="footer">
                    <div className="footer-top-1-logo">
                        <img className="company-logo" src="/logo.png" alt="company logo" height="70px" />
                    </div>

                    <div className='footer-content'>

                        <div className="footer-heading footer 2-legal">
                            <h2><u>Legal</u></h2>
                                <p><a href="#">Terms of Use</a></p>
                                <p><a href="#">Privacy Policy</a></p>
                                <p><a href="#">Legal Notices</a></p>
                                <p><a href="#">Event Rules</a></p>
                                <p><a href="#">Cookies Policy</a></p>
                        </div>

                        <div className="footer-heading footer 3-about">
                            <h2><u>Who we are</u></h2>
                                <p><a href="#">Front-end Developers</a></p>
                                <p><a href="#">Back-end Developers</a></p>
                                <p><a href="#">Careers</a></p>
                                <p><a href="#">Partners</a></p>
                        </div>

                        <div className="footer-heading footer-email-form">
                            <h2><u>Newsletter</u></h2>
                                <p>Be the first to know about new exciting features, special events and much more!</p>

                            <div>
                                <form className="footer-input-btn">
                                    <input
                                        type="email"
                                        placeholder="Enter email..."
                                        id="footer-email"
                                    />

                                    <div className="signup-btn">
                                        <input
                                            type="submit"
                                            value="SIGN UP"
                                            id="footer-email-btn"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="footer-social">
                        <hr />

                        <div className='footer-social-content'>
                            <h2>Find us on</h2>
                            <ul>
                                <a href="https://en-gb.facebook.com/TankiOnline.en/" target="blank" >
                                    <li>
                                        <FaFacebook className="social-icon1" size="36px" color="white" />
                                    </li>
                                </a>

                                <a href="https://www.instagram.com/tankionlineen/" target="blank" >
                                    <li>
                                        <FaInstagram className="social-icon2" size="36px" color="white" />
                                    </li>
                                </a>

                                <a href="https://twitter.com/tankionlineen" target="blank" >
                                    <li>
                                        <FaTwitter className="social-icon3" size="36px" color="white" />
                                    </li>
                                </a>

                                <a href="https://www.youtube.com/tankionlineint" target="blank" >
                                    <li>
                                        <FaYoutube className="social-icon4" size="36px" color="white" />
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy;{new Date().getFullYear()} | SO:CT. All rights reserved. SO:CT and the SO:CT logo are trademarks of SO:CT in the U.K. and/or other regions.</p>
                <p>All other trademarks are the property of their respective owners.</p>
            </div>
        </>
    )

}

export default Footer;