import React, { useContext, useState, useEffect } from 'react'
import { getCategories } from '../services'

import Link from 'next/link'

function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-white py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-5xl font-bold text-white">
              Perang Dunia: Projek SEBAYU
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle text-xl font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
