import React from "react";

import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6" id="About">
      <section className="max-w-6xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Create more with <span className="text-white">Promptverse</span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. 
          Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. 
          All within a sleek, futuristic design. Create more, effortlessly.
        </p>

        <div className="flex flex-col gap-8 w-full">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full overflow-hidden rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition"
            >
              <div
                className={`flex whitespace-nowrap text-blue-400 text-base font-medium py-4 ${
                  i % 2 === 0
                    ? 'animate-marquee-left'
                    : 'animate-marquee-right'
                }`}
              >
                {[...Array(8)].map((_, j) => (
                  <span key={j} className="felx mx-8"><p className="text-white">Write a attractive hero title for the following website <img src="arrow.svg" alt="" /> </p>
                    https://zeltalabs.com/
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
