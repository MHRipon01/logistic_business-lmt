// eslint-disable-next-line react/prop-types
const Title = ({ title }) => {
    return (
        <h1 className="text-5xl text-center my-16 group cursor-pointer font-medium relative group-hover:text-blue-700">
        {title}
        <span className="absolute -bottom-5 md:left-[190px] md:h-[4px]  lg:left-[320px] lg:h-[4px] xl:left-[530px] xl:h-[4px] sm:left-[610px] sm:h-[3px] left-[10px] h-[4px]  w-0 bg-blue-700 transition-all duration-700 group-hover:w-[390px]"></span>
      </h1>
    );
  };
  
  export default Title;
  