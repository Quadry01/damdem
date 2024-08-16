import React from "react";
import { FaFacebookF} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 overflow-hidden max-[600px]:p-20">
        <div className=" flex flex-row justify-center items-center w-4/5">
         
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0467728030826!2d3.387269775218839!3d6.515764323252744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1723831565625!5m2!1sen!2sng"
           
          
             className="  h-96 w-full shadow-lg rounded-lg max-[600px]:hidden"
            loading="lazy"
            
          ></iframe>


        </div>
        

<div className=" absolute left-52 h-3/5  text-center px-20 bg-blue-900 p-8 rounded-lg shadow-lg w-1/4 max-[600px]:w-full max-[600px]:left-0 max-[600px]: ">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Get in touch
          </h2>
          <form>
           
              <div
                className=" text-white text-center text-1xl font-medium mb-2 flex flex-col items-center justify-center"
              
              >
                <IoCall className=" text-4xl"/>

                +2348037188153 <br/>
+2348023065560
              </div>
              
        
            <div className="mb-4 mt-4">
              <label
 className=" text-white text-center text-1xl font-medium mb-2 flex flex-col items-center justify-center"
             
              >
                <TfiEmail className=" text-4xl" />damdem.system@gmail.com<br/>
             o_mideolusanya@yahoo.com<br/>
sunmboolusanya@yahoo.com<br/>
              </label>
              
            </div>
            <div className="flex text-white items-center justify-center mt-20">
            
              
              
              <FaFacebookF  className=" text-3xl mx-3"/>
              <FaLinkedin className=" text-3xl mx-3" />
              <FaXTwitter className=" text-3xl mx-3" />
            </div>
            
          </form>
          <div className="flex justify-center mt-4 space-x-4 text-white">
            <a href="#" className="text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>


     
    </div>
  );
};

export default ContactForm;
