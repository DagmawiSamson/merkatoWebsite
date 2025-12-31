import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  to?: string
  target?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  to,
  target,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center touch-manipulation min-h-[44px] active:scale-95'
  
  const variants = {
    primary: 'bg-gradient-to-r from-ethiopian-green to-ethiopian-green/90 text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-ethiopian-yellow text-ethiopian-dark hover:bg-ethiopian-yellow/90 hover:shadow-lg hover:scale-105',
    outline: 'border-2 border-ethiopian-green text-ethiopian-green hover:bg-ethiopian-green hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2.5 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  // Use React Router Link for internal navigation
  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to={to}
          className={classes}
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  // Use regular anchor for external links
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:')
    
    if (isExternal || target === '_blank') {
      return (
        <motion.a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={classes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.a>
      )
    } else {
      // Internal link - use React Router Link
      return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to={href}
            className={classes}
          >
            {children}
          </Link>
        </motion.div>
      )
    }
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

export default Button

