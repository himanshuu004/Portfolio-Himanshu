import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaYoutube, FaLink, FaTimes } from 'react-icons/fa'

const BeyondCoding = ({ theme }) => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const artisticForms = [
    {
      id: 1,
      title: 'Tech Contributor',
      description: 'Contributing to open-source projects and sharing technical knowledge through talks, articles, and mentorship.',
      thumbnail: '/assets/beyond-coding/thumb-contributor.jpg',
      video: '/assets/beyond-coding/tech-contributor.mp4',
      hideSocialLinks: true,
      otherLinks: [
        { name: 'GitHub Contributions', url: 'https://github.com/himanshuu004' }
      ]
    },
    {
      id: 2,
      title: 'Beatboxing Mentor/Performer',
      description: 'Passionate beatboxer and mentor sharing the art of vocal percussion. Performing live and teaching aspiring beatboxers.',
      video: '/assets/beyond-coding/beatboxing.MP4',
      thumbnail: '/assets/beyond-coding/thumb-beatboxing.jpg',
      instagram: 'https://www.instagram.com/himanshu_bbx12',
      youtube: 'https://youtu.be/SXM4B7blihw',
      otherLinks: [
        { name: 'Portfolio', url: 'https://www.instagram.com/himanshu_bbx12' }
      ]
    },
    {
      id: 3,
      title: 'Event Management',
      description: 'Organizing and managing various events from corporate gatherings to cultural festivals. Creating memorable experiences.',
      video: '/assets/beyond-coding/event-management.jpg',
      image: true,
      thumbnail: '/assets/beyond-coding/thumb-event-management.jpg',
      instagram: 'https://www.instagram.com/himanshu_bbx12',
      hideYoutube: true,
      otherLinks: [
        { name: 'Events Portfolio', url: 'https://www.instagram.com/himanshu_bbx12' }
      ]
    },
    {
      id: 4,
      title: 'Content Creation',
      description: 'Creating engaging content across multiple platforms. From educational videos to entertaining skits and tutorials.',
      video: '/assets/beyond-coding/content-creation.mov',
      thumbnail: '/assets/beyond-coding/thumb-content-creation.JPEG',
      instagram: 'https://www.instagram.com/himanshu_bbx12',
      hideYoutube: true,
      otherLinks: [
        { name: 'Blog', url: 'https://medium.com/@himanshuu004/how-i-started-beatboxing-and-how-you-can-too-1444803ea673' }
      ]
    }
  ]

  return (
    <>
      <section id="beyond-coding" className="py-20 px-4 sm:px-6 lg:px-16">
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
              Beyond Coding
            </h1>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Exploring creativity beyond the keyboard
            </p>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {artisticForms.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl shadow-lg overflow-hidden cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-gray-800' 
                  : 'bg-white'
              } transition-colors`}
              onClick={() => setSelectedVideo(form)}
            >
              {/* Video/Image Thumbnail */}
              <div className="relative h-56 sm:h-64 bg-gray-900 group overflow-hidden">
                  {form.image ? (
                    <>
                      <img 
                        src={form.video} 
                        alt={form.title}
                        className="w-full h-full object-contain bg-gray-800 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                          theme === 'dark' ? 'bg-white' : 'bg-white'
                        } bg-opacity-20 backdrop-blur-sm`}>
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {form.thumbnail ? (
                        <>
                          <img 
                            src={form.thumbnail}
                            alt={form.title}
                            className={`w-full h-full transition-transform duration-300 group-hover:scale-110 ${
                              form.id === 2 || form.id === 3 ? 'object-contain bg-gray-800' : 'object-cover'
                            }`}
                          />
                          <video
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            muted
                            loop
                            playsInline
                          >
                            <source src={form.video} type="video/mp4" />
                            <source src={form.video} type="video/quicktime" />
                          </video>
                        </>
                      ) : (
                        <video
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                        >
                          <source src={form.video} type="video/mp4" />
                          <source src={form.video} type="video/quicktime" />
                        </video>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                          theme === 'dark' ? 'bg-white' : 'bg-white'
                        } bg-opacity-30 backdrop-blur-sm group-hover:bg-opacity-40 transition-all`}>
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className={`text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {form.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {form.description}
                </p>
                
                {/* Links */}
                {!form.hideSocialLinks && (
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {form.instagram && (
                      <a
                        href={form.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`px-3 sm:px-4 py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors ${
                          theme === 'dark'
                            ? 'bg-pink-600 hover:bg-pink-700 text-white'
                            : 'bg-pink-500 hover:bg-pink-600 text-white'
                        }`}
                      >
                        <FaInstagram />
                        <span className="hidden sm:inline">Instagram</span>
                        <span className="sm:hidden">IG</span>
                      </a>
                    )}
                    {form.youtube && !form.hideYoutube && (
                      <a
                        href={form.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`px-3 sm:px-4 py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors ${
                          theme === 'dark'
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-red-500 hover:bg-red-600 text-white'
                        }`}
                      >
                        <FaYoutube />
                        <span className="hidden sm:inline">YouTube</span>
                        <span className="sm:hidden">YT</span>
                      </a>
                    )}
                  </div>
                )}
                
                {/* Other Links */}
                {form.otherLinks && form.otherLinks.length > 0 && (
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                    {form.otherLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`px-3 sm:px-4 py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors ${
                          theme === 'dark'
                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        }`}
                      >
                        <FaLink className="text-xs sm:text-sm" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              </motion.div>
            ))}
          </div>

          {/* Explore More Section */}
          <motion.div
            className="mt-10 sm:mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When I'm not coding, I explore my artistic side through beatboxing, event management, 
              content creation, and tech contributions. Each passion feeds into the other, creating 
              a unique perspective on problem-solving and creativity.
            </p>
            <a
              href="https://www.instagram.com/himanshu_bbx12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all text-sm sm:text-base"
            >
              Explore More
              <FaLink />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-80" />
            
            {/* Modal Content */}
            <motion.div
              className={`relative w-full max-w-5xl mx-4 rounded-2xl overflow-hidden ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } shadow-2xl`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center transition-colors"
              >
                <FaTimes className="text-white text-xl" />
              </button>

              {/* Video/Image */}
              <div className="aspect-video bg-black">
                {selectedVideo.image ? (
                  <img 
                    src={selectedVideo.video} 
                    alt={selectedVideo.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video
                    className="w-full h-full"
                    controls
                    autoPlay
                    src={selectedVideo.video}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              {/* Video Info */}
              <div className={`p-4 sm:p-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                <h3 className={`text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedVideo.title}
                </h3>
                <p className={`mb-4 sm:mb-6 text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {selectedVideo.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {!selectedVideo.hideSocialLinks && selectedVideo.instagram && (
                    <a
                      href={selectedVideo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-pink-600 text-white rounded-lg flex items-center gap-1.5 sm:gap-2 hover:bg-pink-700 transition-colors text-sm sm:text-base"
                    >
                      <FaInstagram />
                      <span className="hidden sm:inline">Instagram</span>
                      <span className="sm:hidden">IG</span>
                    </a>
                  )}
                  {!selectedVideo.hideYoutube && selectedVideo.youtube && (
                    <a
                      href={selectedVideo.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-1.5 sm:gap-2 hover:bg-red-700 transition-colors text-sm sm:text-base"
                    >
                      <FaYoutube />
                      <span className="hidden sm:inline">YouTube</span>
                      <span className="sm:hidden">YT</span>
                    </a>
                  )}
                  {selectedVideo.otherLinks?.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 sm:px-4 py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 transition-colors text-sm sm:text-base ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-white hover:bg-gray-700'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      <FaLink />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default BeyondCoding

