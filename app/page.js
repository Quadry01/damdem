"use client";
import Image from "next/image";
import logo from "../public/Picture 1.png";
var Carousel = require("react-responsive-carousel").Carousel;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React, { useState, useEffect } from "react";
import sl1 from "../public/001.png";
import sl2 from "../public/002.png";
import sl3 from "../public/003.png";
import sl4 from "../public/004.png";
import sl5 from "../public/005.png";
import sl6 from "../public/006.png";
import sl7 from "../public/007.png";
import sl8 from "../public/008.png";
import sl9 from "../public/009.png";
import sl10 from "../public/0010.png";
import sl11 from "../public/0011.png";
import sl12 from "../public/0012.jpg";
import sl13 from "../public//0013.jpg";
import sl14 from "../public/0014.jpg";
import cert from "../public/cert.jpg";

import unilag from "../public/unilag logo for slides.png";
import lagos from "../public/client3.jpeg";
import fg from "../public/client1.png";
import lasgH from "../public/client2.png";

export default function Home() {
  return (
    <main className=" items-center ">
      {/* HERO PAGE */}
      <div>
        <section className="bg-cover bg-no-repeat bg-[url('../public/bg.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl  py-24 lg:pt-40">
            <div className=" text-white relative bottom-10 mt-2 max-[600px]:bottom-0 ">
              <h2 className="font-extrabold">
                DamDem MODULAR BUILDING TECH. LTD.
              </h2>
              <p>
                Project management and actualization of R&D by DamDem Systems
              </p>
            </div>
            <div className="flex  my-20  max-[600px]:flex-wrap  max-[600px]:my-5">
              {" "}
              <div className="w-1/2 mt-20  max-[600px]:w-full  max-[600px]:mt-1">
                <h1 className="mb-4 pt-10 text-4xl text-center font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                  DAMDEM SYSTEMS
                </h1>
                <p className="mb-8 text-lg font-normal text-justify text-gray-300 lg:text-xl sm:px-16 lg:px-10">
                  DamDem Systems (Building) is a branded name for R&D by
                  Professor Olumide Olusanya
                  over more than 40 years at the Department of Architecture
                  University of Lagos, actualized in over 400 housing units. The Modularized Housing system provides for a wide variety of Housing Prototypes. It also provides the possibility of different permutations  of  apartment  types  in  a prototype as may be required.

                </p>
              </div>
              <div class=" w-1/2 ml-20  max-[600px]:w-full  max-[600px]:ml-1  max-[600px]:my-10">
                <Image
                  className=""
                  height={400}
                  width={400}
                  src={cert}
                  alt="certificate"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="/About"
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
            PROJECTS
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
            <div>
              <Image height={"full"} width={"full"} src={sl9} alt="8" />
            </div>
            <div>
              <Image height={"full"} width={"full"} src={sl10} alt="8" />
            </div>
            <div>
              <Image height={"full"} width={"full"} src={sl11} alt="8" />
            </div>
            <div>
              <Image height={"full"} width={"full"} src={sl12} alt="8" />
            </div>
            <div>
              <Image height={"full"} width={"full"} src={sl13} alt="8" />
            </div>
            <div>
              <Image height={"full"} width={"full"} src={sl14} alt="8" />
            </div>
          </Carousel>
        </div>
      </div>

      <div>
        <h1 className="mb-4 text-2xl  py-10 text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
          CLIENTS
        </h1>
        <div className="flex  max-[600px]:flex-wrap max-[600px]:px-20 pb-20 ">
          <Image
            className="px-10 max-[600px]:mb-4"
            src={unilag}
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <Image
            className="px-10 max-[600px]:mb-4"
            src={lagos}
            width={400}
            height={300}
            alt="Picture of the author"
          />
          <Image
            className="px-4 max-[600px]:mb-4"
            src={fg}
            width={400}
            height={300}
            alt="Picture of the author"
          />
          <Image
            className="px-4 max-[600px]:mb-4 "
            src={lasgH}
            width={400}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>
    </main>
  );
}
