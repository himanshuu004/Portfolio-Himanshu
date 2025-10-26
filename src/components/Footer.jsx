import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = ({ theme }) => {
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/himanshu-rawat-3ba9a9265/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/himanshuu004', label: 'GitHub' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/himanshu_bbx12/', label: 'Instagram' }
  ]

  return (
    <footer className={`py-16 px-4 sm:px-6 lg:px-16 border-t ${
      theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-3xl font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Himanshu Rawat
            </h3>
          </motion.div>

          {/* Navigation Links */}
          <motion.ul
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Social Icons */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-100'
                } shadow-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <div className={`text-xl ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Copyright &copy; {new Date().getFullYear()}{' '}
              <a
                href="#home"
                className={`hover:underline ${
                  theme === 'dark' ? 'text-white' : 'text-primary'
                }`}
              >
                Himanshu Rawat
              </a>{' '}
              - All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

