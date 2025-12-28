import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const Contact = () => {
  const phoneNumber = '4043209777'
  const formattedPhone = '(404) 320-9777'

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
            <h1 className="text-5xl font-bold mb-4 font-display">Contact Us</h1>
            <p className="text-xl text-green-50">
              Get in touch with us!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phone Number Display */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl p-12 shadow-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-ethiopian-green rounded-full flex items-center justify-center">
              <Phone className="text-white" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Phone</h2>
            <a
              href={`tel:${phoneNumber}`}
              className="text-4xl md:text-5xl font-bold text-ethiopian-green hover:text-ethiopian-green/80 transition-colors"
            >
              {formattedPhone}
            </a>
            <p className="text-gray-600 mt-4 text-lg">
              Call us anytime for inquiries or orders
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

