import Title from "../../../../Shared/Title";
import "./SelfService.css";

const SelfServices = [
  {
    name: "Track & Trace",
    image: "https://i.ibb.co/yVRtcNz/image.png",
    details: "Real-time shipment tracking for better visibility.",
  },
  {
    name: "Get a Quote or Contact Us",
    image: "https://i.ibb.co/5kP4kM5/image.png",
    details: "Request a quote or get in touch with our team.",
  },
  {
    name: "Purchase Order Management",
    image: "https://i.ibb.co/Vg1bm0g/image.png",
    details: "Efficient management of purchase orders and transactions.",
  },
  {
    name: "Online Booking",
    image: "https://i.ibb.co/87mpG3x/image.png",
    details: "Easy and convenient online booking services.",
  },
  {
    name: "Warehouse Management",
    image: "https://i.ibb.co/ChXwWMG/image.png",
    details: "Optimize warehouse operations for maximum efficiency.",
  },
  {
    name: "LCL Sailing Schedule",
    image: "https://i.ibb.co/6mRgP6L/image.png",
    details: "View and plan Less than Container Load (LCL) sailing schedules.",
  },
  {
    name: "Global Customers",
    image: "https://i.ibb.co/SNq8N8H/image.png",
    details: "Serve and connect with our diverse global customer base.",
  },
  {
    name: "Other Services",
    image: "https://i.ibb.co/RTcNdzz/image.png",
    details: "Explore additional services tailored to your needs.",
  },
];

const SelfService = () => {
  return (
    <div>
      <Title title={"Self Services"} />
      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-12">
        {SelfServices?.map((service, index) => (
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            key={index}
            className="service-container"
          >
            <div className="hover-container">
              <img
                className="w-[355px] h-[200px]"
                src={service?.image}
                alt=""
              />
              <h1 className="font-bold text-lg text-center">{service?.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfService;
