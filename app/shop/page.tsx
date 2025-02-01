
import ProductList from '@/components/ProductList'
import { getAllProducts } from '@/sanity/lib/quires'
import React from 'react'

const Shop = async () => {
  const products = await getAllProducts()
  return (
    <div className='wrapper'>
<ProductList products={products}/>
    </div>
  )
}

export default Shop