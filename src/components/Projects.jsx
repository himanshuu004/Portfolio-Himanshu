import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = ({ theme }) => {
  const projects = [
    {
      id: 1,
      name: 'Shredhan Homestay',
      description: 'A modern and responsive website for a homestay showcasing rooms, amenities, and booking functionality.',
      skills: ['React', 'GSAP', 'Locomotive', 'CSS'],
      video: '/assets/projects pic/sd.mp4',
      liveLink: 'https://shredhanhomestay.netlify.app/',
      githubLink: '#',
    },
    {
      id: 2,
      name: 'Ishtyle',
      description: 'A fashionable e-commerce website with dynamic product catalogs and seamless shopping experience.',
      skills: ['React', 'Animation', 'JavaScript', 'CSS'],
      video: '/assets/projects pic/3.mp4',
      liveLink: 'https://ishtyle.netlify.app/',
      githubLink: '#',
    },
    {
      id: 3,
      name: 'Cotton Craze',
      description: 'An elegant textile and clothing showcase website featuring interactive galleries and modern design.',
      skills: ['React', 'Animation', 'JavaScript', 'CSS'],
      video: '/assets/projects pic/1.mp4',
      liveLink: 'https://cottoncraze.netlify.app/',
      githubLink: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-16">
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
            Projects
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl shadow-lg overflow-hidden ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Video/Image */}
              <div className="h-64 overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className={`text-2xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.name}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
                  >
                    <FaExternalLinkAlt />
                    View Live
                  </a>
                  {project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 hover:bg-gray-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

