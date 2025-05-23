import React from 'react';
import MainVid from "../assets/mainv.mp4";
import Hero from '../components/Hero/Hero';
import Locais from '../components/Locais/Locais';
import BannerImg from '../components/BannerImg/BannerImg';
import Poster from '../assets/travel-cover.png';
import Banner2 from "../assets/cover2.jpg";
import Blogs from "../pages/Blogs";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Popup from '../components/Popup/Popup.jsx';

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
        <div className='relative'>
  <video 
    autoPlay 
    loop 
    muted
    className="absolute inset-0 w-full h-full object-cover z-[-1]"
  >
    <source src={MainVid} type="video/mp4"/>
  </video>
  <Hero />
</div>

        <Locais handleOrderPopup={handleOrderPopup} />
        <BannerImg img={Poster}/>
        <Blogs />
        <Banner />
        <BannerImg img={Banner2} className="object-cover object-bottom" />
        <Testimonial /> 
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      </div>
    </>
  );
};

export default Home;