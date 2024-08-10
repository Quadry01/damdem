import Image from "next/image";
import React from "react";

import sl1 from "../../public/slide1.jpg";
import sl2 from "../../public/slide2.jpg";
import sl3 from "../../public/slide4.jpg";
import sl4 from "../../public/slide6.jpg";
import sl5 from "../../public/slide8.jpg";
import prof from "../../public/prof.jpeg";

function About() {
  return (
    <div>
      <section
        class=" h-full
       bg-center bg-no-repeat bg-[url('../public/slide15.jpg')] bg-gray-700 bg-blend-multiply"
      >
        <div className="px-4 mx-auto max-w-screen-xl  pt-32 ">
          <div className=" text-white relative bottom-10 mt-2 max-[600px]:bottom-0 ">
            <h2 className="font-extrabold">
              DamDem MODULAR BUILDING TECH. LTD.
            </h2>
            <p>Project management and actualization of R&D by DamDem Systems</p>
          </div>

          <dv className="text-white">
            <h1 className="mb-4 pt-10 text-  font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              DamDem SYSTEMS
            </h1>
            <i>Marriage of</i>
            <p className="font-extrabold">
              PRODUCT – World class Architecture /Housing <br />
              & <br />
              PROCESS – Industrial Construction (IC)
            </p>
          </dv>

          <h1 className="mb-4 pt-10 text-4xl text-center font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            DamDem SYSTEMS HOUSING
          </h1>
          <p className="mb-8 text-lg font-normal text-center text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            DamDem Systems (Building) is a registered name for R&D by Professor
            Olumide Olusanya <br/>Over more than 40 years at the Department of
            Architecture University of Lagos, actualized in over 400 housing
            units.
          </p>
        </div>

        <div
          className="mx-auto max-w-screen-xl z-10 pb-24 lg:py-20 relative -bottom-40 x
        "
        >
          <div
            className="flex flex-row 
          "
          >
            <Image
              className=" mx-4 basis-1/4 rounded-3xl max-[600px]:mx-1 max-[600px]:h-40"
              height={"full"}
              width={200}
              src={sl1}
              alt="8"
            />{" "}
            <Image
              className=" mx-4 basis-1/4 rounded-3xl max-[600px]:hidden"
              height={"full"}
              width={200}
              src={sl2}
              alt="8"
            />
            <Image
              className=" mx-4 basis-1/4 rounded-3xl max-[600px]:mx-1 max-[600px]:hidden"
              height={"full"}
              width={200}
              src={sl3}
              alt="8"
            />
            <Image
              className=" mx-4 basis-1/4basis-1/4 rounded-3xl max-[600px]hidden"
              height={"full"}
              width={200}
              src={sl4}
              alt="8"
            />
            <Image
              className=" mx-4 basis-1/4 rounded-3xl max-[600px]:hidden "
              height={"full"}
              width={200}
              src={sl5}
              alt="8"
            />
          </div>
        </div>
      </section>

      <div className=" pt-32">
        <div className="p-10 flex max-[600px]:flex-wrap-reverse  ">
          <article class="format lg:format-lg   p-10 pt-20  w-1/2 max-[600px]:pt-4 max-[600px]:p-4 max-[600px]:w-full">
            <h1></h1>
            <p class="lead text-justify">
              <strong> Professor OLUMIDE O. OLUSANYA </strong>is trained as an
              architect, he is a composer and pianist. He was appointed
              Professor of Architecture at the University of Lagos in 1995. He
              served as the Dean, Faculty of Environmental Science (1999 -
              2000). His inaugural lecture is titled, The Science of Creativity:
              Appropriating the Power of the Image of God (2004. He is presently
              an adjunct professor in the department after retirement from the
              university in 2022.
            </p>

            <p> Prof Olusanya’s major architectural projects include </p>
            <ul>
              <li className="list-disc text-justify mt-3">
                3km x 3km Mega Auditorium of the Redeemed Christian Church of
                God at Redemption Camp, Ogun State, which on completion will be
                one of the largest covered spaces in the world.
              </li>
              <li className="list-disc text-justify mt-3">
                {" "}
                RCCG City of David: Th e 2500 capacity church auditorium of the
                at Oniru Estate, Victoria Island, Lagos (2004) - a marriage of
                architecture and structural engineering in a unique roof design
                that achieves substantial economy of material, profusion of
                natural light as well as architectural elegance. It is the first
                of its kind in Nigeria designed and fabricated by Nigerians.{" "}
              </li>
            </ul>
          </article>

          <div className="w-1/2 pl-5 max-[600px]:w-full">
            <Image
              className=" mx-4 basis-1/4 rounded-3xl block"
              height={500}
              width={500}
              src={prof}
              alt="8"
            />
            <h1 className="font-extrabold text-2xl  pl-4">
              Professor Olumide Olusanya{" "}
            </h1>
            <h1 className="font-bold text-xl pl-4">
              Adjunct Professor <br />
              Principal
            </h1>
          </div>
        </div>
      </div>

      <div className=" pb-32">
        <div className="p-10 flex max-[600px]:flex-wrap">
          <div className="w-1/2 pl-20 content-start max-[600px]:w-full max-[600px]:pl-10">
            <Image
              className=" mx-4 basis-1/4 rounded-3xl block "
              height={500}
              width={500}
              src={prof}
              alt="8"
            />
            <h1 className="font-extrabold text-2xl  pr-4 max-[600px]:text-lg max-[600px]:w-full">
              Dr Olasunmbo Olusanya{" "}
            </h1>
            <h1 className="font-bold text-xl pr-4">
             
             Director
            </h1>
          </div>
          <article class="format lg:format-lg   p-10 pt-20  w-1/2 max-[600px]:pt-4 max-[600px]:p-4 max-[600px]:w-full">
            <p class="lead text-justify">
              <strong> Dr Olasunmo Olusanya </strong>is trained as an
              architect, he is a composer and pianist. He was appointed
              Professor of Architecture at the University of Lagos in 1995. He
              served as the Dean, Faculty of Environmental Science (1999 -
              2000). His inaugural lecture is titled, The Science of Creativity:
              Appropriating the Power of the Image of God (2004. He is presently
              an adjunct professor in the department after retirement from the
              university in 2022.
            </p>

            <p> Prof Olusanya’s major architectural projects include </p>
            <ul>
              <li className="list-disc text-justify mt-3">
                3km x 3km Mega Auditorium of the Redeemed Christian Church of
                God at Redemption Camp, Ogun State, which on completion will be
                one of the largest covered spaces in the world.
              </li>
              <li className="list-disc text-justify mt-3">
                {" "}
                RCCG City of David: Th e 2500 capacity church auditorium of the
                at Oniru Estate, Victoria Island, Lagos (2004) - a marriage of
                architecture and structural engineering in a unique roof design
                that achieves substantial economy of material, profusion of
                natural light as well as architectural elegance. It is the first
                of its kind in Nigeria designed and fabricated by Nigerians.{" "}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
