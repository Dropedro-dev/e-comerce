import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-beetween z-50 bg-slate-800 text-gray-300'>
        <Link 
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
        >
            next Store
        </Link>
    </nav>
  )
}

export default NavBar