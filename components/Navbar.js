import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center">
        <div className="logo">
            <Link href={'/'}><a><Image src='/navlogo.png' width={200} height={70}/></a></Link>
            </div>
            <div className="nav ">
                <ul className='flex items-center space-x-6 font-bold md:text-md py-2 shadow-xl'>
                    <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
                    <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
                    <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
                    <Link href={'/mugs'}><a><li>Mugs</li></a></Link>  
                    <Link href={'/login'}>Sign in</Link>
                </ul>
            
        </div>
        <div className="cart absolute mx-5 right-0 top-4">
            <AiOutlineShoppingCart className="text-2xl"/>
        </div>
        <div className='sidebar absolute top-0 right-0 p-10 bg-pink-100'>
          <h2 className='font-bold text-xl'>Shopping Cart</h2>
          <span className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle/></span>
          <ol>
            <li><span>Tshirt- Wear the code</span></li>
          </ol>
        </div>
    </div>
  )
}

export default Navbar
