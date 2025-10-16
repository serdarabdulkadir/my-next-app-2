import Link from "next/link";

export default function ProductPage() {
    return (
    <section className="bg-black text-white flex flex-col items-center justify-center py-20 px-8" id="Product">
      {/* Header */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Images like never seen before
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts.
          Stay updated with real-time trends, automate tasks, and extract insights from any document or URL.
          All within a sleek, futuristic design. <br className="hidden md:block" />
          Create more, effortlessly.
        </p>
      </div>
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Left large image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:h-[700px]">
          <img src="Column.svg" alt="" />
        </div>

        {/* Right side grid (4 small images) */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="relative aspect-square">
            <img src="Column1.svg" alt="" />
          </div>
          <div className="relative aspect-square">
            <img src="Column2.svg" alt="" />
          </div>
          <div className="relative aspect-square">
            <img src="Column3.svg" alt="" />
          </div>
          <div className="relative aspect-square">
            <img src="Column4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
