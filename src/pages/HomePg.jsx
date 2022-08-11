import React from 'react'
import "./css/HomePg.css"
import { About, Slider, Contact } from "../components/index"

const Home = () => {
  return (
    <div>
        <About />
        <Slider />
        <Contact />
    </div>
  )
}

export default Home