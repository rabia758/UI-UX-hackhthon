
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Selling() {
  const featured = [
    {
      img: "/images/sell1.png",
      name: "VERTICAL STRIPED SHIRT",
      code: "$232",
      price: "$212",
      rating:"5.0/5"
    },
    {
      img: "/images/sell2.png",
      name: "COURAGE GRAPHIC T-SHIRT",
      code: "",
      price: "$115",
      rating:"4.0/5"
    },
    {
      img: "/images/sell3.png",
      name: "LOOSE FIT BERMUDA SHORTS",
      code: "",
      price: "$80",
      rating:"3.5/5"
    },
    {
      img: "/images/sell4.png",
      name: "FADED SKINNY JEANS",
      code: "",
      price: "$210",
      rating:"4.5/5"
    },
  ];

  return (
    <div className="bg-white mt-[120px] mb-[30px] wrapper flex flex-col justify-center  items-center  ">
      <h1 className="text-5xl mb-16 text-black font-extrabold">
      TOP SELLING
      </h1>
      <div className="grid grid-cols-2  gap-6 w-full md:grid-cols-4   ">
        {featured.map((item) => (
         <div key={item.code} className="group hover:bg-black h-[361px] rounded-[20px] shadow-lg   space-y-3  flex flex-col items-start  relative">
         {/* Image Section */}
         <div className="bg-[#F6F7FB] overflow-hidden rounded-[20px] group-hover:bg-white h-[261px] w-full flex flex-col justify-center items-center relative  duration-300">
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

    <hr className="wrapper h-[2px] bg-black"/>
      
    </div>
  );
}
