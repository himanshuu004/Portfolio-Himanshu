import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaCode } from 'react-icons/fa'

const NotFound = ({ theme }) => {
  const navigate = useNavigate()
  
  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${
      theme === 'dark' ? 'bg-[#0D0D0F]' : 'bg-gray-50'
    }`}>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <FaCode className={`text-9xl mx-auto ${theme === 'dark' ? 'text-gray-800' : 'text-gray-300'}`} />
        </motion.div>
        
        <motion.h1
          className={`text-6xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>
        
        <motion.h2
          className={`text-2xl mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          className={`mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The page you're looking for doesn't exist.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
          >
            <FaHome />
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

