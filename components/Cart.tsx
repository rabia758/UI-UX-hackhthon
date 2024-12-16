import React from 'react'
import { GoTag } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from 'next/image';
const Cart = () => {
  return (
    <div className='wrapper my-[100px] overflow-hidden'>
        <h1 className="text-[32px] font-extrabold mb-8">YOUR CART</h1>
        <div className="flex md:flex-row flex-col justify-center items-center gap-8">

{/* left side */}
        <div className="md:w-[715px] w-auto h-[508px] border-[1px] border-gray-200 rounded-[20px]">

<div className="md:w-[667px] w-auto h-[124px]">

    <div className="md:w-[527px] w-auto h-[124px] ">
    {/* div 1 */}
     <div className="flex m-3 md:justify-start justify-center items-center">
         
      <Image src="/images/7.png" alt='' width={120} height={120} className='rounded-[20px]' />
       <div className="flex justify-center md:gap-60 items-center m-3 "> 
        <div className="w-[227px]  h-[124px]">
            <h1 className="text-[18px]  font-bold">Gradient Graphic T-shirt</h1>
            <p className="text-[14px] text-black/60">Size: Large</p>
            <p className="text-[14px] text-black/60">Color: White</p>
            <p className="text-[24px] mt-4 font-bold">$145</p>
        </div>
        <div className="md:w-[225px] w-[100px] items-end space-y-16 h-[124px]">
               <button className="text-[#FF3333] md:ml-28 ml-8"><FaRegTrashAlt size={24} /></button>
               <button className="flex justify-center items-center md:gap-8 gap-4 bg-slate-200  md:w-[126px] w-[100px] h-[44px] text-3xl  rounded-[62px]">
                           <p className="md:text-6xl text-3xl mb-4">-</p>  
                           <p className="">1</p>  
                           <p className="">+</p>  
                           </button>
           </div>
        </div>
        </div>

<hr className='w-[667px] h-[2px] bg-gray-200 m-2 my-5'/>
{/* div 2 */}
<div className="flex m-3 md:justify-start justify-center items-center">
         
         <Image src="/images/arrival3.png" alt='' width={120} height={120} className='rounded-[20px]' />
          <div className="flex justify-center md:gap-60  items-center m-3 "> 
           <div className="w-[227px]   h-[124px]">
               <h1 className="text-[18px]  font-bold">CHECKERED SHIRT</h1>
               <p className="text-[14px] text-black/60">Size: Medium</p>
               <p className="text-[14px] text-black/60">Color: Red</p>
               <p className="text-[24px] mt-4 font-bold">$180</p>
           </div>
           <div className="md:w-[225px] w-[100px] items-end space-y-16 h-[124px]">
               <button className="text-[#FF3333] md:ml-28 ml-8"><FaRegTrashAlt size={24} /></button>
               <button className="flex justify-center items-center md:gap-8 gap-4 bg-slate-200  md:w-[126px] w-[100px] h-[44px] text-3xl  rounded-[62px]">
                           <p className="md:text-6xl text-3xl mb-4">-</p>  
                           <p className="">1</p>  
                           <p className="">+</p>  
                           </button>
           </div>
           </div>
           </div>
           <hr className='w-[667px] h-[2px] bg-gray-200 m-2 my-5'/>


           {/* div 3 */}
<div className="flex m-3 md:justify-start justify-center items-center">
         
         <Image src="/images/arrival2.png" alt='' width={120} height={120} className='rounded-[20px]' />
          <div className="flex justify-center md:gap-60 items-center m-3 "> 
           <div className="w-[227px]  h-[124px]">
<h1 className="text-[18px]  font-bold">SKINNY FIT JEANS</h1>
               <p className="text-[14px] text-black/60">Size: Large</p>
               <p className="text-[14px] text-black/60">Color: Blue</p>
               <p className="text-[24px] mt-4 font-bold">$240</p>
           </div>
           <div className="md:w-[225px] w-[100px] items-end space-y-16 h-[124px]">
               <button className="text-[#FF3333] md:ml-28 ml-8"><FaRegTrashAlt size={24} /></button>
               <button className="flex justify-center items-center md:gap-8 gap-4 bg-slate-200  md:w-[126px] w-[100px] h-[44px] text-3xl  rounded-[62px]">
                           <p className="md:text-6xl text-3xl mb-4">-</p>  
                           <p className="">1</p>  
                           <p className="">+</p>  
                           </button>
           </div>
           </div>
           </div>
    </div>
    
    </div>
    </div>


{/* right side */}

<div className="md:w-[505px] w-auto  h-[458px] border-[1px] border-gray-200 rounded-[20px]">
<h1 className="w-[179px] h-[32px] mx-8 mt-8 font-bold text-3xl">Order Summary</h1>
<div className="md:w-[475px] w-auto h-[193px] p-12">
    <div className="space-y-8">

    <div className="flex justify-between items-center ">
        <h3 className="text-2xl text-black/60">SubTotal</h3>
        <p className=" text-2xl font-bold ">$565</p>
    </div>
   
    <div className="flex justify-between items-center ">
        <h3 className="text-2xl text-black/60">Discount (-20%)</h3>
        <p className=" text-2xl font-bold text-[#FF3333] "> -$113</p>
    </div>
    <div className="flex justify-between items-center">
        <h3 className="text-2xl text-black/60">Delivery Fee</h3>
        <p className=" text-2xl font-bold ">$15</p>
    </div>
    <hr className='md:w-[400px] w-auto h-[2px] bg-gray-200'/>
    <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-black">Total</h3>
        <p className=" text-2xl font-bold ">$467</p>
    </div>
    </div>
    <div className="h-[48px] flex  gap-2 my-8">
<button className="md:w-[326px] w-auto  h-[48px] border-[1px] border-gray-200 rounded-[20px] text-black/60 bg-gray-200 hover:bg-black hover:text-white flex justify-start items-center gap-5 text-xl px-3"><GoTag size={20}/> Add promo code</button>
<button className="w-[119px] h-[48px] border-[1px] border-gray-200 rounded-[20px] text-black/60 bg-gray-200 hover:bg-black hover:text-white flex justify-start items-center gap-5 text-xl px-3">Apply</button>
    </div>
<button className="w-full  h-[60px] border-[1px] border-gray-200 rounded-[20px] text-black/60 bg-gray-200 hover:bg-black hover:text-white flex justify-center items-center gap-5 text-xl ">Go to Checkout<FaArrowRight /></button>
    
    
</div>


</div>

</div>

</div>




       


   
  )
}

export default Cart