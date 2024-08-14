import Image from "next/image";
import React from "react";

import sl1 from "../../public/slide1.jpg";
import sl2 from "../../public/slide2.jpg";
import sl3 from "../../public/slide4.jpg";
import sl4 from "../../public/slide6.jpg";
import sl5 from "../../public/slide8.jpg";
import prof from "../../public/prfo.jpg";
import dro from "../../public/dro.jpeg";

function About() {
  return (
    <div>
      <div className="w-full h-scren max-[600px]:mt-20">
        <video
          width="1620"
          height="240"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={"vid1.mp4"} type="video/mp4" />

          {/* <source src={vid} type="video/mp4" /> */}
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
      </div>
      <section
        class=" h-full
       bg-center bg-no-repeat bg-[url('../public/slide15.jpg')] bg-gray-700 bg-blend-multiply"
      >
        <div className="px-4 mx-auto max-w-screen-xl  pt-20 max-[600px]:pt-4 ">
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
            Olumide Olusanya <br />
            Over more than 40 years at the Department of Architecture University
            of Lagos, actualized in over 400 housing units.
          </p>
        </div>

        <div
          className="mx-auto max-w-screen-xl z-10 pb-24 lg:py-20 relative -bottom-40 x
        "
        >
          <div
            className="flex flex-row  max-[600px]:px-4
          "
          >
            <Image
              className="1 mx-4 basis-1/4 rounded-3xl max-[600px]:mx-1 max-[600px]:h-24 max-[600px]:w-32"
              height={"full"}
              width={200}
              src={sl1}
              alt="8"
            />{" "}
            <Image
              className="2 mx-4 basis-1/4 rounded-3xl max-[600px]:hidden"
              height={"full"}
              width={200}
              src={sl2}
              alt="8"
            />
            <Image
              className="3 mx-4 basis-1/4 rounded-3xl max-[600px]:mx-1 max-[600px]:h-24 max-[600px]:w-32"
              height={"full"}
              width={200}
              src={sl3}
              alt="8"
            />
            <Image
              className="4 mx-4  basis-1/4 rounded-3xl max-[600px]:mx-1 max-[600px]:h-24 max-[600px]:w-32"
              height={"full"}
              width={200}
              src={sl4}
              alt="8"
            />
            <Image
              className="5 mx-4 basis-1/4 rounded-3xl max-[600px]:hidden "
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
              <strong> Professor Olumide Olusanya </strong>Professor Olumide
              O. Olusanya is an accomplished architect, composer, and pianist,
              currently serving as an adjunct professor in the Department of
              Architecture at the University of Lagos. He earned his B.Arch.
              from the University of Oregon and his M.Arch. from the University
              of Washington. Appointed as a Professor of Architecture at the
              University of Lagos in 1995, he also served as Dean of the Faculty
              of Environmental Science from 1999 to 2000. His career is marked
              by a focus on research and innovation in creative problem-solving,
              with significant contributions to mass housing prototypes aimed at
              environmental comfort and energy efficiency in tropical climates.
              His work on sustainable building technology has been instrumental
              in addressing housing challenges in Nigeria.
            </p>

            <p className="lead text-justify pt-3">
              Prof Olusanya’s a has received numerous awards, including the
              Distinguished Research Award from the Nigerian Universities
              Research and Development Fair (2005, 2008), and the University of
              Lagos Best Researcher Award for the Faculty of Environmental
              Science (2005-2008). He has also been a guest speaker at
              international conferences of the Commonwealth Association of
              Architects. After retiring from the University of Lagos in 2022,
              he continues to contribute to the academic community as an adjunct
              professor. His work in housing development, particularly the Mass
              Housing Pilot Project for LagosHOMS, stands as a testament to his
              commitment to practical solutions in architecture.
            </p>
          </article>

          <div className="w-1/2 pl-5 max-[600px]:w-full">
            <Image
              className=" mx-4 basis-1/4 rounded-3xl block "
              height={300}
              width={400}
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
          <div className="w-1/2 pl-44 pt-20 content-start max-[600px]:w-full max-[600px]:pt-0 max-[600px]:pl-4 max-[600px]:-ml-4">
            <Image
              className=" mx-4 basis-1/4 rounded-3xl block "
              height={300}
              width={400}
              src={dro}
              alt="8"
            />
            <h1 className="font-extrabold text-2xl  pr-4 max-[600px]:text-lg max-[600px]:w-full">
              Dr Olasunmbo Olusanya{" "}
            </h1>
            <h1 className="font-bold text-xl pr-4">Director</h1>
          </div>
          <article class="format lg:format-lg   pr-40 pt-20  w-1/2 max-[600px]:pt-4 max-[600px]:p-4 max-[600px]:w-full">
            <p class="lead text-justify">
              <strong> Dr Olasunmbo Olusanya </strong>is an Employment
              Relations, Human Resource Management and Design Thinking
              Specialist with a focus on Informal Employment, Labour Economics,
              Entrepreneurship, and Sustainable Livelihood. Her work focuses on
              patterns of employment, including the peculiarities and potentials
              of informal work arrangements. She holds a Ph.D. and an M.Sc. in
              Industrial Relations and Personnel Management from the University
              of Lagos, Nigeria; The focus of her PhD thesis was “Subcontracting
              Systems and Employment Relations in the Building Construction
              Industry in Lagos State, Nigeria”. She also holds a B.Sc. in
              Business Administration from Ogun State University, Nigeria. She
              is a Research Member of the ARUA Centre of Excellence for
              Unemployment and Skills Development; the Pro-Poor Development
              Research Cluster at the University of Lagos, Nigeria, and
              Development and Allied Policy Studies Research Group. Olusanya has
              over eleven years of teaching experience and is a mentor to many
              students.
            </p>

            <p className="lead text-justify pt-3">
              She is a member of the Nigerian Industrial Relations Association
              (NIERA), the Nigerian Institute of Management (NIM), the Society
              for Human Resource Management (SHRM), the Lagos Studies
              Association (LSA), and Organisation for Women in Science for the
              Developing World (OWSD). She is currently the Deputy Director,
              Research Management Office, University of Lagos. She has conducted
              research on a wide range of subjects in the areas of focus and
              authored peer-reviewed articles in local and international
              journals. She has participated in grant projects funded by the
              British Academy, Foreign Commonwealth Office, Economic and Social
              Research Council, European Union, and Tertiary Education Trust
              Fund, Nigeria. Dr. Olusanya currently resides in Lagos, Nigeria.{" "}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
