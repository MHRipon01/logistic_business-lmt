import { Link } from "react-router-dom";

const freightData = [
  {
    type: "OCEAN FREIGHT",
    description:
      "Logistic Business Solution Ltd has contracts in place with many of the world's major ocean carriers in the key trade to/from Asia, USA, Middle East, Europe, and Africa.",
    image: "https://i.ibb.co/LZRkQCG/image.png",
  },
  {
    type: "AIR FREIGHT",
    description:
      "Logistic Business Solution Ltd global air freight capability delivers cargo to all cities, countries, and continents. Global partnerships with major air carriers give us the flexibility and efficiency to meet your air freight needs.",
    image: "https://i.ibb.co/2s29CW4/image.png",
  },
  {
    type: "STREET FREIGHT",
    description:
      "The one constant for any shipment is that there is always a land transport element to it. At some point, your shipment is in a truck. Logistic Business Solution Ltd ensures reliable street freight services to seamlessly connect your goods from one point to another on land.",
    image: "https://i.ibb.co/tBr0cvf/image.png",
  },
  {
    type: "RAIL FREIGHT",
    description:
      "Logistic Business Solution Ltd provides efficient rail freight solutions, connecting various regions through reliable rail transportation. Our expertise ensures secure and timely delivery of your goods.",
    image: "https://i.ibb.co/b6Dq8sH/image.png",
  },
  {
    type: "WAREHOUSE SOLUTIONS",
    description:
      "With state-of-the-art warehouse facilities, Logistic Business Solution Ltd offers comprehensive storage and distribution solutions. Our warehouses are equipped to handle various types of goods, ensuring optimal inventory management.",
    image: "https://i.ibb.co/RNn8Y0M/image.png",
  },
  {
    type: "EXPRESS DELIVERY",
    description:
      "Logistic Business Solution Ltd provides fast and secure express delivery services, ensuring your packages reach their destination with speed and reliability.",
    image: "https://i.ibb.co/7JSRxW1/image.png",
  },
];

const Freights = () => {
  return (
    <div>
      <h3 className="text-5xl text-center my-16 group cursor-pointer font-medium relative group-hover:text-blue-700">
        Freights we offer
        <span className="absolute -bottom-5 md:left-[190px] md:h-[4px]  lg:left-[320px] lg:h-[4px] xl:left-[530px] xl:h-[4px] sm:left-[610px] sm:h-[3px] left-[10px] h-[4px]  w-0 bg-blue-700 transition-all duration-700 group-hover:w-[390px]"></span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
        {freightData.map((freight, index) => (
          <div
            key={index}
            className="p-4 border rounded-md hover:shadow-lg hover:shadow-red-300"
          >
            <Link>
              <img
                src={freight.image}
                alt={freight?.type}
                className="mb-4 w-full h-[337px] rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{freight?.type}</h3>
              <p className="text-gray-600">{freight?.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freights;
