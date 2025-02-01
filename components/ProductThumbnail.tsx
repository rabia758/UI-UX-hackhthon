// components/ProductThumbnail.tsx
// for slug samll images
"use client";

import Image from "next/legacy/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  image: {
    asset: {
      _ref: string;
    };
  };
}

interface ProductThumbnailProps {
  product: Product;
}

const ProductThumbnail = ({ product }:ProductThumbnailProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex md:flex-row flex-col gap-[10px] md:mt-[20px]">
      {[...Array(4)].map((_, index) => (
        <Image
          key={index}
          src={urlFor(product?.image).url()}
          alt={`Product Thumbnail ${index + 1}`}
          width={70}
          height={70}
          layout="intrinsic"
          style={{
            height: "auto", // Maintain aspect ratio
          }}
          className={`rounded-[8px] bg-[#ebebeb] md:w-[70px] md:h-[70px] w-[40px] h-[40px] cursor-pointer ${
            index === selectedIndex ? "border-[1px] border-black" : ""
          } hover:border-[2px] hover:border-black`}
          onMouseEnter={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  );
};

export default ProductThumbnail;
