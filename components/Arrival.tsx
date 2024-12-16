
import Image from "next/image";
import {  FaStar } from "react-icons/fa";

export default function Arrival() {
  const featured = [
    {
      img: "/images/arrival1.png",
      name: "T-SHIRT WITH TAPE DETAILS",
      code: "",
      price: "$120",
      rating:"4.5/5"
    },
    {
      img: "/images/arrival2.png",
      name: "SKINNY FIT JEANS",
      code: "$260",
      price: "$240",
      rating:"3.5/5"
    },
    {
      img: "/images/arrival3.png",
      name: "CHECKERED SHIRT",
      code: "",
      price: "$180",
      rating:"4.5/5"
    },
    {
      img: "/images/arrival4.png",
      name: "SLEEVE STRIPED T-SHIRT",
      code: "$160",
      price: "$130",
      rating:"4.5/5"
    },
  ];

  return (
    <div className="bg-white mt-[120px] mb-[30px] wrapper flex flex-col justify-center  items-center  ">
      <h1 className="text-5xl mb-16 text-black font-extrabold">
      NEW ARRIVALS
      </h1>
      <div className="grid grid-cols-2  gap-6 w-full md:grid-cols-4   ">
        {featured.map((item) => (
         <div key={item.code} className="group hover:bg-black h-[361px]  shadow-lg rounded-[20px] space-y-3  flex flex-col items-start  relative">
         {/* Image Section */}
         <div className="bg-[#F6F7FB] overflow-hidden group-hover:bg-white h-[261px] w-full flex flex-col justify-center items-center relative  duration-300">
           <Image
             src={item.img}
             alt={item.name}
             width={270}
             height={270}
             className=""
           />
           
              </div>
       
         {/* Text Content */}
         
<div className="">

         <h2 className="text-xl ml-3 text-black font-semibold group-hover:text-white transition-all duration-300">
           {item.name}
         </h2>
       
          <div className="flex justify-start gap-2 items-center group-hover:text-white  w-[139px] h-[24.71px] pl-4  "><FaStar  className="text-[#FFC633]" /><FaStar className="text-[#FFC633]"  /><FaStar className="text-[#FFC633]"  /><FaStar  className="text-[#FFC633]" /><FaStar  className="text-[#FFC633]" />{item.rating}</div>
         
</div>
        
       <div className="flex text-xl justify-start items-center ml-3 gap-4">

         <p className="text-black font-medium group-hover:text-white transition-all duration-300">
           {item.price}
         </p>
         <p className="text-gray-400 font-medium group-hover:text-white transition-all duration-300">
           {item.code}
         </p>
         
       </div>
         </div>
   
               ))}
      </div>
    <button className="flex justify-center items-center w-[150px] h-[40px] rounded-[40px] text-xl my-20 border-[1px] hover:bg-black hover:text-white">View All</button>


      
    </div>
  );
}
