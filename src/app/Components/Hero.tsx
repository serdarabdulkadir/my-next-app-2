"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col text-center text-white px-6 mt-40 w-screen ">

      {/* İçerik */}
      <div className="absolute z-0 bottom-0 items-center flex">
        <img src="Vector-1.svg" alt="" />
      </div>
      <div className="absolute z-0 bottom-0 items-center flex">
        <img src="Vector-3.svg" alt="" />
      </div>
      <div className="relative z-10">
        <h3 className="text-sm mb-3 text-neutral-400">Promptverse AI</h3>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Find Inspiration. <br />
          Create, Generate, <br />
          Produce & Automate.
        </h1>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Welcome to PromptVerse. Effortlessly create content, explore endless prompts, and stay ahead with real-time trends. 
          Automate emails, social media, and more while our AI extracts knowledge from any document or URL. 
          Experience a stunning, futuristic design that boosts productivity.
        </p>

        <div className="flex justify-center items-center gap-4 mb-20">
          <Link
            href="#"
            className="flex items-center gap-2 px-6 py-3 border border-white rounded-full text-sm font-medium  transition"
          >
            Start Generating <img src="mdi_wand.svg" alt="" />
          </Link>
          <Link
            href="#"
            className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition"
          >
            Download
          </Link>
        </div>
      </div>
    </section>
  );
}
