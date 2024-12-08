'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  isNew?: boolean
  isSale?: boolean
}

export default function ProductCard({ id, title, price, image, isNew, isSale }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({ id, title, price, image })
  }

  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        {isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            New
          </div>
        )}
        {isSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4">
        <Link href={`/products/${id}`}>
          <h3 className="text-sm text-gray-700">{title}</h3>
        </Link>
        <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
      </div>
    </div>
  )
}

