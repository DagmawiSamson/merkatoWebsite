import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import ProductCard from '../components/ProductCard'

interface Product {
  name: string
  description: string
  price: string
  image: string
  category: string
  id: string
}

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const products: Product[] = [
    // Food Items
    {
      id: '1',
      name: 'Fried Triangles (Sambusa)',
      description: 'Traditional Ethiopian fried pastries, perfect for snacks',
      price: '$6.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/X87GQr4x3BPunGWxS-mIow/o.jpg',
      category: 'food',
    },
    // Music & DVDs
    {
      id: '2',
      name: 'Ethiopian Music CDs',
      description: 'Wide variety of Ethiopian music CDs and DVDs',
      price: '$12.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/W6eU3xBTFnCN-Eqn2mc3Sw/o.jpg',
      category: 'media',
    },
    // Books
    {
      id: '3',
      name: 'Ethiopian Books',
      description: 'Wide range of books on Ethiopian culture and history',
      price: '$15.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/-GPsLjQYDqoX3Q_l1wQVfA/o.jpg',
      category: 'books',
    },
    // Traditional Clothing
    {
      id: '4',
      name: 'Traditional Hats',
      description: 'Authentic Ethiopian traditional hats',
      price: '$24.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/0ENrx8UKCGFNzJ6lF7_qmQ/o.jpg',
      category: 'clothing',
    },
    // Home Decor
    {
      id: '5',
      name: 'Framed Pictures',
      description: 'Beautiful framed Ethiopian artwork and pictures',
      price: '$29.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/f1vg0Xe75fEyzRuZTelXkg/o.jpg',
      category: 'decor',
    },
    // Cooking Utensils
    {
      id: '6',
      name: 'Cooking Utensils',
      description: 'Wide selection of traditional Ethiopian cooking utensils',
      price: '$19.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/6_LMrVNJD9ThQkDBNfBGfA/o.jpg',
      category: 'utensils',
    },
    // Baskets
    {
      id: '7',
      name: 'Woven Baskets',
      description: 'Traditional Ethiopian woven baskets for serving and storage',
      price: '$34.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/OB4PObf7OeVNfUjYb2UCJA/o.jpg',
      category: 'baskets',
    },
    // Furniture
    {
      id: '8',
      name: 'Acumen Chair',
      description: 'Traditional Ethiopian chair',
      price: '$89.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/bXM-Idd70nJTue-saZ5mKQ/o.jpg',
      category: 'furniture',
    },
    // Imported Foods
    {
      id: '9',
      name: 'Imported Ethiopian Foods',
      description: 'Various imported Ethiopian food products and ingredients',
      price: '$12.99',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/1EJb6a-6jP6aHW_OKMU-4Q/o.jpg',
      category: 'food',
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="pt-20 min-h-screen bg-ethiopian-light">
      {/* Header */}
      <section className="bg-gradient-to-r from-ethiopian-green to-ethiopian-green/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4 font-display">Our Products</h1>
            <p className="text-xl text-green-50">
              Discover authentic Ethiopian ingredients and traditional items
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ethiopian-green"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category=""
                  delay={index * 0.05}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-xl text-gray-600 mb-4">No products found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products

