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
      <div className="absolute md:-top-[90px] -top-[120px] left-[50%] transform -translate-x-1/2 w-[90%] sm:w-[80%] md:h-[180px] h-[250px] bg-black rounded-[20px] flex flex-col md:flex-row justify-between md:px-10 px-6 py-8 items-center shadow-lg">
        <div className="md:w-1/2 text-white font-bold text-center md:text-left text-lg sm:text-xl md:text-3xl">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="space-y-4 w-full md:w-auto">
          <div className="flex items-center w-full sm:w-[300px] md:w-[349px] gap-4 h-[45px] md:h-[48px] px-4 border border-gray-300 bg-gray-100 rounded-full">
            <CiMail size={20} className="text-black/40" />
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-transparent text-sm md:text-base w-full outline-none"
            />
          </div>
          <button className="w-full sm:w-[300px] md:w-[349px] h-[45px] md:h-[48px] text-center bg-gray-100 border border-gray-300 rounded-full font-bold text-sm md:text-base">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="pt-[120px] pb-20 flex flex-col text-lg bg-[#F0F0F0] text-[#ACABC3]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-6 sm:px-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-4xl mb-6 mt-4 text-black font-extrabold">
              SHOP.CO
            </Link>
            <p className="text-center md:text-left text-sm sm:text-base max-w-xs md:max-w-sm mb-6">
              We have clothes that suit your style and which you&#39;re proud to wear. From women to men.
            </p>
            <div className="flex gap-4">
              <FaTwitter className="h-8 w-8 bg-white hover:bg-black hover:text-white rounded-full p-1 text-black" />
              <FaFacebookF className="h-8 w-8 bg-white hover:bg-black hover:text-white rounded-full p-1 text-black" />
              <FaLinkedin className="h-8 w-8 bg-white hover:bg-black hover:text-white rounded-full p-1 text-black" />
              <FaGithub className="h-8 w-8 bg-white hover:bg-black hover:text-white rounded-full p-1 text-black" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-20 text-center md:text-left">
            {/* Company Section */}
            <div>
              <h1 className="font-semibold mb-5 text-black text-lg sm:text-xl">COMPANY</h1>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h1 className="font-semibold mb-5 text-black text-lg sm:text-xl">HELP</h1>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div>
              <h1 className="font-semibold mb-5 text-black text-lg sm:text-xl">FAQ</h1>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h1 className="font-semibold mb-5 text-black text-lg sm:text-xl">RESOURCES</h1>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>YouTube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-[2px] bg-gray-200 mx-6 sm:mx-12" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-[#9DA0AE] p-6 sm:px-12 md:px-36">
        <p className="mb-6 md:mb-0 text-sm sm:text-base">Shop.co &copy; 2000-2023, All Rights Reserved</p>
        <div className="flex items-center space-x-4">
          <Image src="/images/1.png" alt="cards" width={150} height={40} className="w-32 sm:w-40 md:w-52" />
          <Link href="#">
            <FaArrowUp className="size-6 sm:size-8 cursor-pointer text-[#0D0E43]" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Footer;
