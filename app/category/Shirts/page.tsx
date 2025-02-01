
import { Products } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import {   ThirdQuery } from "@/sanity/lib/quires";
import Image from "next/image";
import Link from "next/link";
import PriceView from "@/components/PriceView";
import AddToCartButton from "@/components/AddToCartButton";
import { LuStar } from "react-icons/lu";

export default async function Arrival() {
    const result = await sanityFetch({ query:ThirdQuery });

  // Assuming Featured returns an array of objects, type cast the response properly
  const products = (Array.isArray(result?.data)
    ? result.data
    : []) as unknown as Products[];

  if (products.length === 0) {
    return <div>No featured products available</div>;
  }


  return (
    <div className="bg-white mt-[120px] mb-[30px] wrapper flex flex-col justify-center  items-center  ">
      <h1 className="text-5xl mb-16 text-black font-extrabold">
     SHIRT&#39;S COLLECTION
      </h1>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border border-gray-300 rounded-lg overflow-hidden group text-sm">
            <div className="border-b border-b-gray-300  overflow-hidden relative">
        {product?.image && (
          <Link href={`/product/${product.slug?.current}`}>
            <Image
              src={urlFor(product.image).url()}
              alt="productImage"
              width={500}
              height={500}
              loading="lazy"
              className={`w-[400px] max-h-96 object-cover overflow-hidden  transition-transform duration-500 `}
            />
          </Link>
        )}
        
      </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 font-medium">{product?.category || "Uncategorized"}</p>
                <div className="text-lightText flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const isLastStar = index === 4;
                    return (
                      <LuStar
                        fill={!isLastStar ? "#fca99b" : "transparent"}
                        key={index}
                        className={`${isLastStar ? "text-gray-500" : "text-orange-200"}`}
                      />
                    );
                  })}
                </div>
              </div>
              <p className="text-base text-gray-600 tracking-wide font-semibold line-clamp-1 capitalize">
                {product?.name || "Product Name Not Available"}
              </p>
              <PriceView price={product?.price} discount={product?.discount || 0} />
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
      <Link href="/product">
    <button className="flex justify-center items-center w-[150px] h-[40px] rounded-[40px] text-xl my-20 border-[1px] hover:bg-black hover:text-white">View All</button>
      </Link>


      
    </div>
  );
}
