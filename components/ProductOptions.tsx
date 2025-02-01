"use client";

import { Products } from "@/sanity.types";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

const ProductOptions = ({ product }: { product: Products }) => {
  // State to track selected color and size
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className=" ml-4 mt-20  md:mt-[120px]">
      {/* Select Color */}
      <h1 className="w-[93px] h-[11px] text-[16px] text-[#00000099] mb-8 ml-4">Select Colors</h1>
      <div className="flex gap-4 mt-4">
        {product.colors?.map((color: string, index: number) => (
          <button
            key={index}
            className={`w-[37px] h-[37px] rounded-full flex justify-center items-center border-black border-[1px] ${
              selectedColor === color ? "border-black text-pink-700 " : "border-[1px] border-black"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          >
            {selectedColor === color && <TiTick size={20} />}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-b border-gray-300 my-6"></div>

      {/* Select Size */}
      <h1 className="w-[93px] h-[11px] text-[16px] text-[#00000099] my-4 ml-4">Choose Size</h1>
      <div className="flex gap-2 mt-4">
        {product.sizes?.map((size: string, index: number) => (
          <button
            key={index}
            className={`px-4 py-2  text-sm md:w-[86px] h-[46px] w-[75px] rounded-[62px] bg-[#F0F0F0] text-[#00000099] ${
              selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductOptions;
