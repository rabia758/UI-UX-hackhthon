import Image from "next/image"
import Review from "@/components/Review"
import ProductDetailsCard from "@/components/ProductDetail-Card"
import ProductCard from "@/components/ProductCard"
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";



export default function ProductDetails() {
    return (
        <main className="wrapper my-[150px]">
            {/* {/left side/} */}
            <div className=" flex justify-center flex-col md:flex-row items-center gap-4 sm:flex-row ">
                <div className="flex md:flex-col flex-row  rounded-[20px] ">
                    <Image src={"/images/2.png"} height={100} width={100} alt="pic1" className="md:h-[167px] h-auto w-auto md:w-[152px] m-3  rounded-[20px] border-[1px] "></Image>
                    <Image src={"/images/3.png"} height={100} width={100} alt="pic2" className="md:w-[152px] h-auto w-auto md:h-[167px]  m-3  rounded-[20px]"></Image>
                    <Image src={"/images/4.png"} height={100} width={100} alt="pic2" className="md:w-[152px] h-auto w-auto md:h-[167px]  m-3 rounded-[20px] "></Image>
                </div>
                <div className=" ">
                    <Image src={"/images/5.png"} height={400} width={400} alt="pic2" className="md:w-[450px] md:h-[530px]   rounded-[20px]  "></Image>
                </div>
                {/* {/right side/} */}
                <div className="ml-4 md:ml-5">

                    <h2 className="md:w-[600px] sm:w-[300px] h-[48px]  font-extrabold sm:font-500 md:text-[40px] text-[30px] pl-4">One Life Graphic T-shirt</h2>

                    <div className="flex">
                        <div className="flex justify-start gap-3 items-center w-[139px] h-[24.71px] pl-4  mt-2"><FaStar  className="text-[#FFC633]" /><FaStar className="text-[#FFC633]"  /><FaStar className="text-[#FFC633]"  /><FaStar  className="text-[#FFC633]" /><FaStar  className="text-[#FFC633]" /></div>
                        <p className="w-[48px] h-[22px] font-normal text-[16px] mt-2 ">4.5/ <span className="text-[16px] text-[#00000099]">5</span></p>
                    </div>

                    <div className="flex justify-start items-center mt-2 gap-2">
                        <p className="w-[81px] h-[43px] font-bold ml-2 text-[30px] ">$260</p>
                        <p className="w-[83px] h-[43px] font-medium text-[32px] text-[#00000030] ">$300</p>
                        <p className="w-[72px] h-[34px]  text-[16px] bg-[#FF3333]/10  text-center rounded-[62px]  font-500 text-[#FF3333]">-40%</p>
                    </div>

                    <p className="md:w-[600px] sm:w-auto sm:pl-2 md:pl-4 md:h-[33px] sm:h-auto  text-[#00000099] mt-4 font-normal  text-[16px]">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric,
                        it offers superior comfort and style.</p>

                    <div className="md:w-[530px] border-[1px] ml-4 md:mt-10 sm:mt-[500px]"></div>

                    <h1 className="w-[93px] h-[11px] text-[16px] text-[#00000099] mt-4 ml-4">Select Colors</h1>

                    <div className="flex  ml-4 mt-8 w-[143px] h-[37px] gap-[16px]">
                        <p className="w-[37px] h-[37px] bg-[#4F4631]  flex justify-center items-center  rounded-full hover:text-[#FFFFFF]"><TiTick size={20} /></p>
                        <p className="w-[37px] h-[37px] bg-[#314F4A]  flex justify-center items-center rounded-full hover:text-[#FFFFFF]"><TiTick size={20} /></p>
                        <p className="w-[37px] h-[37px] bg-[#31344F]  flex justify-center items-center rounded-full hover:text-[#FFFFFF]"> <TiTick size={20} />  </p>
                    </div>


                    <div className="md:w-[530px] border-[1px] ml-4 mb-4 mt-8"></div>

                    <h1 className="w-[93px] h-[11px] text-[16px] text-[#00000099] mb-8 ml-4">Choose Size</h1>
                    <div className="flex gap-2 ml-4 ">
                        <button className="md:w-[86px] h-[46px] w-[75px] rounded-[62px] bg-[#F0F0F0] text-[#00000099]">Small </button>
                        <button className="md:w-[105px] h-[46px] w-[75px] rounded-[62px] bg-[#F0F0F0] text-[#00000099]">Medium </button>
                        <button className="md:w-[89px] h-[46px] w-[75px] rounded-[62px] bg-[#000000] text-[#F0F0F0]">Large </button>
                        <button className="md:w-[104px] h-[46px] w-[75px] rounded-[62px] bg-[#F0F0F0] text-[#00000099]">X-Large </button>
                    </div>

                    <div className="md:w-[530px] border-[1px] ml-5 mt-8"></div>

                    <div className="flex justify-start gap-3 items-center mt-4">


                       <button className="flex justify-center items-center gap-8 bg-slate-200 md:w-[180px] w-[140px] h-[52px] text-2xl md:text-4xl rounded-[62px]">
                        <p className="text-7xl mb-4">-</p>  
                        <p className="">1</p>  
                        <p className="">+</p>  
                        </button>
                           


                        <button className="md:w-[350px] h-[52px] w-[200px] rounded-[62px] bg-[#000000] text-[#F0F0F0]">Add to Cart </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-evenly md:mt-6">
           
            <p className="md:w-[154px] sm:w-auto sm:h-auto md:h-[20px] mt-[30px] md:ml-[20px] font-normal text-[20px] text-[#00000099]">Product Details</p>
            <p className="md:w-[154px] sm:w-auto sm:h-auto md:h-[14px] mt-[30px] md:ml-[50px] font-500 text-[20px] text-[#000000] ">Rating & Reviews</p>
            <p className="md:w-[47px] sm:w-auto sm:h-auto md:h-[14px] mt-[30px] md:ml-[50px] font-normal text-[20px] text-[#00000099]">FAQS</p>

            </div>

            <div className="md:w-[1150px] border-[1px] mt-[20px] ml-[60px]"></div>


            <Review/>


            <ProductDetailsCard>
                <ProductCard tittle="Polo with Contrast Trims" src="/images/6.png" rating={4.0} price={212} discount={true}/>
                <ProductCard tittle="Gradient Graphic T-shirt" src="/images/7.png" rating={3.5} price={145} discount={false}/>
                <ProductCard tittle="Polo with Tipping Details"  src="/images/8.png" rating={4.5} price={180}  discount={false}/>
                <ProductCard tittle="Black Striped T-shirt"  src="/images/9.png" rating={5.0} price={120} discount={true}/>

            </ProductDetailsCard>
        </main>
    )
}