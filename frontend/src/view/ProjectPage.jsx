import mylogo from '../img/mylogo.png'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FooterPage from './FooterPage';
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import afterclass from '../img/afterclass.png'

export default function ProjectPage() {
    const [activeTab, setActiveTab] = useState(1);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
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
                <div class="warpper">
                    <input class="radio" id="one" name="group" type="radio" checked />
                    <input class="radio" id="two" name="group" type="radio" />
                    <input class="radio" id="three" name="group" type="radio" />
                    <div class="tabs">
                    <label class="tab" id="one-tab" for="one">UX & UI</label>
                    <label class="tab" id="two-tab" for="two">Frontend</label>
                    <label class="tab" id="three-tab" for="three">Project Management</label>
                        </div>
                    <div class="panels">
                    <div class="panel" id="one-panel">
                    <Slider {...settings}>
                        <img src={afterclass} alt="" />
                            <div className="proj-cont">
                                <div className="proj-details">
                                    <h1>Afterclass</h1>
                                    <p>
                                    This is a Coffee shop, that the user can reserve 
                                    a seat by just filling the form with information. 
                                    </p>
                                    <p>Technology used: <FaHtml5 /><FaCss3Alt /></p>
                                </div>
                            </div>
                        <img src={afterclass} alt="" />
                        <h1>Afterclass</h1>
                    </Slider>
                    </div>
                    <div class="panel" id="two-panel">
                    <Slider {...settings}>
                    <img src={afterclass} alt="" />
                            <div className="proj-cont">
                                <div className="proj-details">
                                    <h1>Afterclass</h1>
                                    <p>
                                    This is a Coffee shop, that the user can reserve 
                                    a seat by just filling the form with information. 
                                    </p>
                                    <p>Technology used: <FaHtml5 /><FaCss3Alt /></p>
                                </div>
                            </div>
                    </Slider>
                    </div>
                    <div class="panel" id="three-panel">
                        <div class="panel-title">Note on Prerequisites</div>
                        <p>We recommend that you complete Learn HTML before learning CSS.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            <FooterPage />
    </div>
  )
}
