import Image from "next/image"
import { TiTick } from "react-icons/ti"
export default function Review() {

    return (
        <>
        <div className="flex md:justify-between flex-wrap ">
            <div className="flex   lg:ml-[20px] md:ml-[12px] sm:ml-[20px]">
                <h2 className="md:h-[32px] sm:h-auto md:w-[150px] sm:pl-[10px] sm:w-auto mt-[20px]  ml-[75px] sm:text-[20px] md:text-[24px] font-700 text-[24px]">All Reviews</h2>
                <p className="w-[33px] h-[11px] mt-[25px]  sm:text-[14px] pt-1 text-[16px]">(451)</p>
            </div>
            <div className="flex gap-1 w-[300px] mt-2 mr-[25px]  sm:ml-[50px] md:ml-[100px] h-[40px]">
                <div>
                    <Image src={"/images/10.png"} height={100} width={100} alt="frame-19" className="w-[70px] sm:w-[40px] h-[55px] mt-1 rounded-[68px]  pl-[15px] pr-[5px] pt-[12px] pb-[12px] text-[#F0F0F0]"></Image>
                </div>
                <div className="md:w-[85px] mt-3 sm:w-auto sm:h-auto md:h-[40px]  items-center rounded-[62px] bg-[#F0F0F0] pl-[20px] pr-[20px] pt-16px] pb-[16px]">
                    <p className="md:h-[22px] md:w-[30px] pt-2 font-500 text-[16px] text-[#000000]">Latest</p>
                </div>

                <div className="md:h-[40px] mt-2 sm:h-auto sm:w-auto md:w-[130px] bg-[#000000]  rounded-[62px] pl-[20px] pr-[20px] pt-[3px] pb-[5px]">
                
                <button className="md:w-[90px] sm:w-auto pt-2 md:h-[25px] text-[#FFFFFF] text-[12px] ">Write a Review</button>
                </div>
            </div>

        </div>

            <div className="grid gap-1  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
                <div className=" sm:flex-col md:h-[210px] sm:w-[260px] sm:h-[310px]  md:w-[570px] mt-[20px] md:ml-[60px] sm:ml-[10px]  rounded-[20px]  border-[1px] pl-[32px] pt-[28px] pb-[28px] pr-[32px] gap-[342px]">
                    <div className="w-full h-auto justify-between items-center">
                        <div className=" gap-[6.49px]">⭐⭐⭐⭐⭐</div>
                        <div>
                            <div className="flex justify-start mt-2">
                                <h2 className="w-[130px]  h-[15px] text-[#000000] font-[700] text-[20px] ">Samantha D. </h2>
                                <div className="w-7 h-7 rounded-full bg-[#01AB31] flex justify-center items-center mt-2 text-white"><TiTick size={20} /></div>
                            </div>
                            <p className="md:w-[522px] sm:w-[200px] md:h-[66px] font-normal text-[16px]  text-[#00000099] mt-2">I absolutely love this t-shirt!
                                 The design is unique and the fabric feels so comfortable.
                                 As a fellow designer,
                                 I appreciate the attention to detail.
                                  It is become my favorite go-to shirt.</p>
                        </div>
                    </div>
                    <p className="w-[546px] h-[22px] font-[500] text-[16px] text-[#00000099]">Posted on August 14, 2023</p>
                </div>


                <div className="    md:h-[210px] sm:h-[310] md:w-[570px] sm:w-[260px] mt-[20px] ml-[18px]   rounded-[20px]  border-[1px] pl-[32px] pt-[28px] pb-[28px]  pr-[32px] gap-[342px]">
                    <div className="w-full h-auto justify-between">
                        <div className="w-[127px] h-[22.58px]  gap-[6.49px]">⭐⭐⭐⭐⭐</div>
                        <div>
                            <div className="flex justify-start mt-2">
                                <h2 className="w-[80px]  h-[15px] text-[#000000] font-[700] text-[20px] ">Alex M. </h2>
                                <div className="w-7 h-7 rounded-full bg-[#01AB31] flex justify-center items-center mt-2 text-white"><TiTick size={20} /></div>
                            </div>
                            <p className="md:w-[522px] md:h-[66px] sm:w-[200px] font-normal text-[16px]  text-[#00000099] mt-2 ">The t-shirt exceeded my expectations! 
                                The colors are vibrant and the print quality is top-notch. 
                                 Being a UI/UX designer myself, I m quite picky about aesthetics, 
                                  and this t-shirt definitely gets a thumbs up from me.</p>
                        </div>
                    </div>
                    <p className="w-[546px] h-[22px] font-[500] text-[16px] text-[#00000099]">Posted on August 15, 2023</p>
                </div>

                <div className="  md:h-[210px] md:w-[570px] sm:h-[310px] sm:w-[260px] mt-[10px] md:ml-[60px]  rounded-[20px]  border-[1px] pl-[32px] pt-[28px] pb-[28px]  pr-[32px] gap-[342px]">
                    <div className="h-auto w-full justify-between">
                        <div className="w-[127px] h-[22.58px]  gap-[6.49px]">⭐⭐⭐⭐⭐</div>
                        <div>
                            <div className="flex justify-start mt-2">
                                <h2 className="w-[78px]  h-[15px] text-[#000000] font-[700] text-[20px] ">Ethan R. </h2>
                                <div className="w-7 h-7 rounded-full bg-[#01AB31] flex justify-center items-center mt-2 text-white"><TiTick size={20} /></div>
                            </div>
                            <p className="md:w-[522px] md:h-[66px] sm:w-[200px] font-normal text-[16px]  text-[#00000099] mt-2">
                                This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designers touch in every aspect of this shirt.
                            </p>
                        </div>
                        <p className="w-[546px] h-[22px] font-[500] text-[16px] text-[#00000099]">Posted on August 16, 2023</p>
                    </div>
                </div>

                <div className="   md:h-[210px] md:w-[570px] sm:w-[260px] sm:h-[310px] mt-[10px] ml-[18px]   rounded-[20px]  border-[1px] pl-[32px] pt-[28px] pb-[28px]  pr-[32px] gap-[342px]">
                    <div className="h-auto w-auto justify-between">
                        <div className="w-[127px] h-[22.58px]  gap-[6.49px]">⭐⭐⭐⭐⭐</div>
                        <div>
                            <div className="flex justify-start mt-2">
                                <h2 className="w-[75px]  h-[17px] text-[#000000] font-[700] text-[20px] ">Olivia P. </h2>
                                <div className="w-7 h-7 rounded-full bg-[#01AB31] flex justify-center items-center mt-2 text-white"><TiTick size={20} /></div>
                            </div>
                            <p className="md:w-[522px] md:h-[66px] font-normal text-[16px]  text-[#00000099] mt-2 ">As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It is evident that the designer poured their creativity into making this t-shirt stand out.</p>
                        </div>
                    </div>
                    <p className="w-[546px] h-[22px] font-[500] text-[16px] text-[#00000099]">Posted on August 17, 2023</p>
                </div>


                <div className="  sm:w-[260px] sm:h-[310px] md:h-[210px] md:w-[570px] mt-[10px] md:ml-[60px]   rounded-[20px]  border-[1px] pl-[32px] pt-[28px] pb-[28px]  pr-[32px] gap-[342px]">
                    <div className="h-auto w-full justify-between">
                        <div className="w-[127px] h-[22.58px]  gap-[6.49px]">⭐⭐⭐⭐⭐</div>
                        <div>
                            <div className="flex justify-start mt-2">
                                <h2 className="w-[70px]  h-[15px] text-[#000000] font-[700] text-[20px] ">Liam K. </h2>
                                <div className="w-7 h-7 rounded-full bg-[#01AB31] flex justify-center items-center mt-2 text-white"><TiTick size={20} /></div>
                            </div>
                            <p className="md:w-[522px] md:h-[66px] font-normal text-[16px]  text-[#00000099] mt-2 ">This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designers skill. Its like wearing a piece of art that reflects my passion for both design and fashion.</p>
                        </div>
                    </div>
                    <p className="w-[546px] h-[22px] font-[500] text-[16px] text-[#00000099]">Posted on August 18, 2023</p>
                </div>


                <div className="   sm:h-[310px] md:h-[210px] sm:w-[260px] md:w-[570px] mt-[10px] ml-[18px]   rounded-[20px]  border-[1px] pl-[32px] pt-[28px] pb-[28px]  pr-[32px] gap-[342px]">
                    <div className="w-auto h-auto justify-between">
                        <div className="w-[127px] h-[22.58px]  gap-[6.49px]">⭐⭐⭐⭐⭐</div>
                        <div>
                            <div className="flex justify-start items-center mt-2">
                                <h2 className="w-[70px]  h-[15px] text-[#000000] font-[700] text-[20px] ">Ava H..</h2>
                                <div className="w-7 h-7 rounded-full bg-[#01AB31] flex justify-center items-center mt-2 text-white"><TiTick size={20} /></div>
                                
                            </div>
                            <p className="md:w-[522px] md:h-[66px] font-normal text-[16px]  text-[#00000099] mt-2 ">I am not just wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.</p>
                        </div>
                    </div>
                    <p className="w-[546px] h-[22px] font-[500] text-[16px] text-[#00000099]">Posted on August 19, 2023</p>
                </div>
            </div>

            <div className=" sm:h-[27px] sm:w-[120px] md:w-[250px]  md:h-[52px] flex justify-center items-center mt-[20px] md:ml-[510px] border-[1px] rounded-[62px] pl-[54px] pr-[54px] pt-[16px] pb-[16px] gap-[12px">

                <button className="sm:w-[50px] sm:h-[13px] md:w-[150px] md:h-[22px] text-[16px] font-500 text-[#000000]">Load More Reviews</button>
            </div>











        </>

    )
}