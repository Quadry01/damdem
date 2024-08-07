"use client";
import Image from "next/image";
import logo from "../public/Picture 1.png";
var Carousel = require("react-responsive-carousel").Carousel;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React, { useState, useEffect } from "react";
import sl1 from "../public/slide1.jpg";
import sl2 from "../public/slide2.jpg";
import sl3 from "../public/slide3.jpg";
import sl4 from "../public/slide4.jpg";
import sl5 from "../public/slide6.jpg";
import sl6 from "../public/slide7.png";
import sl7 from "../public/slide8.jpg";
import sl8 from "../public/slide9.jpg";
import sl9 from "../public/slide10.jpg";

import unilag from "../public/unilag logo for slides.png"
import lagos from "../public/client3.jpeg"
import fg from "../public/client1.png"
import lasgH from "../public/client2.png"




export default function Home() {
  return (
    <main className=" items-center ">
      {/* HERO PAGE */}
      <div>
        <section className="bg-cover bg-no-repeat bg-[url('../public/bg.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              DAMDEM SYSTEMS HOUSING
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              The Modularized Housing system innovative housing that have been
              demonstrated in several built projects in Lagos state in the past
              30 years
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </div>

      <div>
        {/* GALLERY */}
        <div className="">
          <h1 className="mb-4 text-2xl  py-10 text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
              DAMDEM SYSTEMS PROJECTS
            </h1>
          <Carousel>
            <div>
              <Image height={400} width={500} src={sl1} alt="1" />
            </div>
            <div>
              <Image height={400} width={500} src={sl2} alt="2" />
            </div>
            <div>
              <Image height={400} width={500} src={sl3} alt="3" />
            </div>
            <div>
              <Image height={400} width={500} src={sl4} alt="4" />
            </div>
            <div>
              <Image height={400} width={500} src={sl5} alt="5" />
            </div>
            <div>
              <Image height={"full"} width={"full"} src={sl6} alt="6" />
            </div>
            <div>
              <Image height={400} width={500} src={sl7} alt="7" />
            </div>
            <div>
              <Image height={"full"} width={"full"} src={sl8} alt="8" />
            </div>
           
          </Carousel>
        </div>
      </div>

      <div>
<h1 className="mb-4 text-2xl  py-10 text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            CLIENTS
            </h1>
        <div className="flex space-x-4  ">

          <Image
          className="px-10 "
      src={unilag}
      width={350}
      height={300}
      alt="Picture of the author"
    />
    <Image
              className="px-10"

      src={lagos}
      width={''}
      height={300}
      alt="Picture of the author"
    />
    <Image
              className="px-4"

      src={fg}
      width={500}
      height={300}
      alt="Picture of the author"
    />
    <Image
              className="px-4"

      src={lasgH}
      width={500}
      height={300}
      alt="Picture of the author"
    />
        </div>
      </div>
    </main>
  );
}
