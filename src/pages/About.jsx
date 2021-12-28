import React from 'react'
import { Container } from 'react-bootstrap'
import './css/About.css'

const About = () => {
    return (
        <div className="aboutPg">
            <Container className="aboutContainer">
              <figcaption>
                Bytor Design was created by Dylan Nicholson. 
                Dylan is from South Louisiana, where he’s spent years growing and cultivating his artistic style in multiple mediums.
                He creates visionary and psychedelic art using photo manipulation inspired by natural symmetry, culture, and music. <br /> 
                He is also passionate about vector art, logo and marketing material design, and video editing. 
                When he’s not designing original pieces or bringing someone’s brand vision to life, you can find Dylan in the kitchen, crafting his own recipes as a professionally-trained chef.
              </figcaption>
            </Container>
        </div>
    )
}

export default About
