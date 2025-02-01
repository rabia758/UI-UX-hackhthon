

// interface Props {
//   searchParams: {
//     query: string;
//   };

import ProductGrid from "@/components/ProductGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

// }
const searchProductsByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(
    `*[_type == "products" && name match $searchParam] | order(name asc)`
  );

  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}`,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by name:", error);
    return [];
  }
};
const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products?.length) {
    return (
      <div className="">
              <div className="flex flex-col items-center justify-normal min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-3">
            No products found for:{" "}
            <span className="text-pink-600">{query}</span>
          </h1>
          <p className="text-gray-600">Try searching with different keywords</p>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="">
      
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">

      <div className="p-8 bg-white rounded-lg shadow-md mt-3">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search results for <span className="text-pink-600">{query}</span>
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
    </div>
  );
};

export default SearchPage;