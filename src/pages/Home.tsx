import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Coffee, Wheat, ShoppingBag } from 'lucide-react'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import ImageModal from '../components/ImageModal'

const Home = () => {
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
  const featuredProducts = [
    {
      name: '',
      description: '',
      price: '',
      image: '/images/IMG_3467.JPG',
      category: '',
    },
    {
      name: '',
      description: '',
      price: '',
      image: '/images/IMG_3468.JPG',
      category: '',
    },
    {
      name: '',
      description: '',
      price: '',
      image: '/images/IMG_3469.JPG',
      category: '',
    },
  ]

  const testimonials = [
    {
      name: 'Alem Tesfaye',
      role: 'Local Chef',
      content: 'MerkatoMart has the most authentic Ethiopian ingredients I\'ve found outside of Addis Ababa. Their berbere is incredible!',
      rating: 5,
    },
    {
      name: 'Michael Johnson',
      role: 'Regular Customer',
      content: 'The fresh injera and coffee selection keeps me coming back. It\'s like a piece of Ethiopia right in my neighborhood.',
      rating: 5,
    },
    {
      name: 'Sara Ahmed',
      role: 'Home Cook',
      content: 'Finally, a place where I can find all my traditional ingredients. The staff is knowledgeable and friendly.',
      rating: 5,
    },
  ]

  const categories = [
    { icon: Coffee, label: 'Spices & Coffee', link: '/products' },
    { icon: Wheat, label: 'Injera & Grains', link: '/products' },
    { icon: ShoppingBag, label: 'Household Items', link: '/products' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-green/5 via-transparent to-ethiopian-red/5"></div>
        
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 font-display"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-ethiopian-gradient">MerkatoMart</span>
            <br />
            <span className="text-gray-800">Authentic Ethiopian Flavors</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the vibrant tastes and traditions of Ethiopia. From the legendary Merkato market to your table.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" href="/products">
              Shop Now <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" href="/about">
              Our Story
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-ethiopian-green/20 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-ethiopian-yellow/20 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Discover our wide selection of authentic Ethiopian products</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={category.link}
                    className="block bg-gradient-to-br from-ethiopian-green/10 to-ethiopian-yellow/10 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group touch-manipulation active:scale-[0.98]"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-ethiopian-green rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={32} />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-ethiopian-green transition-colors">
                      {category.label}
                    </h3>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-ethiopian-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked favorites from our collection</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                {...product} 
                delay={index * 0.1}
                onClick={() => handleImageClick(product.image)}
              />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" href="/products">
              View All Products <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                From Merkato to Your Table
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                MerkatoMart brings the authentic flavors of Ethiopia's legendary Merkato market to your neighborhood. 
                We source the finest spices, grains, and traditional ingredients directly from Ethiopian producers.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our mission is to preserve and share the rich culinary heritage of Ethiopia, making it accessible 
                to everyone who appreciates authentic, high-quality ingredients.
              </p>
              <Button href="/about">Learn More</Button>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-green/20 to-ethiopian-yellow/20 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-ethiopian-green to-ethiopian-yellow rounded-full flex items-center justify-center">
                    <ShoppingBag size={64} className="text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">Authentic • Fresh • Traditional</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-ethiopian-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Join our community of satisfied customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, shadow: 'lg' }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-ethiopian-yellow fill-ethiopian-yellow" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

export default Home

