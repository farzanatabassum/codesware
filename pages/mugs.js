import React from 'react'
import Link from 'next/link'

const Mugs = () => {
  return (
    <div>
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <Link href={'/product/Amazon'}>
        <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer m-5 shadow-lg">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className=" m-auto md:mx-0 block" src="https://m.media-amazon.com/images/I/711wnPsd0cL._AC_SX679_.jpg"/>
        </a>
        <div className="mt-4  text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Mugs</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">RFL</h2>
          <p className="mt-1">$3.00</p>
        </div>
      </div>
      </Link>
       
    </div>
  </div>
</section>
 
    </div>
  )
}

export default Mugs
