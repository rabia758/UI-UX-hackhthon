import { Products } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/legacy/image";
import React from "react";
import { LuStar } from "react-icons/lu";
// import ProductCartBar from "./ProductCartBar";
import PriceView from "./PriceView";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Products }) => {
  console.log(product)
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden group text-sm">
      <div className="border-b border-b-gray-300  overflow-hidden relative">
        {product?.image && (
          <Link href={`/product/${product.slug?.current }`}>
            <Image
              src={urlFor(product.image).url()}
              alt="productImage"
              width={500}
              height={500}
              loading="lazy"
              className={`w-full max-h-96 object-cover overflow-hidden  transition-transform duration-500 `}
            />
          </Link>
        )}
       
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 font-medium">{product?.category}</p>
          <div className="text-sky-400 flex items-center gap-1">
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
          {product?.name}
        </p>
        <PriceView
          price={product?.price}
          discount={product?.discount}
        
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;