import React from 'react'
import ProductItem from '../components/ProductItem'

const cloth = () => {
  return (
    <div>
      

      <section class="py-10 px-12">
    <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ProductItem image='/dress1.jpg' brand='Yellow' category='Dress' size='Size: M' price='2000'/>
            <ProductItem image='/men casual.jpg' brand='Yellow' category='Dress'size='Size: M' price='2000'/>
            <ProductItem image='/lehenga2.jpg' brand='Yellow' category='Dress' size='Size: M' price='2000'/>
            <ProductItem image='/shirt.jpg' brand='Yellow' category='Dress'size='Size: M' price='2000'/>
            <ProductItem image='/gown1.jpg' brand='Yellow' category='Dress' size='Size: M' price='2000'/>
            <ProductItem image='/suit1.jpg' brand='Yellow' category='Dress' size='Size: M' price='2000'/>
            <ProductItem image='/tshirt.jpg' brand='Yellow' category='Dress'size='Size: M' price='2000'/>
            <ProductItem image='/dress2.jpg' brand='Yellow' category='Dress' size='Size: M' price='2000'/>
       
    </div>
</section>
    </div>
  )
}

export default cloth
