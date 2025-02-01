import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import {  IoIosFunnel } from "react-icons/io"; // Filter icon import
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; // ShadCN components

interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: [number, number];
  setPriceRange: (priceRange: [number, number]) => void;
}

type Category = string;
type Color = string;
type Size = string;

const Filter = ({
  selectedCategory,
  setSelectedCategory,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
  priceRange,
  setPriceRange,
}: FilterProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);

  // const [expandedSections, setExpandedSections] = useState<{
  //   price: boolean;
  //   colors: boolean;
  //   sizes: boolean;
  // }>({
  //   price: true,
  //   colors: true,
  //   sizes: true,
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryQuery = '*[_type == "products"]{category}';
        const categoriesData = await client.fetch<{ category: string }[]>(categoryQuery);
        const uniqueCategories = [...new Set(categoriesData.map((item) => item.category))];
        setCategories(uniqueCategories);

        const colorQuery = '*[_type == "products"]{colors}';
        const colorsData = await client.fetch<{ colors: string[] }[]>(colorQuery);
        const allColors = colorsData.flatMap((item) => item.colors);
        const uniqueColors = [...new Set(allColors)];
        setColors(uniqueColors);

        const sizeQuery = '*[_type == "products"]{sizes}';
        const sizesData = await client.fetch<{ sizes: string[] }[]>(sizeQuery);
        const allSizes = sizesData.flatMap((item) => item.sizes);
        const uniqueSizes = [...new Set(allSizes)];
        setSizes(uniqueSizes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleColorClick = (color: Color) => {
    setSelectedColors((prev: string[]) => {
      return prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color];
    });
  };

  const handleSizeClick = (size: Size) => {
    setSelectedSizes((prev: string[]) => {
      return prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size];
    });
  };

  return (
    <div className=" w-1/5 h-full p-5 sticky top-0 border border-gray-300">
      {/* Mobile Dropdown Trigger (Filter Icon) */}
      <div className="block md:hidden">
        
          <DropdownMenu>
          <DropdownMenuTrigger className="p-2 rounded-md bg-gray-300 cursor-pointer">
            <IoIosFunnel size={24} />
          </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white p-4 shadow-md">
              {/* Category Filter */}
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">Category</h3>
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`cursor-pointer mb-3 ${selectedCategory === category ? "text-black font-semibold" : "text-gray-600"}`}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </div>

              {/* Price Filter */}
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">Price</h3>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-lg font-semibold">
                  <p>${priceRange[0]}</p>
                  <p>${priceRange[1]}</p>
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">Colors</h3>
                <div className="grid grid-cols-3 gap-2">
                  {colors.map((color) => (
                    <div
                      key={color}
                      onClick={() => handleColorClick(color)}
                      className={`w-8 h-8 rounded-full cursor-pointer border ${selectedColors.includes(color) ? "ring-2 ring-black" : ""}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`px-4 py-2 rounded-lg mb-2 ${selectedSizes.includes(size) ? "bg-black text-white" : "bg-gray-200"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
       
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Category</h3>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer mb-3 ${selectedCategory === category ? "text-black font-semibold" : "text-gray-600"}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-lg font-semibold">
            <p>${priceRange[0]}</p>
            <p>${priceRange[1]}</p>
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Colors</h3>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => handleColorClick(color)}
                className={`w-8 h-8 rounded-full cursor-pointer border ${selectedColors.includes(color) ? "ring-2 ring-black" : ""}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Sizes</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`px-4 py-2 rounded-lg mb-2 ${selectedSizes.includes(size) ? "bg-black text-white" : "bg-gray-200"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
