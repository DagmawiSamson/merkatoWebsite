import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

interface ImageModalProps {
  image: string | null
  isOpen: boolean
  onClose: () => void
}

const ImageModal = ({ image, isOpen, onClose }: ImageModalProps) => {
  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && image && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Close Button - Larger for mobile */}
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 w-12 h-12 md:w-10 md:h-10 flex items-center justify-center bg-black/50 rounded-full backdrop-blur-sm"
              onClick={onClose}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close image"
            >
              <X size={28} className="md:w-6 md:h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <motion.img
                src={image}
                alt="Product view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                draggable={false}
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ImageModal

