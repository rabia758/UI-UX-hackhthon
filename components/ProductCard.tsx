import Image from "next/image"



export default function ProductCard({ tittle, src, rating, price, discount = true }: { tittle: string, src: string, rating: number, price: number, discount?: boolean }) {
    return (
        <>
            <div className="h-auto w-auto  md:w-[260px] mx-8  md:h-[444px] ">
                <div className="  h-auto w-auto md:h-[295px] md:w-[260px] rounded-4xl ">
                    <Image src={src} alt="" height={300} width={300} className="rounded-[20px]" />
                </div>
                <div className="flex  flex-col justify-between mb-8 md:h-[110px]">
                    <div className="h-[27px] w-[260px] font-semibold text-[16px]">{tittle}</div>
                    {rating && <div className="flex gap-1">⭐⭐⭐⭐⭐
                        <p>{rating} /<span className="text-[16px] text-[#00000099]">5</span></p>

                    </div>}
                    <div className=" md:mt-1 flex justify-start items-center gap-1"><p className="font-semibold  text-[20px]">${price}</p>

                        {discount && <p className=" text-[20px] text-[#00000066]"> $242
                            <span className="ml-2  hidden rounded-[20px] pl-2 w-[72px] bg-[#FF33331A]  text-[#FF3333] text-[18px]">
                                -20%

                            </span>
                            </p>}
                    </div>
                </div>
            </div>





        </>
    )
}