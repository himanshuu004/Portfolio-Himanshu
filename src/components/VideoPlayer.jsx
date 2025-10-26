import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const VideoPlayer = ({ src, thumbnail, isYouTube = false, className }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isYouTube) {
    // Extract video ID from YouTube URL
    const getYouTubeId = (url) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)
      return (match && match[2].length === 11) ? match[2] : null
    }

    const videoId = getYouTubeId(src)
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`

    return (
      <div className={className}>
        <iframe
          className="w-full h-full"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (!isPlaying) {
    return (
      <div className={`${className} relative cursor-pointer group`} onClick={() => setIsPlaying(true)}>
        {thumbnail && (
          <img src={thumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity">
          <div className="w-20 h-20 rounded-full bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <FaPlay className="text-white text-3xl ml-1" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <video
      className={className}
      controls
      autoPlay
      src={src}
      playsInline
    >
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer

