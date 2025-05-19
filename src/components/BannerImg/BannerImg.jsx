import React from 'react'

const BannerImg = ({img}) => {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "400px",
    };
  return (
    <div data-aos="zoom-in" className="h-[500px] w-full" style={bgImage}></div>
  );
};

export default BannerImg;

