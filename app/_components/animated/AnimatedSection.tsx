'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedCard = ({ children, className }: AnimatedSectionProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedIcon = ({ children, className }: AnimatedSectionProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
} 