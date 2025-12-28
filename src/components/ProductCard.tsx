import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  name: string
  description: string
  price: string
  image: string
  category: string
  delay?: number
}

const ProductCard = ({ name, description, price, image, category, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 bg-gradient-to-br from-ethiopian-green/10 to-ethiopian-yellow/10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {category && (
          <div className="absolute top-2 right-2 bg-ethiopian-red text-white px-2 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-end">
          <motion.button
            className="bg-ethiopian-green text-white p-2 rounded-lg hover:bg-ethiopian-green/90 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard

