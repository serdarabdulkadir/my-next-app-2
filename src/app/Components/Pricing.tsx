import React from "react";

import Link from "next/link";

const Pricing = () => {
  return (
    <section className="relative bg-[(/Frame.svg)] text-white rounded-3xl mx-auto my-20 py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden" id="Pricing">
      {/* Dekoratif yıldız ikonları */}
      <div className="absolute top-10 left-10 text-gray-700/20 text-5xl">✦</div>
      <div className="absolute top-10 right-10 text-gray-700/20 text-5xl">✦</div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-700/20 text-5xl">✦</div>

      {/* Başlıklar */}
      <h2 className="text-4xl sm:text-5xl font-semibold mb-4 max-w-5xl">
            Promptverse has no limitation.  <br /> Get Started in a journey with promptverse.
      </h2>

      {/* Buton */}
      <button className="bg-white text-black text-lg mt-14 font-medium px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300">
        Create an Account
      </button>
    </section>
  );
};

export default Pricing;
