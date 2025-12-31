import { motion } from 'framer-motion'
import Button from '../components/Button'

const About = () => {

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">About Merkato Market</h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
              Ethiopian Grocery Store in Atlanta, GA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Merkato Market LLC is a family-owned Ethiopian grocery store in Atlanta, Georgia, proudly serving the community since July 1997. Conveniently located on Buford Highway, we specialize in authentic Ethiopian food, groceries, spices, coffee, and cultural products for the Ethiopian and East African community—while welcoming everyone interested in traditional African cuisine and healthy, natural foods.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-ethiopian-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Our Mission</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Our mission is to preserve and share Ethiopian culture through food, by providing high-quality, authentic grocery products, warm customer service, and a welcoming space for both our community and new customers discovering Ethiopian cuisine for the first time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              Authentic Ethiopian Groceries & Cultural Products
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>At Merkato Market, we offer a wide range of Ethiopian grocery items, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Teff flour for making injera</li>
                <li>Traditional Ethiopian spices such as berbere, mitmita, and shiro</li>
                <li>Fresh and packaged injera</li>
                <li>Ethiopian coffee beans, both roasted and green</li>
                <li>Herbal and regular teas</li>
                <li>Select fresh meat and essential grocery staples</li>
              </ul>
              <p>We also carry cultural and household items such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Traditional cookware including jebena coffee pots and clay cookware</li>
                <li>Ethiopian clothing and textiles, including Habesha kemis, scarves, and fabrics</li>
                <li>Home décor like woven baskets, wall art, and pottery</li>
                <li>Books and specialty cultural products</li>
                <li>Natural personal care items, including traditional Ethiopian kebe (butter)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-ethiopian-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              Serving Atlanta's Ethiopian & East African Community
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Merkato Market proudly serves the Ethiopian and East African community in Atlanta, as well as customers throughout the metro area looking for an authentic African grocery store near Buford Highway. Whether you are shopping for everyday groceries, preparing traditional meals, or exploring Ethiopian food for the first time, our store is here to support your needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Family-Owned Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              Family-Owned & Community-Focused
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                We are a family-owned and operated business committed to quality, tradition, and community. Merkato Market operates in full compliance with Georgia Department of Agriculture regulations and food safety standards, ensuring a safe and reliable shopping experience for our customers.
              </p>
            </div>
          </motion.div>
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
              Experience the authentic flavors of Ethiopia at Merkato Market
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

