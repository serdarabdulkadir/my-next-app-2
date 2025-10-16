import React from "react";

import Link from "next/link";

const Pricing = () => {
  return (
    <section className="relative  text-white rounded-3xl mx-auto my-20 py-24 px-6 flex flex-col items-center justify-center text-center " id="Pricing">
      {/* Dekoratif yıldız ikonları */}
      <div className="absolute z-0 bottom-0 items-center flex">
        <img src="Frame.svg" alt="" />
      </div>
      {/* Başlıklar */}
      <div className="z-10">
         <h2 className="text-4xl sm:text-5xl font-semibold mb-4 max-w-5xl">
            Promptverse has no limitation.  <br /> Get Started in a journey with promptverse.
      </h2>

      {/* Buton */}
      <button className="bg-white text-black text-lg mt-14 font-medium px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300">
        Create an Account
      </button>
      </div>
     
    </section>
  );
};

export default Pricing;
