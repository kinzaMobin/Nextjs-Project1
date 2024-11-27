
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/img-00.jpg)] bg-cover'
    style={{backgroundSize: "25%", backgroundPosition:"left 260px top 60px"}}
    >

     <Navbar />
     <div className='container grid lg:grid-cols-2 h-[100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[60px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p data-aos="zoom-in-up">I&apos;m</p> 
          <p data-aos="zoom-in-up">Kinza</p>
          <p data-aos="zoom-in-up">Khan</p>
        </div>
      </div>
      </div> 
    </div>
  )
}

export default Hero;
