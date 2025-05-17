import React from 'react'
import MainVid from "../assets/main.mp4";

function Home() {
  return (
    <>
      <div>
        <div className='relative h-[700px]'>
          <video 
           autoPlay loop muted
           className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]">

            <source src={MainVid} type="video/mp4"/>
          </video>
          <Home />
        </div>
      </div>
    </>
  )
};

export default Home;