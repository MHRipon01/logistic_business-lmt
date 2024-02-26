 
const textData = {
  header:
    "Logistic Business Solution Ltd is prepared to assist our customers in maximizing opportunities through reliable supply chain management.",
  paragraph:
    "From foodservice redistribution and freight brokerage to cutting-edge logistics technology, Logistic Business Solution Ltd emphasizes transparent long-term relationships. We are committed to making significant investments to continuously enhance our services and solutions. Our focus is on maintaining a high level of flexibility, offering customized services, and executing with greater agility while ensuring cost efficiencies. Similar to your belief, we understand that progress starts with people, and we find nothing more rewarding than fostering collaboration between our customers and our Team Members, who are dedicated to implementing innovative solutions.",
};
const LogisticText = () => {
  return (
    <section>
      <div className=" w-2/3 mx-auto my-16">
        <h3 className="lg:text-5xl md:text-4xl text-xl font-bold ">
          {textData.header}
        </h3>
        <p className="lg:text-xl md:text-lg my-7">{textData.paragraph}</p>
      </div>
    </section>
  );
};

export default LogisticText;
