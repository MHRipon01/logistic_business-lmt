import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import "./Banner.css";
const sliderData = [
  {
    image: "https://i.ibb.co/QJTXGKB/image.png",
    text: "Providing Efficient Logistics Solutions",
    textColor: "white", // Set the desired text color for this item
  },
  {
    image: "https://i.ibb.co/brJV7q9/image.png",
    text: "Global Shipping and Transportation Services",
    textColor: "black", // Set the desired text color for this item
  },
  {
    image: "https://i.ibb.co/qmW8m3N/image.png",
    text: "Innovative Supply Chain Management",
    textColor: "black", // Set the desired text color for this item
  },
  {
    image: "https://i.ibb.co/KsCG9Xn/image.png",
    text: "Warehousing and Distribution Excellence",
    textColor: "black", // Set the desired text color for this item
  },
  {
    image: "https://i.ibb.co/P465WVD/image.png",
    text: "Your Trusted Partner in Logistics Solutions",
    textColor: "white", // Set the desired text color for this item
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
            <div
              className={`bg-cover bg-center relative text-${singleData.textColor}`}
            >
              <img
                className="lg:min-h-[900px] md:min-h-[514px] min-h-64"
                src={singleData.image}
                alt=""
              />
              <h2
                id="animated-text"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:mx-auto w-full h-full flex justify-center items-center`}
                style={{
                  fontSize: animationClass ? "40px" : "10px",
                  transition: "font-size 5s",
                }}
              >
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
