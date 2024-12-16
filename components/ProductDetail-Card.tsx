import { ReactNode } from "react";

export default function ProductDetailsCard ({children}:{children:ReactNode}){
    return(
        <div>

<h1 className="md:w-[579px] md:h-[58px] md:mt-[40px] mt-20 md:ml-[431px] sm:w-[300px] sm:h-[28px] font-extrabold  text-[48px]">YOU MIGHT ALSO LIkE</h1>

<div className="wrapper mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  xl:grid-cols-4">
   
    
       {children}
    </div>

</div>

)}