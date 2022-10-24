/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProductItem = ({image,brand,category,size,price}) => {
  return (
    <div>
        
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg object-contain object-center h-[56vh] w-full" src={image} alt=""/>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <h5>{category}</h5>
            <h5>{size}</h5>
            <h5>{price}</h5>
        </p>
        
    </div>
</div>

    </div>

  )
}

export default ProductItem
