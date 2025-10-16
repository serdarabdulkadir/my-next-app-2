/* eslint-disable react/no-unescaped-entities */
"use client"; // Interaktif bileşenler için bu direktif gerekli
import Link from "next/link";
import { useState } from "react";
import {
  Plus,
  MessageSquare,
  Wand2,
  Users,
  Sun,
  User,
  HelpCircle,
  LogOut,
  Search,
  ChevronRight,
  Sparkles,
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

interface PromptCardProps {
  prompt: string;
  capabilities: string[];
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, capabilities }) => (
  <div className="rounded-lg flex flex-col h-full" id="Technologiess">
    <p className="text-gray-300 mb-4 text-sm">&quot;{prompt}&quot;</p>
    <div className="flex flex-col space-y-2 mt-auto">
      {capabilities.map((cap, index) => (
        <span
          key={index}
          className="bg-[#212121] hover:bg-[#2c2b2b] text-white border border-gray-700 text-xs p-2 rounded-md text-center"
        >
          {cap}
        </span>
      ))}
    </div>
  </div>
);

export default function TechnologiesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cardData: PromptCardProps[] = [
    {
      prompt: "Explain quantum computing in simple terms.",
      capabilities: [
        "Remembers what user said earlier in the conversation.",
        "May occasionally generate incorrect information.",
        "Got any creative ideas for a 10-year-old’s birthday?",
        "Allows user to provide follow-up corrections.",
        "May occasionally produce harmful instructions or biased content.",
        "How do I make an HTTP request in JavaScript?",
        "Trained to decline inappropriate requests.",
        "Limited knowledge of world and events after 2021.",
      ],
    },
    {
      prompt: "Explain quantum computing in simple terms.",
      capabilities: [
        "Remembers what user said earlier in the conversation.",
        "May occasionally generate incorrect information.",
        "Got any creative ideas for a 10-year-old’s birthday?",
        "Allows user to provide follow-up corrections.",
        "May occasionally produce harmful instructions or biased content.",
        "How do I make an HTTP request in JavaScript?",
        "Trained to decline inappropriate requests.",
        "Limited knowledge of world and events after 2021.",
      ],
    },
    {
      prompt: "Explain quantum computing in simple terms.",
      capabilities: [
        "Remembers what user said earlier in the conversation.",
        "May occasionally generate incorrect information.",
        "Got any creative ideas for a 10-year-old’s birthday?",
        "Allows user to provide follow-up corrections.",
        "May occasionally produce harmful instructions or biased content.",
        "How do I make an HTTP request in JavaScript?",
        "Trained to decline inappropriate requests.",
        "Limited knowledge of world and events after 2021.",
      ],
    },
  ];

  return (
    <div className="bg-[#121212] text-gray-300 font-sans relative" id="Technologies">
      <div className="relative text-white rounded-3xl flex flex-col items-center justify-center text-center overflow-hidden">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4 max-w-5xl">
          See Trending Prompts
        </h2>
        <p className="text-lg text-white/60 max-w-4xl">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.
        </p>

        <div className="flex justify-center items-center gap-4 mt-10">
          <Link
            href="#"
            className="flex items-center gap-2 px-6 py-3 border border-neutral-600 rounded-full text-sm font-medium transition"
          >
            Start Generating <Image src="/mdi_wand.svg" alt="" width={20} height={20} />
          </Link>
          <Link
            href="#"
            className="gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition"
          >
            Download
          </Link>
        </div>
      </div>

      <div className="bg-[#121212] text-gray-300 mt-32 font-sans flex relative rounded-2xl border border-gray-800">
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          ></div>
        )}

        <aside
          className={`w-64 bg-[#1C1C1C] border-r border-gray-800 flex flex-col fixed top-0 left-0 h-full z-20 transition-transform duration-300 max-h-screen ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-800 lg:border-none">
            <h1 className="text-xl font-bold text-white">Promptverse AI</h1>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-4 flex-grow flex flex-col">
            <nav className="flex flex-col space-y-1 flex-grow">
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <Plus size={18} /> <span>New chat</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <MessageSquare size={18} /> <span>AI Chat Tool Ethics</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <Wand2 size={18} /> <span>AI Chat Tool Impact Writing</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <MessageSquare size={18} /> <span>New chat</span>
              </a>
            </nav>

            <nav className="flex flex-col space-y-1">
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md bg-[#2A2A2A] text-white transition-colors"
              >
                <Users size={18} /> <span>Community</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <Sun size={18} /> <span>Light mode</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <User size={18} /> <span>My account</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <HelpCircle size={18} /> <span>Updates & FAQ</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <LogOut size={18} /> <span>Log out</span>
              </a>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <header className="flex items-center justify-between mb-6 lg:hidden">
            <h1 className="text-lg font-bold text-white">Promptverse AI</h1>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-300 hover:text-white"
            >
              <Menu size={28} />
            </button>
          </header>

          <div className="max-w-7xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search Prompts"
                className="w-full bg-[#212121] border border-gray-800 rounded-md py-2.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 mb-6 gap-2">
              <div className="flex items-center">
                <Sparkles size={16} className="mr-2 text-gray-300" />
                <h3 className="text-white text-base font-semibold">Trending Prompts</h3>
              </div>
              <div className="flex items-center flex-wrap p ">
                <span>Promptverse AI</span>
                <ChevronRight size={16} className="mx-1" />
                <span>Community</span>
                <ChevronRight size={16} className="mx-1" />
                <span className="text-gray-300">Trending prompts</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {cardData.map((data, index) => (
                <PromptCard key={index} prompt={data.prompt} capabilities={data.capabilities} />
              ))}
            </div>

            <div className="flex justify-center items-center mt-10 space-x-2 text-gray-400">
              <button className="p-2 rounded-md hover:bg-[#2A2A2A]">
                <ChevronLeft size={18} />
              </button>
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
                    num === 1 ? "bg-[#2A2A2A] text-white" : "hover:bg-[#2A2A2A]"
                  }`}
                >
                  {num}
                </button>
              ))}
              <span className="px-2">...</span>
              <button className="p-2 rounded-md hover:bg-[#2A2A2A]">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
