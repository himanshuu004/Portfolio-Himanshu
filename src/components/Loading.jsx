import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

const Loading = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-tertiary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
          <FaCode className="text-white text-6xl" />
        </motion.div>
        <motion.h2
          className="text-white text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.h2>
      </div>
    </motion.div>
  )
}

export default Loading

