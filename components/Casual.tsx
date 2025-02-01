"use client";
import React, { useState, useEffect, useCallback } from "react";
import Filter from "./Filter"; 
import ProductCard from "./ProductCard";
import { client } from "@/sanity/lib/client";
import { Products } from "@/sanity.types";

const Casual = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 500]);
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Wrap fetchProducts with useCallback to prevent recreation on every render
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const query = `*[_type == "products" && 
        (category == "${selectedCategory || ''}" || "${selectedCategory ? '*' : ''}") && 
        price >= ${priceRange[0]} && price <= ${priceRange[1]} && 
        ${selectedColors.length > 0 ? `colors in ${JSON.stringify(selectedColors)}` : 'true'} && 
        ${selectedSizes.length > 0 ? `sizes in ${JSON.stringify(selectedSizes)}` : 'true'}]{
          name, description, price, image, _id
      }`;

      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, selectedColors, selectedSizes, priceRange]); // ✅ Add dependencies here

  // ✅ Now useEffect will only run when filter values change
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="flex">
      {/* Sidebar with Filters */}
      <Filter 
        setSelectedCategory={setSelectedCategory}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
        priceRange={priceRange}
        setPriceRange={setPriceRange} 
        selectedCategory={""}
      />

      {/* Product Grid */}
      <div className="w-4/5 p-5">
        <h1 className="text-2xl font-bold mb-6">Category Products</h1>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Casual;
