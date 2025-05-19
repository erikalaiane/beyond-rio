import React from 'react'
import MainVid from "../assets/main.mp4";
import Hero from '../components/Hero/Hero';
import Locais from '../components/Locais/Locais';

function Home() {
  return (
    <>
      <div>
        <div className='relative h-[595px]'>
          <video 
           autoPlay 
           loop 
           muted
           className="absolute right-0 top-9 h-[560px] w-full object-cover z-[-1]">

            <source src={MainVid} type="video/mp4"/>
          </video>
          <Hero />
        </div>
        <Locais />
      </div>
    </>
  )
};

export default Home;