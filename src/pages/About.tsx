import { motion } from 'framer-motion'
import { Heart, Users, Award, Coffee } from 'lucide-react'
import Button from '../components/Button'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We source directly from Ethiopian producers to ensure the highest quality and authenticity.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections between Ethiopian culture and our local community.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Every product is carefully selected to meet our high standards of excellence.',
    },
    {
      icon: Coffee,
      title: 'Tradition',
      description: 'Preserving and sharing the rich culinary heritage of Ethiopia.',
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-ethiopian-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ethiopian-green to-ethiopian-green/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Our Story</h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
              Connecting the legendary Merkato market to your neighborhood
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              From Merkato to Your Table
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                MerkatoMart was born from a deep love for Ethiopian culture and cuisine. Our founder, 
                inspired by the vibrant energy of Addis Ababa's legendary Merkato market—one of the 
                largest open-air markets in Africa—saw an opportunity to bring authentic Ethiopian 
                flavors to communities around the world.
              </p>
              <p>
                The Merkato market in Addis Ababa is more than just a marketplace; it's a cultural 
                institution where generations of Ethiopians have gathered to buy, sell, and share the 
                ingredients that define Ethiopian cuisine. From the aromatic spices that fill the air 
                to the fresh injera being made on traditional griddles, Merkato represents the heart 
                of Ethiopian food culture.
              </p>
              <p>
                At MerkatoMart, we honor this tradition by sourcing directly from Ethiopian producers 
                and suppliers. We carefully select each product to ensure it meets our standards for 
                authenticity, quality, and freshness. Whether you're looking for the perfect berbere 
                spice blend, premium Ethiopian coffee beans, or traditional teff flour for making 
                injera, we've got you covered.
              </p>
              <p>
                Our mission extends beyond just selling products. We're committed to preserving and 
                sharing Ethiopian culinary heritage, making it accessible to everyone—from Ethiopian 
                families wanting to recreate traditional dishes to food enthusiasts eager to explore 
                new flavors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-ethiopian-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Our Values</h2>
            <p className="text-gray-600 text-lg">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, shadow: 'lg' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-ethiopian-green to-ethiopian-yellow rounded-full flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ethiopian-green to-ethiopian-green/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 font-display">Visit Us Today</h2>
            <p className="text-xl mb-8 text-green-50">
              Experience the authentic flavors of Ethiopia at MerkatoMart
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/location">
                Find Our Location
              </Button>
              <Button variant="outline" size="lg" href="/products" className="border-white text-white hover:bg-white hover:text-ethiopian-green">
                Shop Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

