import React from 'react'
import mylogo from '../img/mylogo.png'
import { FaDiscord, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function SocialPage() {
  return (
    <div className='background'>
        <div className="background2">
            <div className='front-page-social'>
                <div className="navbar">
                    <img src={mylogo} alt="web developer logo" />
                        <ul>
                            <a href="#"><li className='nav-list'>Home</li></a>
                            <a href="#"><li className='nav-list'>Portfolio</li></a>
                            <a href="#"><li className='nav-list'>Projects</li></a>
                            <a href="#"><li className='nav-list'>Visit</li></a>
                            <a href="#"><li className='nav-list'>Contacts</li></a>
                        </ul>
                </div>
                <div className="social-logos">
                    <div className="logo-list">
                        <ul>
                            <a href="#"><li className='facebook-footer-social'><FaFacebookF /></li></a>
                            <a href="#"><li className='twitter-footer-social'><FaTwitter /></li></a>
                            <a href="#"><li className='discord-footer-social'><FaDiscord /></li></a>
                            <a href="#"><li className='envelope-footer-social'><FaEnvelope /></li></a>
                            <a href="#"><li className='linkedin-footer-social'><FaLinkedinIn /></li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
