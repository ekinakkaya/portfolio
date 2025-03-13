"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Page() {
  const openMailPopup = () => {
    setMailButtonClicked(true);
  };

  const closeMailPopup = () => {
    setMailButtonClicked(false);
  };

  const copyMailToClipboard = () => {
    navigator.clipboard.writeText("midamnuvas@gmail.com");
  };

  const [mailButtonClicked, setMailButtonClicked] = useState(false);

  return (
    <>
      {/* Mail me popup */}
      <div
        className={`
        ${
          mailButtonClicked ? "" : "hidden"
        } absolute border-2 w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white animate__animated animate__fadeInLeft animate__faster`}
      >
        <Link href={""} onClick={closeMailPopup}>
          <FaRegWindowClose size={40} className="m-4 justify-self-end" />
        </Link>
        <div className="flex flex-col mt-4 text-3xl gap-1 w-80 transition-colors align-middle items-center">
          <Link
            href="mailto:midamnuvas@gmail.com"
            className="w-72 flex flex-row align-middle items-center justify-between border-2 p-1 bg-cyan-200 hover:bg-cyan-400 "
          >
            <span className="">Mail me</span>
            <MdKeyboardDoubleArrowRight size={30} />
          </Link>
          <Link
            href={""}
            onClick={copyMailToClipboard}
            className="w-72 flex flex-row align-middle items-center justify-between border-2 p-1 bg-amber-100 hover:bg-amber-300 "
          >
            <span className="">Copy to clipboard</span>
            {/* <MdKeyboardDoubleArrowRight size={30} /> */}
            <FaClipboard size={30} />
          </Link>
          <p className="text-lg w-72 flex flex-row align-middle items-center justify-between border-2 p-1 mt-4 ">
            midamnuvas@gmail.com
          </p>
        </div>
      </div>

      {mailButtonClicked && (
        <Link
          href={""}
          onClick={closeMailPopup}
          className="w-screen h-screen absolute bg-slate-400/50 z-40 transition-colors"
        ></Link>
      )}

      {/* Page content */}
      <div
        className={` min-h-screen p-8 flex flex-col align-middle items-center justify-self-center sm:max-w-[700px]`}
      >
        <h1 className="text-3xl">contact me</h1>

        <p className="mt-4 text-lg">
          You can reach out to me via LinkedIn, Instagram or Mail. Here are my
          links:
        </p>
        <div className="flex flex-col mt-4 text-3xl gap-1 w-80 transition-colors">
          <Link
            href="https://www.linkedin.com/in/ekin-akkaya-a61697209/"
            className="flex flex-row align-middle items-center justify-between border-2 p-1 bg-sky-300 hover:bg-sky-500 animate__animated animate__fadeInLeft "
          >
            <span className="">LinkedIn</span>
            <MdKeyboardDoubleArrowRight size={30} />
          </Link>
          <Link
            href="https://www.instagram.com/ekinnakkaya/"
            className="flex flex-row align-middle items-center justify-between border-2 p-1 bg-red-300 hover:bg-red-400 animate__animated animate__fadeInLeft "
          >
            <span className="">Instagram</span>
            <MdKeyboardDoubleArrowRight size={30} />
          </Link>

          <Link
            href=""
            className=" mt-4 flex flex-row align-middle items-center justify-between border-2 p-1 hover:bg-sky-200 animate__animated animate__fadeInLeft "
            onClick={openMailPopup}
          >
            <div>
              <p className="">Mail</p>
              <p className="text-lg">midamnuvas@gmail.com</p>
            </div>
            <MdKeyboardDoubleArrowRight size={30} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
