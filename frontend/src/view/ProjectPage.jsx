import mylogo from '../img/mylogo.png'
import React from 'react';
import FooterPage from './FooterPage';
import afterclass from '../img/afterclass.png'
import crypto from '../img/crypto.png'
import groomer from '../img/groomer.png'
import dictionary from '../img/dictionary.png'
import { FaAngular, FaCss3Alt, FaHtml5, FaLaravel } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb'

export default function ProjectPage() {
  return (
    <div className='background'>
        <div className="background2">
            <div className='front-page1'>
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
                <div class="container">
                    <div class="proj1">
                        <a href="https://after-class-coffee-shop.vercel.app/">
                        <img src={afterclass} alt="" />
                        </a>
                        <div class="proj-details">
                            <h3>AfterClass</h3>
                            <p>
                                This is a Coffee shop, that the user can reserve a seat by just
                                filling the form with information.
                            </p>
                            <p>Technology used: <FaHtml5 /><FaCss3Alt /></p>
                        </div>
                    </div>

                    <div class="proj2">
                        <a href="#">
                            <img src={crypto} alt="" />
                        </a>
                        <h3>CryptoRate</h3>
                        <p>
                            Crypto Currency website where the 
                            user can search different crypto currency rates 
                        </p>
                        <p>Technology used: <FaHtml5 /><FaCss3Alt /><TbBrandJavascript /></p>
                    </div>

                    <div class="proj3">
                        <a href="https://es-dictionary.com/hero2">
                            <img src={dictionary} alt="" />
                        </a>
                        <h3>ES-Dictionary</h3>
                        <p>
                            Dictionary website where the user search a word it will
                            also give the image of the word that the user search
                        </p>
                        <p>Technology used: <FaHtml5 /><FaCss3Alt /><TbBrandJavascript /><FaLaravel /></p>
                    </div>

                    <div class="proj4">
                        <a href="https://angular-sigma-red.vercel.app/category">
                            <img src={groomer} alt="" />
                        </a>
                        <h3>Petzania Animal Clinic</h3>
                        <p>
                            A animal clinic for check-up, bath & grooming and pet hotel lodging 
                        </p>
                        <p>Technology used: <FaHtml5 /><FaCss3Alt /><TbBrandJavascript /><FaAngular /></p>
                    </div>
                    <div class="proj5"></div>
                    <div class="proj6"></div>
                    <div class="proj7"></div>
                    <div class="proj8"></div>
                    <div class="proj9"></div>
                    <div class="proj10"></div>
                    <div class="proj11"></div>
                    <div class="proj12"></div>
                </div>
            </div>
        </div>
            <FooterPage />
    </div>
  )
}
