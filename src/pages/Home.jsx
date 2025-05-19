import React from 'react'
import MainVid from "../assets/main.mp4";
import Hero from '../components/Hero/Hero';

function Home() {
  return (
    <>
      <div>
        <div className='relative h-[595px]'>
          <video 
           autoPlay loop muted
           className="absolute right-0 top-9 h-[560px] w-full object-cover z-[-1]">

            <source src={MainVid} type="video/mp4"/>
          </video>
             
          <Hero />
        </div>
      </div>
    </>
  )
};

export default Home;