import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

const Contact = ({ theme }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    setSending(true)
    setError('')
    
    try {
      // Using Web3Forms - no setup required!
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'acd45d22-4eee-4a6b-a9d0-15bb68f8dec2',
          subject: 'New Message from Portfolio Contact Form',
          name: data.name,
          email: data.email,
          message: data.message,
          to_email: 'himanshuu004@gmail.com',
          from_name: data.name,
          from_email: data.email
        })
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setSubmitted(true)
        reset()
        
        setTimeout(() => {
          setSubmitted(false)
          setSending(false)
        }, 3000)
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setError('Failed to send message. Please try again or email directly at himanshuu004@gmail.com')
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-4xl sm:text-5xl font-semibold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Get in touch!
          </h1>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I'm open to any opportunity to transform ideas into high-performance, visually appealing, 
            and interactive websites! For any query, message down below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`p-8 rounded-lg shadow-lg h-full flex flex-col justify-center ${
              theme === 'dark' ? 'bg-secondary' : 'bg-secondary'
            }`}>
              <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                Find Me <FaArrowRight className="text-xl" />
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <FaEnvelope className="text-2xl" />
                  <span className="text-lg">himanshuu004@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <FaPhone className="text-2xl" />
                  <span className="text-lg">+91 8923196771</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full h-14 px-5 rounded-lg border-2 outline-none ${
                      theme === 'dark'
                        ? 'bg-transparent border-gray-700 text-white placeholder-gray-400 focus:border-primary'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary'
                    } transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`w-full h-14 px-5 rounded-lg border-2 outline-none ${
                      theme === 'dark'
                        ? 'bg-transparent border-gray-700 text-white placeholder-gray-400 focus:border-primary'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary'
                    } transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="8"
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-5 py-4 rounded-lg border-2 outline-none resize-none ${
                    theme === 'dark'
                      ? 'bg-transparent border-gray-700 text-white placeholder-gray-400 focus:border-primary'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary'
                  } transition-colors`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={sending}
                className={`w-full py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                  theme === 'dark'
                    ? 'bg-secondary hover:bg-secondary/90 text-white'
                    : 'bg-primary hover:bg-primary-hover text-white'
                } ${sending || submitted ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {submitted ? (
                  <>
                    <FaCheckCircle />
                    Message Sent!
                  </>
                ) : sending ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <FaEnvelope className="transform rotate-[-45deg]" />
                  </>
                )}
              </button>
              
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

