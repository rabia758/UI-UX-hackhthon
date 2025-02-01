
import Link from "next/link";

import { FaSearch } from "react-icons/fa";

// import CartIcon from "./CartIcon";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import CartIcon from "./CartIcon";

  

export default async function Navbar() {
  
  return (

 
    <nav className="wrapper   mb-12 h-[40px] bg-white shadow-sm md:p-6 p-1">
      <div className="  px-2">
        <div className="flex md:items-center items-start justify-between  h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="sm:text-4xl text-3xl md:text-5xl font-extrabold">
            SHOP.CO 
            </Link>
          </div>
<div className="md:flex hidden">
    <ul className="text-lg flex justify-center cursor-pointer items-center gap-4">



    <Link href="/product">  <li className="flex justify-center hover:underline hover:text-2xl hover:font-semibold items-center gap-2"> Shop </li></Link>
        <li className="hover:underline hover:text-2xl hover:font-semibold"><Link href="/sale"> On Sale</Link></li>
        <li className="hover:underline hover:text-2xl hover:font-semibold"><Link href="/arrival"> New Arrivals</Link></li>
        <li className="hover:underline hover:text-2xl hover:font-semibold"><Link href="/brands"> Brands</Link></li>
        
    </ul>
</div>
         

          {/* Search and Icons */}
          <div className="flex items-center sm:space-x-4 space-x-1">
            {/* Search Bar - hidden on mobile */}
            <Link href="/search">
            <form action="/search" className="hidden md:flex items-center w-[577px] gap-5 h-[48px] py-4 px-10 border-[1px] border-gray-300 bg-gray-100 rounded-[50px] ">
                <FaSearch size={20} className="text-black/40   font-semibold" />
              <input
                 type="text"
                 name="query"
                 placeholder="Search for products..."
                 className="bg-transparent text-[16px]  outline-none w-48 lg:w-64"
                 />
            </form>
                 </Link>
                 <Link href="/cart">
               <CartIcon />
             </Link>

            {/* Icons */}
            <Link href="/search">
            <form action="/search"  className="flex ml-6 text-2xl md:text-4xl items-center space-x-3 sm:space-x-8">
                <FaSearch className="md:text-black/40 md:hidden text-black  font-semibold" />
  
             
            </form>
</Link>
            {/* Mobile menu button */}
            <div className="md:hidden ">
           
                 
            <Sheet>
  <SheetTrigger><IoMenu size={24}/></SheetTrigger>
  <SheetContent className="bg-white">
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <div className="flex justify-center items-center mt-20">
            <Link href="/" className="text-4xl  md:text-5xl font-extrabold">
            SHOP.CO 
            </Link>
          </div>
<div className="flex justify-center items-center">
    <ul className="text-lg flex flex-col justify-center  space-y-8 mt-8 cursor-pointer items-center gap-4">



    <Link href="/product">  <li className="flex justify-center hover:underline hover:text-2xl hover:font-semibold items-center gap-2"> Shop </li></Link>
        <li className="hover:underline hover:text-2xl hover:font-semibold"><Link href="/sale"> On Sale</Link></li>
        <li className="hover:underline hover:text-2xl hover:font-semibold"><Link href="/arrival"> New Arrivals</Link></li>
        <li className="hover:underline hover:text-2xl hover:font-semibold"><Link href="/brands"> Brands</Link></li>
        
    </ul>
</div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
           
                  
           

     
  
  
            
           
          </div>
            </div>
          </div>
        </div>
     
      {/* Horizontal divider for mobile */}
      <div className=" h-px bg-gray-200 my-4"></div>
    </nav>
   
  );
}
