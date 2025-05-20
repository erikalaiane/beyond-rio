import React from 'react'
import MainVid from "../assets/main.mp4";
import Hero from '../components/Hero/Hero';
import Locais from '../components/Locais/Locais';
import BannerImg from '../components/BannerImg/BannerImg';
import Poster from '../assets/travel-cover.png';
import Banner2 from "../assets/cover2.jpg";
import Blogs from "../pages/Blogs";
import Banner from "../components/Banner/Banner";

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
        <BannerImg img={Poster}/>
        <Blogs />
        <Banner />
        <BannerImg img={Banner2} className="object-cover object-bottom" />
      </div>
    </>
  )
};

export default Home;