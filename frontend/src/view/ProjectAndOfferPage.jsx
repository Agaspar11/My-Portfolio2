import React from 'react'
import UXUI from '../img/UXUI.webp'
import frontend from '../img/frontend.webp'
import proj from '../img/proj.webp'
import {BsArrowRight} from 'react-icons/bs'

export default function ProjectAndOfferPage() {
  return (
    <section className='offer-page'>
        <div className='offer'>
            <div className="offer-details">
                <h2>What can I offer for you?</h2>
                <p>A good quality & trend designs 
                for UX & UI and a code for Front-end</p>
            </div>
            <div class="grid-container">
                <div class="grid-item">
                    <h1>20+</h1>
                    <p>Project Completed</p>
                </div>
                <div class="grid-item">
                    <h1>9 months</h1>
                    <p>Frontend experience</p>
                </div>
                <div class="grid-item">
                    <h1>9 months</h1>
                    <p>UX/UI experience</p>
                </div>
                <div class="grid-item">
                    <h1>5 technology</h1>
                    <p>Stacks</p>
                </div>
            </div>
        </div>
        <div className="experience">
            <div class="experience-list">
                <div class="exp-item">
                <a href="#"><img src={UXUI} alt="Image 1" className='scale-up' /></a>
                    <div className="exp-details">
                    <a href="#"><h3>UX & UI Design <BsArrowRight /></h3></a>
                        <p>5 Projects</p>
                    </div>
                </div>
                <div class="exp-item">
                    <a href="#"><img src={frontend} alt="Image 2" className='scale-up' /></a>
                    <div className="exp-details">
                    <a href="#"><h3>Frontend Development <BsArrowRight /></h3></a>
                        <p>20 Projects</p>
                    </div>
                </div>
                <div class="exp-item">
                    <a href="#"><img src={proj} alt="Image 3" className='scale-up' /></a>
                    <div className="exp-details">
                    <a href="#"><h3>Project Management <BsArrowRight /></h3></a>
                        <p>5 Projects</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
