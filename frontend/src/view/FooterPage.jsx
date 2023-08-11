import React from 'react'
import {FaDiscord, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";

export default function FooterPage() {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="footer-details">
                <div className="contact-logo">
                    <div className="contact-logos">
                        <ul>
                            <a href="#"><li className='facebook-footer'><FaFacebookF /></li></a>
                            <a href="#"><li className='twitter-footer'><FaTwitter /></li></a>
                            <a href="#"><li className='discord-footer'><FaDiscord /></li></a>
                            <a href="#"><li className='envelope-footer'><FaEnvelope /></li></a>
                            <a href="#"><li className='linkedin-footer'><FaLinkedinIn /></li></a>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer-contacts">
                    <div className="email-me">
                        <h3>Email me</h3>
                        <p>Contact me directly using email</p>
                        <div class="email-container">
                            <div class="input-group">
                                <p>Email Address*</p>
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div class="input-group">
                                <p>Message*</p>
                                <input type="text" placeholder="Enter your message" />
                            </div>
                        </div>
                            <div className="send-button">
                                <button class="submit-button">Send</button>
                            </div>
                    </div>
                    <div className="explore">
                        <h3>Explore</h3>
                        <ul>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Skills</li></a>
                            <a href="#"><li>Experience</li></a>
                            <a href="#"><li>Contacts</li></a>
                            <a href="#"><li>Recognitions</li></a>
                        </ul>
                    </div>
                    <div className="recognitions">
                        <h3>Recognitions</h3>
                        <ul>
                            <a href="#"><li>Coursera</li></a>
                            <a href="#"><li>Kodego</li></a>
                            <a href="#"><li>Simplilearn</li></a>
                            <a href="#"><li>Tesda</li></a>
                            <a href="#"><li>Codecademy</li></a>
                        </ul>
                    </div>
                    <div className="social">
                        <h3>Social</h3>
                        <ul>
                            <a href="#"><li>Facebook</li></a>
                            <a href="#"><li>Twitter</li></a>
                            <a href="#"><li>Discord</li></a>
                            <a href="#"><li>Instagram</li></a>
                            <a href="#"><li>LinkedIn</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
