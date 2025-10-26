import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import DP from '/assets/images/DP.jpeg'

const Hero = ({ theme }) => {
  const typedRef = useRef(null)
  const typedInstanceRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Software Engineer', 'Creative Coder'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    })

    typedInstanceRef.current = typed

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy()
      }
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-primary text-white px-5 py-2 text-sm rounded-lg font-semibold">
                Himanshu Rawat
              </span>
            </motion.div>

            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I'm <span className="text-tertiary">
                <span ref={typedRef}></span>
              </span>
            </motion.h1>

            <motion.p
              className={`text-base sm:text-lg mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I design and develop full-stack applications with a relentless focus on performance, scalability, and clean architecture.
            </motion.p>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  
                  const emailInput = contactSection.querySelector('input[type="email"]');
                  const nameInput = contactSection.querySelector('input[type="text"]');
                  
                  setTimeout(() => {
                    if (emailInput) {
                      emailInput.focus();
                    } else if (nameInput) {
                      nameInput.focus();
                    }
                  }, 800);
                }
              }}>
                <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">
                  Contact
                </button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/himanshu-rawat-3ba9a9265/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-white' : 'bg-gray-200 hover:bg-primary'
                } transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className={`text-2xl ${
                  theme === 'dark' ? 'text-white group-hover:text-black' : 'text-gray-800 group-hover:text-white'
                }`} />
              </motion.a>

              <motion.a
                href="https://github.com/himanshuu004"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-white' : 'bg-gray-200 hover:bg-primary'
                } transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className={`text-2xl ${
                  theme === 'dark' ? 'text-white group-hover:text-black' : 'text-gray-800 group-hover:text-white'
                }`} />
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/himanshurwt/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-white' : 'bg-gray-200 hover:bg-primary'
                } transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
                  alt="LeetCode" 
                  className={`w-6 h-6 ${theme === 'dark' ? 'invert' : ''}`} 
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
              <motion.div
                className="w-full h-full rounded-[55%] overflow-hidden border-4 border-primary shadow-2xl"
                animate={{
                  borderRadius: ['55% 45%', '45% 55%', '55% 45%'],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img 
                  src={DP} 
                  alt="Himanshu Rawat" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

