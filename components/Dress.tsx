import React from 'react';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/live';
import { ItemQuery, FirstQuery, SecondQuery, ThirdQuery } from '@/sanity/lib/quires';
import { Products } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const Dress = async () => {
  try {
    // Fetch products
    const result = await sanityFetch({ query: ItemQuery });
    const result1 = await sanityFetch({ query: FirstQuery });
    const result2 = await sanityFetch({ query: SecondQuery });
    const result3 = await sanityFetch({ query: ThirdQuery });

    // Safely typecast results
    const product = (Array.isArray(result?.data) ? result.data : [])as unknown as Products[];
    const firstProduct = (Array.isArray(result1?.data) ? result1.data : []) as unknown as Products[];
    const secondProduct = (Array.isArray(result2?.data) ? result2.data : []) as unknown as Products[];
    const thirdProduct = (Array.isArray(result3?.data) ? result3.data : []) as unknown as Products[];

    // Get the first product from each result array (if available)
    const productImage = product[1]?.image;
    const firstProductImage = firstProduct[1]?.image;
    const secondProductImage = secondProduct[2]?.image;
    const thirdProductImage = thirdProduct[2]?.image;

    return (
      <div className="md:w-[1200px] w-auto mx-auto space-y-10 rounded-[20px] h-auto mt-10 bg-[#F0F0F0] my-[120px]">
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold md:text-left text-center text-6xl mt-12 p-8">BROWSE BY DRESS STYLE</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* First category */}
          <Link href="/category/T-Shirt"> 
          <div className=" flex flex-col items-center justify-center p-4 mb-6 bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h2 className="text-center font-semibold text-[12px] md:text-[24px] mb-4">T-SHIRT&#39;S</h2>
            {productImage && (
              <Image
                src={urlFor(productImage).url() || '/images/fallback.jpg'}
                alt="First Product"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
          </Link>

          {/* Second category */}
          <Link href="/category/Hoodie"> 
          <div className=" flex flex-col items-center justify-center p-4 mb-6 bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h2 className="text-center font-semibold text-[12px] md:text-[24px] mb-4">HOODIE&#39;S</h2>
            {secondProductImage && (
              <Image
                src={urlFor(secondProductImage).url() || '/images/fallback.jpg'}
                alt="Second Product"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
          </Link>

          {/* Third category */}
          <Link href="/category/Jeans"> 
          <div className=" flex flex-col items-center justify-center p-4 mb-6 bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h2 className="text-center font-semibold text-[12px] md:text-[24px] mb-4">JEAN&#39;S</h2>
            {firstProductImage && (
              <Image
                src={urlFor(firstProductImage).url() || '/images/fallback.jpg'}
                alt="First Product"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
          </Link>

          {/* Fourth category */}
          <Link href="/category/Shirts"> 
          <div className=" flex flex-col  items-center justify-center p-4 mb-6 bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h2 className="text-center font-semibold text-[12px] md:text-[24px] mb-4">SHIRT&#39;S</h2>
            {thirdProductImage && (
              <Image
                src={urlFor(thirdProductImage).url() || '/images/fallback.jpg'}
                alt="Third Product"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p>Error loading items. Please try again later.</p>;
  }
};

export default Dress;
