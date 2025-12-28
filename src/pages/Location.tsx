import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react'
import Button from '../components/Button'

const Location = () => {
  const hours = [
    { day: 'Monday - Saturday', time: '10:30 AM - 9:00 PM' },
    { day: 'Sunday', time: '10:30 AM - 8:00 PM' },
  ]
  
  const address = '3950 Buford Hwy NE Unit A, Chamblee, GA 30345, United States'
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
            <h1 className="text-5xl font-bold mb-4 font-display">Location & Hours</h1>
            <p className="text-xl text-green-50">
              Visit us at our store or get in touch
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent('MerkatoMart 3950 Buford Hwy NE Unit A Chamblee GA 30345')}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-ethiopian-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">
                      3950 Buford Hwy NE Unit A<br />
                      Chamblee, GA 30345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-ethiopian-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-ethiopian-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href={`tel:${phoneNumber}`} className="text-ethiopian-green hover:underline text-lg">
                      {formattedPhone}
                    </a>
                  </div>
                </div>
              </div>

              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                className="w-full"
                size="lg"
              >
                <Navigation className="mr-2" size={20} />
                Get Directions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Store Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Store Hours</h2>
            <p className="text-gray-600 text-lg">We're here to serve you</p>
          </motion.div>

          <div className="bg-ethiopian-light rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  className="flex items-center justify-between p-4 bg-white rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <Clock className="text-ethiopian-green" size={20} />
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                  </div>
                  <span className="text-gray-600">{schedule.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-ethiopian-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Quick Actions</h2>
            <p className="text-gray-600 text-lg">Get in touch or place an order</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href={`tel:${phoneNumber}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-ethiopian-green rounded-full flex items-center justify-center">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">Speak with our team</p>
            </motion.a>

            <motion.a
              href="/contact"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-ethiopian-yellow rounded-full flex items-center justify-center">
                <Mail className="text-ethiopian-dark" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Get in touch with us</p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location

