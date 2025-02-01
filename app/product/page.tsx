import ProductList from "@/components/ProductList";

import { getAllProducts } from "@/sanity/lib/quires";

export default async function Page() {
  // Fetch products from Sanity
  const products = await getAllProducts();

  return (
    <div className="">
      <div className="wrapper flex items-center justify-center py-10">
        <ProductList products={products} title={true} />
      </div>
    </div>
  );
}
