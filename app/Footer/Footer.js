import React from 'react'
import logo from "../../public/Picture 1.png"
import Image from 'next/image'


function Footer() {
  return (
    <div>

<footer className=" rounded-lg shadow bg-gray-900 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
      
<Image
className='p-4 bg-white'
      src={logo}
      width={300}
      height={300}
      alt="Picture of the author"
    />
              
              </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 ">
               <li>
                    <a href="/" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="/About" className="hover:underline me-4 md:me-6">About Us</a>
                </li>
               
                <li>
                    <a href="/Contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024. All Rights Reserved.</span>
    </div>
</footer>

</div>
  )
}

export default Footer