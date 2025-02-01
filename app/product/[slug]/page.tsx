// ProductPage.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "@/components/AddToCartButton";


import Image from "next/legacy/image";



import ProductThumbnail from "@/components/ProductThumbnail";

import ProductCard from "@/components/ProductCard";

import { Products } from "@/sanity.types";
import { getAllProducts } from "@/sanity/lib/quires";
import ProductOptions from "@/components/ProductOptions";
import Slider from "@/components/Slider";
import { PageProps } from "@/.next/types/app/brands/page";


interface ProductDetailsProps extends PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductPage = async ({ params }: ProductDetailsProps) => {
  const products = await getAllProducts();
  // const categories = await getAllCategories();

  const { slug } = await params;

  let product = null;
  try {
    const productQuery = `*[_type == "products" && slug.current == $slug][0]`;
    product = await client.fetch(productQuery, { slug });
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="text-gray-600">
          There was an error fetching the product.
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-600">
          We couldn&#39;t find the product you&#39;re looking for.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex wrapper flex-col md:flex-row gap-4 overflow-hidden py-10">
        <div className="flex md:flex-col flex-row justify-center items-center w-full md:w-1/2">
          {/* Main Image */}
          <div className="border border-gray-300 hover:border-2 hover:border-black rounded-[15px] w-[80%] sm:w-[250px] md:w-[300px] lg:w-[350px] aspect-square cursor-pointer mx-auto">
  {product?.image && (
    <Image
      src={urlFor(product.image).url()}
      alt="productImage"
      width={350}
      height={350}
      layout="intrinsic"
      className="w-full h-full object-contain rounded-[15px]"
    />
  )}
</div>


          {/* Small Images */}
          <div className="flex md:flex-col gap-2 md:mt-4 mt-2">
            <ProductThumbnail product={product} />
          </div>
        </div>

        {/* Product Information */}
        <div className="ml-4 md:ml-5">
          <h2 className="md:w-[600px] sm:w-[300px] h-[48px]  font-extrabold sm:font-500 md:text-[40px] text-[20px] pl-4">
           {product.name}
          </h2>

        

          <div className="flex justify-start mt-4 items-center  gap-2">
            <p className="w-[81px] h-[43px] font-bold ml-2 text-[20px] md:text-[32px] ">
              ${product.price}
            </p>
            <p className="w-[83px] h-[43px] font-medium text-[20px] md:text-[32px] text-red-500 ">
              ${product.discount}
            </p>
            
          </div>

          <p className="md:w-[600px] sm:w-auto sm:pl-2 md:pl-4 md:h-[33px] sm:h-auto  text-[#00000099] mt-4 font-normal  text-[16px]">
           {product.description}
          </p>

          <div className="md:w-[530px] border-[1px] ml-4 md:mt-10 sm:mt-[500px]"></div>

          <ProductOptions product={product} />


          <div className="md:w-[530px] border-[1px] ml-5 mt-8"></div>

          <AddToCartButton product={product} className="md:w-[550px] h-[52px] w-[200px] rounded-[62px] text-lg bg-[#000000] text-[#F0F0F0] hover:bg-white hover:text-black" />
        </div>
      </div>

<div className="mt-[100px] wrapper" >
  
  <Slider  />
</div>
      {/* Related Products */}
      <div className="mt-[120px]">
        <h2 className="text-center my-[50px] font-semibold text-black text-[30px]">
          You may also like
        </h2>

        {/* Ensure the grid is centered and the items are properly spaced */}
        <div className="relative  marquee space-x-12 h-auto overflow-x-auto">
          <div className=" flex flex-nowrap space-x-6   will-change-transform  hover:paused animate-marquee  w-auto">
            {products.map((product: Products) => (
              <div className=" inline-block" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
