import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

const Contact = () => {
  const phoneNumber = '4043209777'
  const formattedPhone = '(404) 320-9777'
  const email = 'merkatomart@gmail.com'

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

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Number */}
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
                className="text-3xl md:text-4xl font-bold text-ethiopian-green hover:text-ethiopian-green/80 transition-colors touch-manipulation inline-block py-2"
              >
                {formattedPhone}
              </a>
              <p className="text-gray-600 mt-4 text-lg">
                Call us anytime for inquiries or orders
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-white rounded-xl p-12 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-ethiopian-yellow rounded-full flex items-center justify-center">
                <Mail className="text-ethiopian-dark" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Email</h2>
              <a
                href={`mailto:${email}`}
                className="text-xl md:text-2xl font-bold text-ethiopian-green hover:text-ethiopian-green/80 transition-colors break-all touch-manipulation inline-block py-2"
              >
                {email}
              </a>
              <p className="text-gray-600 mt-4 text-lg">
                Send us an email for questions or feedback
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

