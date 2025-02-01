import {  Products } from "@/sanity.types";
import React from "react";
import ProductGrid from "@/components/ProductGrid";

interface Props {
  products: Products[];

  title?: boolean;
}
const ProductList = ({ products,  title }: Props) => {
  return (
    <div>
 
      {title && (
        <div className="pb-5">
          <h2 className="text-2xl font-semibold text-gray-600">
            Day of the <span className=" text-pink-600">Deal</span>
          </h2>
          <p className="text-sm text-gray-500 font-thin">
            Don&rsquo;t wait. The time will never be just right.
          </p>
        </div>
      )}

      <ProductGrid products={products} />
    </div>
  );
};

export default ProductList;