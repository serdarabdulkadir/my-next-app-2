import Link from "next/link";

export default function DiscoverPage() {
  return (
    <section
      id="Discover"
      className="w-full bg-black text-white px-4 sm:px-6 lg:px-10 py-16 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto text-center flex flex-col gap-12">
        {/* Başlık */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Generate audio and music
        </h1>

        {/* Açıklama */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts.
          Stay updated with real-time trends, automate tasks, and extract insights from any document or URL.
          All within a sleek, futuristic design. Create more, effortlessly.
        </p>

        {/* İçerik kutusu */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Sol Kısım */}
          <div className="flex-1 text-left w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Enhance Your Projects with Ultra-Realistic AI Voices
            </h2>

            <div className="space-y-3">
              <p className="text-neutral-400 text-sm sm:text-base">
                Create engaging voice content with unique AI Voices perfect for your audience.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                Generate Conversational, Long-form or Short-form Voice Content With Consistent Quality and Performances.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                Secure and Private Voice Generations with Full Commercial and Copyrights.
              </p>
            </div>

            {/* Butonlar */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Train voice models",
                "Text-to-speech",
                "AI voice generation",
                "AI music production",
                "AI Composition",
              ].map((btn, i) => (
                <button
                  key={i}
                  className="border border-neutral-700 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm hover:bg-neutral-800 transition"
                >
                  {btn}
                </button>
              ))}

              <button className="bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-neutral-200 transition">
                Generate now
              </button>
            </div>
          </div>

          {/* Sağ Kısım (Video/Görsel) */}
          <div className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-none">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="Column5.svg"
                alt="AI Audio Generation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
