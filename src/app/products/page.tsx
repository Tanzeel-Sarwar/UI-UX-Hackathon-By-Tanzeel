import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Layout from "@/components/Layout"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Library Stool Chair",
    price: 99,
    image: "/images/card.png"
  },
  {
    id: "2",
    name: "Luxury Rest Chair",
    price: 129,
    image: "/images/Library-Stool-Chair 1.png"
  },
  {
    id: "3",
    name: "Modern Office Chair",
    price: 149,
    image: "/images/Library-Stool-Chair 3.png"
  },
  {
    id: "4",
    name: "Library Stool Chair",
    price: 99,
    image: "/images/Library-Stool-Chair 4.png"
  },
  {
    id: "5",
    name: "Luxury Rest Chair",
    price: 129,
    image: "/images/Wooden Chair.png"
  },
    {
      id: "6",
      name: "Modern Office Chair",
      price: 149,
      image: "/images/Library-Stool-Chair 6.png"
    },
    {
      id: "7",
      name: "Library Stool Chair",
      price: 99,
      image: "/images/Library-Stool-Chair 7.png"
    },
    {
      id: "8",
      name: "Luxury Rest Chair",
      price: 129,
      image: "/images/card.png"
    },
    {
      id: "9",
      name: "Modern Office Chair",
      price: 149,
      image: "/images/Library-Stool-Chair 5.png"
    },
    {
      id: "10",
      name: "Library Stool Chair",
      price: 99,
      image: "/images/Library-Stool-Chair 1.png"
    },
    {
    id: "11",
    name: "Luxury Rest Chair",
    price: 129,
    image: "/images/Library-Stool-Chair 3.png"
  },
  {
    id: "12",
    name: "Modern Office Chair",
    price: 149,
    image: "/images/Desk Chair.png"
  },
]

const instagramPosts = [
  { image: "/images/Wooden Chair.png", alt: "Wooden Chair" },
  { image: "/images/Library-Stool-Chair 5.png", alt: "Library-Stool-Chair 5" },
  { image: "/images/Library-Stool-Chair 1.png", alt: "Library-Stool-Chair 1" },
  { image: "/images/card.png", alt: "White chair" },
  { image: "/images/Library-Stool-Chair 3.png", alt: "Orange chair" },
  { image: "/images/Desk Chair", alt: "Desk Chair" }
]

export default function Page() {
  return (
    <Layout>
    <div className="min-h-screen bg-white">
      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold mb-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-primary">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6 md:mb-8">
          Or Subscribe To The Newsletter
        </h2>
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Input 
            type="email" 
            placeholder="Email Address..." 
            className="flex-1 bg-white border-gray-200"
          />
          <Button 
            className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 transition-transform duration-300 hover:scale-105"
          >
            SUBMIT
          </Button>
        </div>
      </div>

      {/* Instagram Feed Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6 md:mb-8">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </Layout>
  )
}

