import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import ImageModal from '../components/ImageModal'

interface Product {
  name: string
  description: string
  price: string
  image: string
  category: string
  id: string
}

const Products = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  // All 49 images
  const imageFiles = [
    'IMG_3467.JPG', 'IMG_3468.JPG', 'IMG_3469.JPG', 'IMG_3470.JPG', 'IMG_3471.JPG',
    'IMG_3472.JPG', 'IMG_3473.JPG', 'IMG_3474.JPG', 'IMG_3475.JPG', 'IMG_3476.JPG',
    'IMG_3477.JPG', 'IMG_3480.JPG', 'IMG_3483.JPG', 'IMG_3484.JPG', 'IMG_3486.JPG',
    'IMG_3491.JPG', 'IMG_3492.JPG', 'IMG_3493.JPG', 'IMG_3494.JPG', 'IMG_3495.JPG',
    'IMG_3496.JPG', 'IMG_3497.JPG', 'IMG_3498.JPG', 'IMG_3500.JPG', 'IMG_3501.JPG',
    'IMG_3502.JPG', 'IMG_3503.JPG', 'IMG_3504.JPG', 'IMG_3505.JPG', 'IMG_3506.JPG',
    'IMG_3507.JPG', 'IMG_3508.JPG', 'IMG_3509.JPG', 'IMG_3510.JPG', 'IMG_3511.JPG',
    'IMG_3512.JPG', 'IMG_3514.JPG', 'IMG_3515.JPG', 'IMG_3518.JPG', 'IMG_3519.JPG',
    'IMG_3520.JPG', 'IMG_3521.JPG', 'IMG_3522.JPG', 'IMG_3523.JPG', 'IMG_3524.JPG',
    'IMG_3526.JPG', 'IMG_3527.JPG', 'IMG_3528.JPG', 'IMG_3529.JPG'
  ]

  const products: Product[] = imageFiles.map((imageFile, index) => ({
    id: String(index + 1),
    name: '',
    description: '',
    price: '',
    image: `/images/${imageFile}`,
    category: '',
  }))

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

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category=""
                  delay={0}
                  onClick={() => handleImageClick(product.image)}
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

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default Products
