import React from 'react'
import Image from 'next/image'

const Dress = () => {
  return (
    <div className='md:w-[1200px] w-auto mx-auto space-y-10 rounded-[20px] md:h-[850px] h-auto mt-10 bg-[#F0F0F0] my-[120px]'>
       <div className=" flex justify-center items-center  ">
         <h1 className="font-extrabold md:text-left text-center text-6xl mt-12 p-8 ">BROWSE BY DRESS STYLE</h1>
        </div>
<div className="flex md:flex-row flex-col justify-center gap-8 ">
    <Image src="/images/dress.1.png" alt='img' width={300} height={300} className='w-full md:hover:w-[350px] md:w-[300px] '/>
    <Image src="/images/dress2.png" alt='img' width={700} height={300} className='w-full md:hover:w-[750px] md:w-[700px]'/>
</div>
<div className="flex md:flex-row flex-col  justify-center gap-8 ">
    <Image src="/images/dress3.png" alt='img' width={700} height={300} className='w-full md:hover:w-[750px] md:w-[700px] '/>
    <Image src="/images/dress4.png" alt='img' width={300} height={300} className='w-full md:hover:w-[350px] md:w-[300px]'/>
</div>
    </div>
  )
}

export default Dress