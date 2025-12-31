import { memo } from 'react'
import { motion } from 'framer-motion'

interface ProductCardProps {
  name: string
  description: string
  price: string
  image: string
  category: string
  delay?: number
  onClick?: () => void
}

const ProductCard = memo(({ image, delay = 0, onClick }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer will-change-transform touch-manipulation active:scale-[0.98]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '50px' }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
      aria-label="View product image"
    >
      <div className="relative w-full aspect-square bg-gradient-to-br from-ethiopian-green/10 to-ethiopian-yellow/10 overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.div>
  )
})

ProductCard.displayName = 'ProductCard'

export default ProductCard

