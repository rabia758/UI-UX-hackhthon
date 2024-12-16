import React from 'react'
import ProductCard from './ProductCard'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import Filter from './Filter'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'
import { TiTick } from 'react-icons/ti'

  

const Casual = () => {
  return (
    <div className="wrapper my-[100px]">
      <div className="flex justify-start  items-center gap-4">

      {/* left div */}
      
    
        <Filter/>
     
      {/* Right side */}
      <div className="  w-4/5">
        <div className="flex md:justify-between mx-8 mb-12 justify-center gap-4 items-center">
          <h1 className="md:text-[32px] text-[24px] font-bold">Casual</h1>
          <p className="">Showing 1-10 of 100 Products
          Sort by:<span className='font-bold'> Most Popular </span></p>
         
          <Sheet>
  <SheetTrigger><Image src={"/images/10.png"} height={100} width={100} alt="frame-19" className="w-[70px] md:hidden block sm:w-[40px] h-[55px] mt-1 rounded-[68px]  pl-[15px] pr-[5px] pt-[12px] pb-[12px] text-[#F0F0F0]"></Image></SheetTrigger>
  <SheetContent className='bg-white h-[80vh] overflow-y-auto' >
    <div className="bg-white w-11/12 h-[1220px] mb-[250px] rounded-[20px] px-3   border- border-[2px] border-gray-300 ">
    <div className="flex h-[27px] justify-center my-4 gap-28 px-6 items-center">
              <h1 className="text-3xl font-bold">Filters</h1>
              
            </div>
             <hr className='w-72 mx-2 my-3 h-[2px] bg-gray-300'/>

             <div className="h-[160px] my-4">
             <ul className='mt-6'>
             
             
             
             
               <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>T-shirts <IoIosArrowForward /></li>
               <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>Shorts <IoIosArrowForward /></li>
               <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>Shirts <IoIosArrowForward /></li>
               <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>Hoodie <IoIosArrowForward /></li>
               <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>Jeans <IoIosArrowForward /></li>
             </ul>
             </div>
             <hr className='w-72 mx-2 my-3 h-[2px] bg-gray-300'/>
             
             <div className="my-4 h-[90px]">
             
             <div className="flex justify-between mb-8 items-center">
             <h1 className="text-3xl font-bold">Price</h1>
             <IoIosArrowUp size={15}/>
             </div>
             <div className="">
             <div className="w-72 h-[1px]   bg-gray-300">
               <div className="flex justify-center   items-center">
             
               <div className="w-5 h-5 mt-[-10px]  rounded-full bg-black"></div>
               <div className="w-32 h-2 mb-4 bg-black"></div>
               <div className="w-5 h-5 mt-[-10px] rounded-full bg-black"></div>
               </div>
               <div className="text-xl mb-12 font-semibold flex justify-center items-center gap-20">
                 <p className="">$50</p>
                 <p className="">$200</p>
               </div>
             </div>
               </div>
             </div>

             <hr className='w-72 mx-2  h-[2px] bg-gray-300'/>
             <div className="my-4 h-[197px]">
             <div className="h-[27px]">
             <div className="flex justify-between mb-4 items-center">
             <h1 className="text-[30px] font-bold">Colors</h1>
             <IoIosArrowUp size={15}/>
             </div>
             <div className="grid grid-cols-5 gap-2  h-[90px] space-y-4">
             <div className="w-[37px] h-[37px] mt-3 bg-[#00C12B] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#00C12B] hover:text-white" /></div>
             <div className="w-[37px] h-[37px] bg-[#F50606] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#F50606] hover:text-white" /></div>
             <div className="w-[37px] h-[37px] bg-[#F5DD06] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#F5DD06] hover:text-white" /></div>
             <div className="w-[37px] h-[37px] bg-[#F57906] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#F57906] hover:text-white" /></div>
             <div className="w-[37px] h-[37px] bg-[#06CAF5] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#06CAF5] hover:text-white" /></div>
             <div className="w-[37px] h-[37px] bg-[#063AF5] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#063AF5] hover:text-white" /></div>
             <div className="w-[37px] h-[37px] bg-[#7D06F5] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#7D06F5] hover:text-white" /></div>
             <div className="w-[37px] h-[37px] bg-[#F506A4] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#F506A4] hover:text-white" /></div>
             <div className="w-[37px] h-[37px] bg-[#FFFFFF] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#FFFFFF] hover:text-black" /></div>
             <div className="w-[37px] h-[37px] bg-[#000000] border-[1px] border-gray-200 rounded-full flex justify-center items-center  "><TiTick size={25}  className="text-[#000000] hover:text-white" /></div>
             </div>
             </div>
             </div>
             <hr className='w-72 mx-2  h-[2px] bg-gray-300'/>

             <div className="h-[274px] my-4">
             <div className="flex justify-between mb-4 items-center">
             <h1 className="text-[30px] font-bold">Size</h1>
             <IoIosArrowUp size={15}/>
             </div>
             <div className="h-[227px] grid grid-cols-2 ">
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">XX-Small</div>
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">X-Small</div>
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">Small</div>
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">Medium</div>
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">Large</div>
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">X-Large</div>
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">XX-Large</div>
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">3X-Large</div>
             <div className="w-[96px] h-[39px] rounded-[28px] border-[1px] border-gray-100 bg-gray-200 hover:bg-black hover:text-white flex justify-center text-black/60 items-center">4X-Large</div>
             </div>
             </div>
             
             
             <hr className='w-72 mx-2  h-[2px] bg-gray-300'/>

             <div className="h-[171px] my-4">
             <div className="flex justify-between mb-4 items-center">
             <h1 className="text-[30px] font-bold">Dress Style</h1>
             <IoIosArrowUp size={15}/>
             </div>
             <div className="h-[124px]">
             <ul className='mt-6'>
             
             
             
             
             
             
             
             <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>Casual <IoIosArrowForward /></li>
             <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>Formal <IoIosArrowForward /></li>
             <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>Party <IoIosArrowForward /></li>
             <li className='flex justify-between items-center mx-3 mb-3 hover:underline cursor-pointer text-xl text-black/60'>Gym <IoIosArrowForward /></li>
             
             </ul>
             </div>
             </div>
             <button className="w-[200px] hover:bg-black hover:text-white text-black/60 h-[48px] my-12 border-[1px] border-gray-200 bg-gray-200 m-3 rounded-[30px] text-[16px]">Apply Filter</button>
             
    </div>
    <SheetHeader>
      <SheetTitle>
         
      </SheetTitle>
      <SheetDescription>
        <Filter/>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
         
          
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <ProductCard tittle={'Gradient Graphic T-shirt'} src={'/images/7.png'} rating={3.5/5} price={145}/>
          <ProductCard tittle={'Polo with Tipping Details'} src={'/images/8.png'} rating={3.5/5} price={180}/>
          <ProductCard tittle={'Black Striped T-shirt'} src={'/images/9.png'} rating={3.5/5} price={120}/>
          <ProductCard tittle={'SKINNY FIT JEANS'} src={'/images/arrival2.png'} rating={3.5/5} price={240}/>
          <ProductCard tittle={'CHECKERED SHIRT'} src={'/images/arrival3.png'} rating={3.5/5} price={180}/>
          <ProductCard tittle={'SLEEVE STRIPED T-SHIRT'} src={'/images/arrival4.png'} rating={3.5/5} price={130}/>
          <ProductCard tittle={'VERTICAL STRIPED SHIRT'} src={'/images/sell1.png'} rating={3.5/5} price={212}/>
          <ProductCard tittle={'COURAGE GRAPHIC T-SHIRT'} src={'/images/sell2.png'} rating={3.5/5} price={145}/>
          <ProductCard tittle={'LOOSE FIT BERMUDA SHORTS'} src={'/images/sell3.png'} rating={3.5/5} price={180}/>
        </div>
        <hr className='w-auto h-[2px] bg-gray-300'/>
        <div className="flex justify-between items-center text-[16px] mt-4">
          <button className="flex justify-center items-center gap-3 border-[1px] py-4 px-8 hover:bg-black hover:text-white rounded-[20px]">  <FaArrowLeft size={15} />Previous</button>
          <div className="flex justify-center items-center gap-2">
            <p className="px-3 py-1 border-[2px] rounded-xl border-gray-300 hover:border-black">1</p>
            <p className="px-3 py-1 border-[2px] rounded-xl border-gray-300 hover:border-black">2</p>
            <p className="px-3 py-1 border-[2px] rounded-xl border-gray-300 hover:border-black  md:block  hidden">3</p>
            <p className="px-3 py-1 border-[2px] rounded-xl border-gray-300 hover:border-black ">. . .</p>
            <p className="px-3 py-1 border-[2px] rounded-xl border-gray-300 hover:border-black md:block  hidden ">8</p>
            <p className="px-3 py-1 border-[2px] rounded-xl border-gray-300 hover:border-black">9</p>
            <p className="px-3 py-1 border-[2px] rounded-xl border-gray-300 hover:border-black">10</p>
          </div>
          <button className="flex justify-center items-center gap-3 border-[1px] py-4 px-8 hover:bg-black hover:text-white rounded-[20px]">Next   <FaArrowRight size={15} /></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Casual