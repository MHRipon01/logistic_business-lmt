import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import './Banner.css'
const sliderData = [
  {
    image: "https://i.ibb.co/z2y5kMm/pexels-valeria-boltneva-1833349.jpg",
    text: "Providing Efficient Logistics Solutions",
  },
  {
    image: "https://i.ibb.co/QCPD5vN/image.png",
    text: "Global Shipping and Transportation Services",
  },
  {
    image: "https://i.ibb.co/qsvJvTF/image.png",
    text: "Innovative Supply Chain Management",
  },
  {
    image: "https://i.ibb.co/z2y5kMm/pexels-valeria-boltneva-1833349.jpg",
    text: "Warehousing and Distribution Excellence",
  },
  {
    image: "https://i.ibb.co/p2Bs1h8/image.png",
    text: "Your Trusted Partner in Logistics Solutions",
  },
];

const Banner = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Apply animation class after a short delay to allow the component to render
    const timeoutId = setTimeout(() => {
      setAnimationClass("animate-grow-text");
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);



  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {sliderData?.map((singleData, index) => (
          <div key={index} className={`h-full relative`}>
            <div className="bg-cover h-[700px] bg-center relative">
              <img src={singleData.image} alt="" />
              <h2   id="animated-text"
          className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center lg:mx-auto w-full h-full flex justify-center items-center`}
          style={{
            fontSize: animationClass ? "40px" : "10px",
            transition: "font-size 5s",
          }}>
                {singleData.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
