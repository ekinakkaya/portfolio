"use client";

import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const phrases = [
    { text: "connect!", color: "text-cyan-700" },
    { text: "build something together!", color: "text-fuchsia-700" },
    { text: "discuss business!", color: "text-green-600" },
    { text: "collaborate!", color: "text-indigo-600" },
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8 justify-center sm:flex-row sm:items-center sm:gap-16">
      <div className="max-w-48 max-h-48 sm:min-w-96 sm:min-h-96 animate__animated animate__fadeInLeft overflow-hidden">
        <Image
          src={"https://github.com/ekinakkaya/portfolio/blob/main/public/ekin2.jpg?raw=true"}
          alt="Picture of the author"
          width={300}
          height={300}
          className=""
          // placeholder="blur"
        />
      </div>
      <div>
        <div>
          <h1 className="text-3xl mt-8">Hey, I am</h1>
          <h1 className="text-6xl bg-clip-text mt-2">Ekin Akkaya</h1>

          <div className="mt-4 text-2xl min-h-20 sm:w-96 ">
            <span>let&apos;s </span>
            <span
              key={currentPhraseIndex}
              className={`${phrases[currentPhraseIndex].color} transition-all duration-500 animate-fadeInLeft`}
            >
              {phrases[currentPhraseIndex].text}
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-4 text-3xl gap-1">
          <Link href="/contact" className="flex flex-row align-middle items-center justify-between border-2 p-1 bg-amber-300 hover:bg-sky-200 transition-colors animate__animated animate__fadeInLeft ">
            <span className="">reach out !</span>
            <MdKeyboardDoubleArrowRight size={30} />
          </Link>
          <Link href="/work" className="flex flex-row align-middle items-center justify-between border-2 p-1 hover:bg-sky-200 animate__animated animate__fadeInLeft ">
            <span className="">my work</span>
            <MdKeyboardDoubleArrowRight size={30} />
          </Link>
          <Link href="/about" className="flex flex-row align-middle items-center justify-between border-2 p-1 hover:bg-sky-200 animate__animated animate__fadeInLeft ">
            <span className="">about me</span>
            <MdKeyboardDoubleArrowRight size={30} />
          </Link>
        </div>

      </div>
    </div>
  );
}
