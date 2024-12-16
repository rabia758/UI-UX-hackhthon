
import Image from "next/image";

import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
   






function Footer() {
  return (
    <main className="w-full bg-[#F0F0F0] mt-60 relative">
      {/* Overflowing Black Div */}
      <div className="absolute md:-top-[90px] -top-[120px] left-[50%] transform -translate-x-1/2 w-[80%] md:h-[180px] h-[250px] bg-black rounded-[20px] flex md:flex-row flex-col justify-between md:px-[36px] md:py-[64px] py-[30px] items-center shadow-lg">
        {/* Add content inside the black div if needed */}
        <div className="w-1/2 text-white font-bold text-left md:text-[40px] text-[22px]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="space-y-4">
           <div className="flex items-center md:w-[349px] w-[300px]  gap-5 md:h-[48px] h-[40px] py-4  px-4 border-[1px] border-gray-300 bg-gray-100 rounded-[50px] ">
                          <CiMail  size={20} className="text-black/40   font-semibold" />
                        <input
                          type="text"
                          placeholder="Enter your email address"
                          className="bg-transparent text-[16px]  outline-none "
                        />
                      </div>
           <div className="text-center   md:w-[349px]  w-[300px] md:h-[48px] h-[40px] py-4 px-4 border-[1px] border-gray-300 bg-gray-100 rounded-[50px] ">
                          
                        <input
                          type="text"
                          placeholder="Subscribe to Newsletter"
                          className="bg-transparent text-[16px]   font-bold  outline-none "
                        />
                      </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="wrapper pt-[120px] pb-20 flex flex-col text-lg bg-[#F0F0F0] text-[#ACABC3]">
        <div></div>
        <div className="md:flex block justify-center items-center gap-20">
          {/* Logo and Description */}
          <li className="text-left md:mr-20 mr-0 sm:text-left">
            <div className="flex flex-col items-left">
              <Link href="/" className="text-4xl mb-8 text-black md:text-4xl font-extrabold">
                SHOP.CO
              </Link>
              <p className="text-xl w-auto md:w-[300px] mb-8 text-left">
                We have clothes that suit your style and which you&#39;re proud to wear. From women to men.
              </p>
              <div className="flex gap-x-6 mb-8 justify-start">
                <FaTwitter className="h-[25px] bg-white hover:bg-black hover:text-white  rounded-full w-[25px] p-1 text-black" />
                <FaFacebookF className="h-[25px] bg-white hover:bg-black hover:text-white  rounded-full w-[25px] p-1 text-black" />
                <FaLinkedin className="h-[25px] bg-white hover:bg-black hover:text-white rounded-full  w-[25px] p-1 text-black" />
                <FaGithub  className="h-[25px] bg-white hover:bg-black hover:text-white rounded-full mr-12 w-[25px] p-1 text-black" />
              </div>
            </div>
          </li>

          {/* Footer Links */}
          <ul className="grid md:grid-cols-4 grid-cols-2 justify-center items-center sm:items-start gap-12 sm:gap-32 p-4">
            {/* Company Section */}
            <li>
              <ul className="gap-3 flex flex-col text-center space-y-2 sm:text-left">
                <li>
                  <h1 className="font-semibold mb-7 text-black text-2xl">COMPANY</h1>
                </li>
                <li><p className="text-base">About</p></li>
                <li><p className="text-base">Features</p></li>
                <li><p className="text-base">Works</p></li>
                <li><p className="text-base">Career</p></li>
              </ul>
            </li>

            {/* Customer Care Section */}
            <li>
              <ul className="gap-3 flex flex-col text-center space-y-2 sm:text-left">
                <li>
                  <h1 className="font-semibold mb-7 text-black text-2xl">HELP</h1>
                </li>
                <li><p className="text-base">Customer Support</p></li>
                <li><p className="text-base">Delivery Details</p></li>
                <li><p className="text-base">Terms & Conditions</p></li>
                <li><p className="text-base">Privacy Policy</p></li>
              </ul>
            </li>

            {/* FAQ Section */}
            <li>
              <ul className="gap-3 flex flex-col space-y-2 text-center sm:text-left">
                <li>
                  <h1 className="font-semibold mb-7 text-[#0D0E43] text-2xl">FAQ</h1>
                </li>
                <li><p className="text-base">Account</p></li>
                <li><p className="text-base">Manage Deliveries</p></li>
                <li><p className="text-base">Orders</p></li>
                <li><p className="text-base">Payments</p></li>
              </ul>
            </li>

            {/* Resources Section */}
            <li>
              <ul className="gap-3 flex flex-col space-y-2 text-center sm:text-left">
                <li>
                  <h1 className="font-semibold mb-7 text-[#0D0E43] text-2xl">RESOURCES</h1>
                </li>
                <li><p className="text-base">Free eBooks</p></li>
                <li><p className="text-base">Development Tutorial</p></li>
                <li><p className="text-base">How to - Blog</p></li>
                <li><p className="text-base">YouTube Playlist</p></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <hr className="wrapper h-[2px] bg-gray-200"/>

      {/* Footer Bottom */}
      <div className="flex justify-between flex-col md:flex-row w-full items-center text-[#9DA0AE] p-4 px-36">
        <p className="mb-8 md:mb-0">Shop.co &copy; 2000-2023, All Rights Reserved</p>
        <div className="flex justify-center items-center">
          <Image src="/images/1.png" alt="cards" width={300} height={300} />
          <Link href="#">
            <FaArrowUp className="size-8 cursor-pointer text-[#0D0E43]" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Footer;


