"use client";
import TechStack from "@/components/TechStack";
import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

function page() {
  const [showFullStack, setShowFullStack] = useState(false);

  const toggleStack = () => {
    setShowFullStack((prev) => !prev);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col align-middle items-center justify-self-center sm:max-w-[700px]">
      <div className="text-3xl">about me</div>

      <div className="text-lg mt-4 flex flex-col gap-4">
        <p>
          Hi! I am a Junior Full Stack Developer - Computer Engineer based in
          Ankara, Turkey. I spend most of my time with computers coding,
          designing or just learning stuff. I daily drive technologies such as
          Next.js, Node.js, React, TailwindCSS, NestJS and Spring Boot. Here is
          everything I use:
        </p>

        <div className="relative w-full">
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showFullStack ? "max-h-[2000px]" : "max-h-[200px]"
            }`}
          >
            <TechStack />
          </div>

          {!showFullStack && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
          )}

          <button
            onClick={toggleStack}
            aria-label="Toggle Tech Stack"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
          >
            {showFullStack ? (
              <FaAngleDoubleUp size={20} />
            ) : (
              <FaAngleDoubleDown size={20} className="animate-bounce" />
            )}
          </button>
        </div>

        <p>
          I would say I am a full stack developer but in reality I do
          everything. Frontend! Backend! Embedded projects! Mobile apps!
          Compilers!{" "}
          <span>
            <a
              href="https://github.com/ekinakkaya/cutie"
              className="text-blue-600 underline"
            >
              (here is one){" "}
            </a>
          </span>
          Building things I am excited about has always been refreshing for me.
          Learning how stuff works and falling into rabbit holes always felt so
          fun even when I was a child. Anyways...
        </p>
        <p>
          I am currently learning everything I can find about how the cpu and
          the memory works.{" "}
          <a
            href="https://people.freebsd.org/~lstewart/articles/cpumemory.pdf"
            className="text-blue-600 underline"
          >
            (here is a great resource)
          </a>{" "}
          And machine learning.{" "}
          <a href="https://themlbook.com/" className="text-blue-600 underline">
            (here is another great resource)
          </a>
        </p>

        <p>
          I have created a small project that recognizes the hand gestures that
          you do, real time.
          <a
            href="https://github.com/ekinakkaya/gesture-recognition"
            className="text-blue-600 underline"
          >
            {" "}
            (link){" "}
          </a>
          And here is a frontend project to chat with OpenAI API compatible
          LLM&apos;s.
          <a
            href="https://github.com/ekinakkaya/lilchat"
            className="text-blue-600 underline"
          >
            {" "}
            (link){" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;
