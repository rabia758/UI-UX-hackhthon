import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";


   export const allProducts = defineQuery(`*[_type == "products"]{
      _id,
      name,
      price,
      slug,
      description,
      "image": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes
    }`
   )
   export const arrivals = defineQuery(`*[_type == "products"][0..3]{
      _id,
      name,
      price,
      slug,
      description,
      "image": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes
    }`
   )
   export const selling = defineQuery(`*[_type == "products"][4..7]{
      _id,
      name,
      price,
      slug,
      description,
      "image": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes
    }`
   )
   export const ItemQuery = defineQuery(`*[_type == "products" && category == "tshirt"]{
  _id,
      name,
      price,
      slug,
      description,
      "image": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes
}`);
   export const FirstQuery = defineQuery(`*[_type == "products" && category == "jeans"]{
  _id,
      name,
      price,
      slug,
      description,
      "image": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes
}`);
   export const SecondQuery = defineQuery(`*[_type == "products" && category == "hoodie"]{
  _id,
      name,
      price,
      slug,
      description,
      "image": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes
}`);
   export const ThirdQuery = defineQuery(`*[_type == "products" && category == "shirt"]{
  _id,
      name,
      price,
      slug,
      description,
      "image": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes
}`);

export const getAllProducts = async () => {
   const PRODUCTS_QUERY = defineQuery(`*[_type=="products"] | order(name asc)`);
   try {
     const products = await sanityFetch({
       query: PRODUCTS_QUERY,
     });
     return products.data || [];
   } catch (error) {
     console.log("Error fetching all products:", error);
     return [];
   }
 };