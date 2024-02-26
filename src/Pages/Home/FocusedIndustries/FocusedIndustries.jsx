import Title from "../../../Shared/Title";
const focusedData = [
  {
    name: "Animal Nutrition",
    image: "https://i.ibb.co/SBzBGBR/image.png",
  },
  {
    name: "Batteries",
    image: "https://i.ibb.co/1dbvswg/image.png",
  },
  {
    name: "Beauty & Personal Care",
    image: "https://i.ibb.co/M6cyTcj/image.png",
  },
  {
    name: "Energy Services",
    image: "https://i.ibb.co/N34NR14/image.png",
  },
  {
    name: "Food & Nutrition",
    image: "https://i.ibb.co/SJwg4Pq/image.png",
  },
  {
    name: "Lubricants",
    image: "https://i.ibb.co/zFYWzK9/image.png",
  },
  {
    name: "Water Treatment",
    image: "https://i.ibb.co/Y0wz2VX/image.png",
  },
  {
    name: "HI&I",
    image: "https://i.ibb.co/cwZLx1b/image.png",
  },
];

const FocusedIndustries = () => {
  return (
    <div>
      <Title title={"Our Focused Industries"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-11 ">
        {focusedData?.map((singleData, index) => (
          <div data-aos="zoom-in" key={index}>
            <div className="image-container relative overflow-hidden group rounded-lg">
              <img
                src={singleData?.image}
                alt="Your Image"
                className="zoom-image transition-transform transform-gpu hover:scale-105 group-hover:scale-150"
                id="zoomImage1"
              />
              <div className="details-overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-60 transition-opacity">
                <div className="details-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-center">
                  <h3 className="text-4xl font-bold text-white my-5">
                    {singleData?.name}
                  </h3>
                  <button className="text-white px-5 py-2 border-2">
                    VIEW PROJECTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusedIndustries;
