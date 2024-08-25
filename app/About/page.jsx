import Image from "next/image";
import React from "react";

import sl1 from "../../public/001.png";
import sl2 from "../../public/002.png";
import sl3 from "../../public/003.png";
import sl4 from "../../public/004.png";
import sl5 from "../../public/005.png";
import prof from "../../public/prfo.jpg";
import dro from "../../public/dro.jpeg";

function About() {
  return (
    <div className=""> 
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
        <spam className=" pl-4 absolute bottom-1 bg-white p-1 max-[600px]:relative">
          DAMDEM PRE-CAST SLAB BRIDGE CRANE: Innovation in Self-Erecting
          Industrial Systems Building 2022
        </spam> 
      </div>
      <section
        class=" h-full
       bg-center bg-no-repeat bg-[url('../public/bg.jpg')] bg-gray-700 bg-blend-multiply "
      >
        <div className="px-4 mx-auto max-w-screen-xl  pt-20 max-[600px]:pt-4 ">
          <div className=" text-white relative bottom-10 mt-2 max-[600px]:bottom-0 ">
            <h2 className="font-extrabold">
              DAMDEM MODULAR BUILDING TECH. LTD.
            </h2>
            <p>Project management and actualisation of R&D by DamDem Systems</p>
          </div>

          <dv className="text-white">
            <h1 className="mb-4 pt-10 text-  font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              DAMDEM SYSTEMS
            </h1>
            <i>Marriage of</i>
            <p className="font-extrabold">
              PRODUCT – World class Architecture /Housing <br />
              & <br />
              PROCESS – Industrial Construction (IC)
            </p>
          </dv>
          <div className=" flex text-white w-full max-[600px]:flex-wrap">
            <div className="w-1/2 mr-4 max-[600px]:w-full">
              <h1 className="mb-4 pt-10 text-4xl  text-center font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
                DAMDEM SYSTEMS HOUSING
              </h1>
              <p className="mb-8 text-lg font-normal  text-white lg:text-xl sm:px-16 lg:px-4">
                The Modularised Housing developed over 4 decades provides a wide
                variety of apartment types. It also provides the possibility of
                different permutations of apartments in any given block as may
                be required. <br className="mb-2" />
                These innovative housing prototypes have been demonstrated in
                built projects in Lagos state.
              </p>

              <p className="mb-8 text-lg font-normal  text-white lg:text-xl sm:px-16 lg:px-4">
                The essential features are:
              </p>
              <ul className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-4 max-[600px]:px-4">
                <li className="list-disc">Optimal utilisation of land;</li>
                <li className="list-disc">Optimisation of natural lighting and cross ventilation;</li>
                <li className="list-disc">
                  Articulation of the dual requirements for privacy as well as
                  sense of community in the organisation of residential units
                  and public spaces.
                </li>
              </ul>
            </div>
            <div className="w-1/2 text-justify max-[600px]:w-full">
              <h1 className="mb-4 pt-10 text-4xl text-center font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
                DAMDEM SYSTEMS BUILDING
              </h1>
              <p className="mb-8 text-lg font-normal  text-white lg:text-xl sm:px-16 lg:px-1">
                DamDem Systems Building is an industrial building technology
                developed over the past 30 years by Professor Olumide Olusanya
                at the Department of Architecture, University of Lagos. The
                industrial systems building consists of two stages:
              </p>
              <ul>
                <li className="list-disc lg:text-xl">
                  {" "}
                  <strong>INDUSTRIAL PRODUCTION</strong> of standardised
                  prefabricated building components in on-site factory for
                  minimisation of transportation costs. Production of components
                  under workshop conditions ensures optimal quality control and
                  high productivity.
                </li>{" "}
                <li className="list-disc my-2 lg:text-xl">
                  {" "}
                  <strong>MODULAR ASSEMBLY </strong> of interlocking precast
                  reinforced concrete (rc) building components with speed and
                  precision requiring minimal patching, cutting or wet work.
                </li>
              </ul>

              <p className="mb-8 text-lg font-normal  text-white lg:text-xl  sm:px-16 lg:px-1">
                <strong>THE CHALLENGE </strong>
                Significant reduction in cost and time of housing production.
                (up to 40%)
              </p>
              <p className="mb-8 text-lg font-normal  text-white lg:text-xl sm:px-16 lg:px-1">
                <strong>THE STRATEGY </strong>
                Domestication of industrialisation of the housing delivery
                process through the building of indigenous productive capacity
                i.e. Industrial infrastructure
              </p>
              <p className="mb-1 text-lg font-normal  text-white lg:text-xl sm:px-16 lg:px-0">
                <strong>THE TACTICS</strong> -Paradigm shifts
              </p>

              <ul className="max-[600px]:px-4">
                <li className="list-disc  lg:text-xl ">
                  From:{" "}
                
                    low-productivity customised building construction  To: 
                    high-productivity modularised industrial production
                
                </li>
                <li className="list-disc lg:text-xl my-2">
                  {" "}
                  From:{" "}
        use of low value-added building materials 
                  To: {" "}
                 
                    high value-added high-performance building components and
                    technology
                  
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        <div
          className="mx-auto max-w-screen-xl z-10 pb-24 lg:py-20 relative -bottom-40 x
        "
        >
          <div
            className="flex flex-row max-[600px]:px-4
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
          <article class="format lg:format-lg   p-10 pt-20  w-1/2 max-[600px]:pt-4 max-[600px]:p-1 max-[600px]:w-full">
            <h1></h1>
            <p class="lead text-justify">
              <strong> Professor Olumide Olusanya </strong> is an architect,
              composer, and pianist. He is currently an adjunct professor in the
              Department of Architecture at the University of Lagos. He earned a
              B.Arch. from the University of Oregon and an M.Arch. from the
              University of Washington. Appointed a Professor of Architecture in
              1995, he also served as the Dean of the Faculty of Environmental
              Science University of Lagos from 1999 to 2000. His career has been
              focused on actualisation of research and innovation in creative
              problem solving that impact the society: The development of Mass
              Housing Prototypes focused on environmental comfort and energy
              savings in a tropical climate, and Appropriate Building Technology
              for sustainable industrialisation through capacity enhancement
              tailored to the realities of a developing economy.
            </p>

            <p className="lead text-justify pt-3">
              Professor Olusanya’s notable recognitions include: Certificate of
              Award for Innovation by The Nigerian Academy of Engineering
              (2024); Distinguished Research Awards at the Nigerian Universities
              Research and Development Fair (2005, 2008), and the University of
              Lagos Best Researcher Award for the Faculty of Environmental
              Science (2005-2008). He has also been a guest speaker at
              international conferences of the Commonwealth Association of
              Architects (CAA). His work was featured in CAA NewsNet ( 3rd
              QUARTER 1997. Issue No 5).
            </p>
          </article>

          <div className="w-1/2 pl-5 max-[600px]:w-full max-[600px]:pl-1">
            <Image
              className=" mx-4 basis-1/4 rounded-3xl block "
              height={300}
              width={400}
              src={prof}
              alt="8"
            />
            <h1 className="font-extrabold text-1xl  pl-4">
              Professor Olumide Olusanya{" "}
            </h1>
            <h1 className="font-semibold text-lg pl-4">Principal</h1>
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
            <h1 className="font-extrabold text-1xl  pr-4 max-[600px]:text-lg max-[600px]:w-full">
              Dr Olasunmbo Olusanya{" "}
            </h1>
            <h1 className="font-semibold text-lg pr-4">Director</h1>
          </div>
          <article class="format lg:format-lg   pr-40 pt-20  w-1/2 max-[600px]:pt-4 max-[600px]:p-1 max-[600px]:w-full">
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
