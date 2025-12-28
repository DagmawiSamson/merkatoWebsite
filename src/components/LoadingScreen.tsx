import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-ethiopian-light flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="mb-8"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 border-4 border-ethiopian-green rounded-full"></div>
            <div className="absolute inset-0 border-4 border-ethiopian-yellow rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 border-4 border-ethiopian-red rounded-full border-r-transparent animate-spin" style={{ animationDirection: 'reverse' }}></div>
          </div>
        </motion.div>
        <motion.h2
          className="text-2xl font-bold text-ethiopian-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          MerkatoMart
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading authentic Ethiopian flavors...
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen

