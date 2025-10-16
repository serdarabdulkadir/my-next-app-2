import React from "react";

const TeamSection = () => {
  const features = [
    {
      title: "Write mails and replies",
      desc: "We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your area will change in a few years.",
    },
    {
      title: "Read pdf and attachments",
      desc: "We do not want to sell you any specific object, our goal is to find the “right” apartment for you and remain partners for many years.",
    },
    {
      title: "Scans Images",
      desc: "We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork.",
    },
    {
      title: "Write codes & programs",
      desc: "The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal.",
    },
    {
      title: "Research",
      desc: "We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options.",
    },
    {
      title: "Automation",
      desc: "Whether it’s the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20 w-full" id="Team">
      <div className="max-w-6xl mx-auto">
        {/* Başlık */}
        <h2 className="text-gray-400 text-5xl font-light">
          More features
        </h2>
        <h3 className="text-5xl font-semibold text-white mt-2 mb-10">
          Promptverse AI <span className="text-gray-400 font-light">offers to an individual</span>
        </h3>

        <div className="border-b border-gray-700 mb-12"></div>

        {/* Özellikler Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
