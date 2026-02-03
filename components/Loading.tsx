import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="valentine-container">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-6xl"
      >
        💕
      </motion.div>
      <motion.p 
        className="text-xl text-valentine-red mt-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Preparing something special...
      </motion.p>
    </div>
  )
}