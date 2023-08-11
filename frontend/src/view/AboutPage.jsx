import React from 'react'
import me from '../img/me.png'
import mylogo from '../img/mylogo.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import discord from '../img/discord.png'
import gmail from '../img/gmail.png'
import linkedin from '../img/linkedin.png'
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import {FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import {TbBrandJavascript, TbBrandReact} from 'react-icons/tb'
import ProjectAndOfferPage from './ProjectAndOfferPage'
import FooterPage from './FooterPage'

export default function AboutPage() {
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
            <section className="about">
              <div className="logodetails">
                <div className="about-logos">
                  <img src={html} alt="html" />
                  <img src={css} alt="css" />
                  <img src={js} alt="javascript" />
                  <img src={react} alt="reactjs" />
                </div>
                <div className="about-details">
                  <div className="about-comp">
                    <p>
                      Agaspar Adrian Latayada is a skilled and dedicated web designer
                      and frontend developer who is passionate about creating
                      captivating and intuitive digital experiences. With a strong
                      focus on user-centric design and cutting-edge frontend
                      technologies, Agaspar strives to deliver websites that not only
                      look visually stunning but also provide exceptional usability
                      and functionality.
                    </p>
                    <p>
                      With a solid foundation in web design principles and best
                      practices, Agaspar possesses a keen eye for aesthetics and an
                      understanding of the importance of creating a cohesive brand
                      identity. By blending creativity with technical expertise, he
                      crafts visually striking interfaces that reflect the unique
                      essence of each client's business or project.
                    </p>
                  </div>
                </div>
              </div>
          </section>
          <section className='skills'>
            <div className="skill-container">
              <div className="skill-list">
                <div className="skill-list1">
                  <h3>UX & UI Design</h3>
                  <ul>
                    <li>Sitemap Planning</li>
                    <li>Color</li>
                    <li>Typography</li>
                    <li>Sketch</li>
                    <li>Mock-up</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
                <div className="skill-list1">
                  <h3>Frontend Development</h3>
                  <ul>
                    <li><FaHtml5 />HTML</li>
                    <li><FaCss3Alt />CSS</li>
                    <li><TbBrandJavascript />Javascript</li>
                    <li><TbBrandReact />ReactJS</li>
                  </ul>
                </div>
                <div className="skill-list1">
                  <h3>Project Management</h3>
                  <ul>
                    <li>Kanban</li>
                    <li>Noting</li>
                    <li>Setting Target</li>
                    <li>Documenting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <ProjectAndOfferPage />
        </div>
          <FooterPage />
    </div>
  )
}
