import Title from "../../../Shared/Title";

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
      "Logistic Business Solution Ltd global air freight capability delivers cargo to all cities, countries, and continents. Global partnerships with major air carriers give us the flexibility .",
    image: "https://i.ibb.co/2s29CW4/image.png",
  },
  {
    type: "STREET FREIGHT",
    description:
      "The one constant for any shipment is that there is always a land transport element to it. At some point, your shipment is in a truck. ",
    image: "https://i.ibb.co/tBr0cvf/image.png",
  },
  {
    type: "RAIL FREIGHT",
    description:
      "Logistic Business Solution Ltd provides efficient rail freight solutions, connecting various regions through reliable rail transportation. ",
    image: "https://i.ibb.co/b6Dq8sH/image.png",
  },
  {
    type: "WAREHOUSE SOLUTIONS",
    description:
      "With state-of-the-art warehouse facilities, Logistic Business Solution Ltd offers comprehensive storage and distribution solutions. .",
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
      <Title title={"Freights we offer"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
        {freightData.map((freight, index) => (
          <div
          data-aos="flip-left"
            key={index}
            className="p-4 border rounded-md hover:shadow-xl hover:shadow-blue-300"
          >
            <img
              src={freight.image}
              alt={freight?.type}
              className="mb-4 w-full h-[337px] rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">{freight?.type}</h3>
            <p className="text-gray-600">{freight?.description}</p>

            <div className=" flex justify-center p-4 mx-auto text-white rounded-lg mt-4">
              <button className="rounded-lg before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
                <span className="relative z-10">Read More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freights;
