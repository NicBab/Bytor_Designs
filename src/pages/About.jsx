import React from 'react'
import Background from '../components/background/Background'
import newVectorCharacter from '../Images/new_vector_character.png'
import './css/About.css'

const About = () => {
    return (
        <div className="aboutPg">
          
            <figcaption>
              <img
                className="aboutImg"
                style={{ maxWidth: "8em", height: "8em" }}
                src={newVectorCharacter}
                alt=""
              />
                <p>Bytor Design was created by Dylan Nicholson. 
                Dylan is from South Louisiana, where he’s spent years growing and cultivating his artistic style in multiple mediums.
                He creates visionary and psychedelic art using photo manipulation inspired by natural symmetry, culture, and music.
                He is also passionate about vector art, logo and marketing material design, and video editing. 
                When he’s not designing original pieces or bringing someone’s brand vision to life, you can find Dylan in the kitchen, 
                crafting his own recipes as a professionally-trained chef.</p>
            </figcaption>
        </div>
    )
}

export default About
