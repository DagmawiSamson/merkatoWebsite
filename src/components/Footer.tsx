import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const footerLinks = {
    shop: [
      { label: 'All Products', path: '/products' },
      { label: 'Spices & Coffee', path: '/products' },
      { label: 'Injera & Grains', path: '/products' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Location', path: '/location' },
      { label: 'Contact', path: '/contact' },
    ],
  }

  return (
    <footer className="bg-ethiopian-dark text-white pattern-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-ethiopian-gradient mb-4 font-display">
              MerkatoMart
            </h3>
            <p className="text-gray-300">
              Your authentic Ethiopian mini mart, bringing the flavors of Merkato to your neighborhood.
            </p>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-ethiopian-yellow transition-colors touch-manipulation inline-block py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-ethiopian-yellow transition-colors touch-manipulation inline-block py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-ethiopian-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">3950 Buford Hwy NE Unit A<br />Chamblee, GA 30345<br />United States</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-ethiopian-yellow flex-shrink-0" />
                <a href="tel:4043209777" className="text-gray-300 hover:text-ethiopian-yellow touch-manipulation py-2">
                  (404) 320-9777
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-ethiopian-yellow flex-shrink-0" />
                <a href="mailto:merkatomart@gmail.com" className="text-gray-300 hover:text-ethiopian-yellow break-all touch-manipulation py-2">
                  merkatomart@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MerkatoMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

