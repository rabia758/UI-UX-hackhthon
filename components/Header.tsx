import React from 'react'
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  return (
    <div className="">
{/* topper */}
    <div className=' bg-black flex justify-center items-center'>
        <div className="wrapper flex justify-center items-center p-2 gap-3 bg-black text-white">
          <div className="flex justify-center  items-center gap-4">
             <h4 className="">
           Sign up and get 20% off to your first order.</h4> 
           <button className="font-semibold underline">
           Sign Up Now
            </button> 
            </div>
            </div>
            <button className="sm:flex hidden mr-20 text-white justify-end items-end">
            <RxCross2 size={20}/>
            </button>
         </div>

         
    </div>
  )
}

export default Header