import CountUp from "react-countup";
import Title from "../../../Shared/Title";

const statisticsData = [
  { name: "Countries with Active Operations", value: 50 },
  { name: "Warehouses and Offices", value: 150 },
  { name: "Square Meters of Storage", value: 150000 },
  { name: "Supply Chain Experts", value: 180 },
];

const Statistics = () => {
  return (
    <div>
      <Title title={"Our Statistics"} />

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center ">
        {statisticsData.map((statistic, index) => (
          <div
            key={index}
            className="lg:w-1/4  border-l-4 border-blue-700  mx-4 mb-8 p-6 bg-blue-200 rounded-lg text-center"
          >
            <CountUp
              start={0}
              end={statistic.value}
              enableScrollSpy={true}
              useIndianSeparators={true}
              delay={0}
            >
              {({ countUpRef }) => (
                <div>
                  <span className="text-4xl font-bold" ref={countUpRef} />{" "}
                  <span className="text-4xl">+</span>
                </div>
              )}
            </CountUp>
            <p className="text-lg mt-2">{statistic.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
