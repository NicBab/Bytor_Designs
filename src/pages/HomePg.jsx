import React from 'react'
import "./css/HomePg.css"
import { About, ImgModel, Contact } from "../components/index"

const Home = () => {
  return (
    <div>
        <About />
        <ImgModel />
        <Contact />
    </div>
  )
}

export default Home