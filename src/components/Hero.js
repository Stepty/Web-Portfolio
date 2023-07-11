import React from 'react'
import portrait from '../images/IMG_1306.JPG'

function Hero() {
  return (
    <section className="p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex">
            <div>
                <p>
                    Hi, I am 
                    <h2 className="text-3xl">Stephen Ni.</h2>
                    <h3 className="text-2xl">Student Studying Computer Engineering at the Univeristy of Arkansas.</h3>
                    Passionate about full stack web development
                </p>
                <p>**Carousel of something** OR Resume</p>
            </div>
            <img src={portrait} alt="Stephen Ni" className="max-h-96 mx-auto" />
        </div>
    </section>
  )
}

export default Hero