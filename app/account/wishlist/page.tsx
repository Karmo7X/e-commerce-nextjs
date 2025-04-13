import { Heart } from 'lucide-react'
import Link from 'next/link'
import Productcard from '@/app/_components/Product/Productcard'
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'

// Mock data - In a real app, this would come from your database
const wishlistItems = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480",
    category: "Clothing",
    slug: "premium-cotton-tshirt",
    description: "High-quality cotton t-shirt for everyday wear",
    items: 1,
    inStock: true
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1480",
    category: "Outerwear",
    slug: "classic-denim-jacket",
    description: "Timeless denim jacket for any occasion",
    items: 1,
    inStock: true
  },
  {
    id: 3,
    name: "Sport Performance Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1480",
    category: "Activewear",
    slug: "sport-performance-hoodie",
    description: "Comfortable hoodie for sports and casual wear",
    items: 1,
    inStock: false
  },
  {
    id: 4,
    name: "Vintage Leather Boots",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1543163521-1bfeb4d1b1a5?q=80&w=1480",
    category: "Footwear",
    slug: "vintage-leather-boots",
    description: "Classic leather boots with vintage styling",
    items: 1,
    inStock: true
  },
  {
    id: 5,
    name: "Casual Sneakers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1480",
    category: "Footwear",
    slug: "casual-sneakers",
    description: "Comfortable sneakers for everyday wear",
    items: 1,
    inStock: true
  }
]

async function getWishlistItems() {
  // In a real app, you would fetch this from your database
  // const userId = cookies().get('userId')?.value
  // if (!userId) redirect('/login')
  // const items = await db.wishlist.findMany({ where: { userId } })
  return wishlistItems
}

export default async function WishlistPage() {
  const items = await getWishlistItems()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Wishlist</h1>
          <p className="text-gray-600">Save your favorite items for later</p>
        </div>

        {/* Wishlist Items */}
        {items.length > 0 ? (
          <Productcard products={items} title="Wishlist Products" description="Wishlist products from your favorite brands" sortBy="Sort by: Newest" filter="Filter" />
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8">Start adding items to your wishlist to save them for later</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
