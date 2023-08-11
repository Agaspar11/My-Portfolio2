import React from 'react'
import me from '../img/me.png'
import mylogo from '../img/mylogo.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import discord from '../img/discord.png'
import gmail from '../img/gmail.png'
import linkedin from '../img/linkedin.png'
import ProjectAndOfferPage from './ProjectAndOfferPage'
import FooterPage from './FooterPage'

export default function LandingPage() {
  return (
    <div className='background'>
        <div className="background2">
            <div className='front-page'>
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
                <div className='my-picture-details'>
                    <div className="my-picture">
                        <div className="circle-background"></div>
                        <img src={me} alt="web developer" />
                        <div className='my-details'>
                            <p className='im'>I'm</p>
                            <h1>Agaspar Latayada</h1>
                            <p className='supp-details'>Agaspar Latayada is a talented front-end
                            developer and web designer who specializes
                            in creating visually appealing and interactive 
                            web experiences
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-list">
                        <a href="#"><li><img className='facebook' src={facebook} alt="agaspar facebook" /></li></a>
                        <a href="#"><li><img className='twitter' src={twitter} alt="agaspar twitter" /></li></a>
                        <a href="#"><li><img className='discord' src={discord} alt="agaspar discord" /></li></a>
                        <a href="#"><li><img className='gmail' src={gmail} alt="agaspar gmail" /></li></a>
                        <a href="#"><li><img className='linkedin' src={linkedin} alt="agaspar linkedin" /></li></a>
                    </div>
                </div>
            </div>
                <ProjectAndOfferPage />
        </div>
                <FooterPage />
    </div>
  )
}
