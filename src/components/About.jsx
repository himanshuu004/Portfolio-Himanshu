import { motion } from 'framer-motion'
import { FaFilePdf, FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiBootstrap, SiMongodb, SiExpress, SiTypescript, SiLeetcode } from 'react-icons/si'

const About = ({ theme }) => {
  const skills = [
    { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
    { name: 'Python', icon: <FaPython />, color: 'text-blue-300' },
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-500' },
    { name: 'Express', icon: <SiExpress />, color: 'text-gray-400' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
    { name: 'LeetCode', icon: <SiLeetcode />, color: 'text-orange-400' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-16">
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
            About Me
          </h1>
        </motion.div>

        {/* Introduction Card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={`max-w-4xl mx-auto p-8 rounded-2xl shadow-lg ${
            theme === 'dark' ? 'bg-primary' : 'bg-primary'
          }`}>
            <h3 className={`text-2xl font-semibold mb-4 text-white`}>
              My Introduction
            </h3>
            <p className={`text-white leading-relaxed mb-6`}>
            Hi, I'm Himanshu Rawat, a final-year Computer Science student at Graphic Era Hill University with a passion for building modern, high-performance web applications. I specialize in the MERN stack and have strong expertise in frontend technologies like React, JavaScript, Tailwind CSS, GSAP, and Locomotive Scroll, along with backend skills in databases, APIs, and languages like Java, C, and C++. Beyond code, I bring UI/UX design sensibility, frontend animations, and leadership experience from managing college events and teams. I'm eager to learn, grow, and contribute as a Frontend or Full-Stack MERN Developer.

            </p>
            <a
              href="/resume/Himanshu_Rawat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <FaFilePdf />
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={`text-3xl font-semibold text-center mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex flex-col items-center p-4 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } transition-all cursor-pointer shadow-lg`}
              >
                <div className={`text-4xl mb-2 ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className={`text-sm font-medium text-center ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

