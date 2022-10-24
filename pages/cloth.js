import React from 'react'
import ProductItem from '../components/ProductItem'

const cloth = () => {
  return (
    <div>
      

      <section className="py-10 px-12">
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ProductItem image='/dress1.jpg' brand='Yellow' category='Dress' size='Size: M' price='Tk 2000'/>
            <ProductItem image='/lehenga2.jpg' brand='Anzara' category='Lehenga' size='Size: L' price='Tk 5000'/>
            <ProductItem image='/shirt.jpg' brand='Vogue' category='Shirt'size='Size: L' price='Tk 2500'/>
            <ProductItem image='/gown1.jpg' brand='Tahoor' category='Abaya' size='Size: L' price='Tk 3000'/>
            <ProductItem image='/suit1.jpg' brand='Yellow' category='Suit' size='Size: M' price='TK 6000'/>
            <ProductItem image='/dress2.jpg' brand='Aarong' category='Dress' size='Size: S' price='2000'/>
            <ProductItem image='/men casual.jpg' brand='Ecstasy' category='Casual'size='Size: XL' price='Tk 3000'/>
            <ProductItem image='/tshirt.jpg' brand='Vogue' category='Tshirt'size='Size: L' price='Tk 3000'/>

       
    </div>
</section>
    </div>
  )
}

export default cloth
