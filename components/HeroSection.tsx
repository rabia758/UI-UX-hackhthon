import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <div className="">
      <div
        className="bg-[#f2f0f1] relative flex items-center md:flex-row flex-col justify-start text-left"
        // style={{ backgroundImage: "" } }
      >
        <div className="absolute z-10 inset-0 "></div> {/* Optional Overlay */}
        <div className=" text-black space-y-12 max-w-3xl md:ml-20  px-6">
          <h1 className="sm:text-7xl text-5xl mt-8 text-left font-extrabold mb-4">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-lg md:text-xl text-black/60 mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link href="/product">
          <button className="text-white bg-black w-full md:w-[200px] py-4 px-16 rounded-full hover:text-black hover:bg-white transition">
            Shop Now
          </button>
          </Link>
        </div>
        <div className="mt-8 md:hidden grid grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-3xl font-semibold">200+</h1>
            <h4 className="text-base">International Brands</h4>
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold">2,000+</h1>
            <h4 className="text-base">High-Quality Products</h4>
          </div>

        </div>
          <div className=" md:hidden mt-10">
            <h1 className="text-3xl font-semibold">30,000+</h1>
            <h4 className="text-base">Happy Customers</h4>
          </div>
        <div className="flex  w-full justify-center  ">
            <div className="mt-[200px]">

            </div>
             <div className=" flex justify-center items-center">

                <Image src="/images/home.png" alt='home' width={663} height={663} className='relative  z-0'  />
                <Image src="/images/Vector.png" alt="" width={60} height={60} className='absolute z-0  sm:mr-[500px] mr-[350px]'  />
                <Image src="/images/Vector 1.png" alt="" width={100} height={100} className='absolute z-0 sm:ml-[500px] ml-[300px] sm:mb-[300px] mb-[250px] ' />
             </div>
           <div className="mt-[100px]">

           </div>
               
        </div>
      </div>
      <div className="h-[112px] grid md:grid-cols-5 grid-cols-2   pl-6  justify-center items-center bg-black">
        <Image src="/images/logo1.png" alt='logo1' width={150} height={50}  className='w-[100px] md:w-[150px]' />
        <Image src="/images/logo2.png" alt='logo1' width={100} height={25}  className='w-[100px] md:w-[150px]'/>
        <Image src="/images/logo3.png" alt='logo1' width={150} height={50} className='w-[100px] md:w-[150px]' />
        <Image src="/images/logo4.png" alt='logo1' width={150} height={50}  className='w-[100px] md:w-[150px] mt-8' />
        <Image src="/images/logo5.png" alt='logo1' width={150} height={50} className='w-[100px] md:w-[150px]' />
      </div>
    </div>
  );
};

export default HeroSection;
