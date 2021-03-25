import React from 'react'
import './styles.css'

type YoutubeEmbedProps = {
  link: string
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ link }) => {
  const videoId = link.slice(link.indexOf('=') + 1)

  return (
    <div className='video-responsive'>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  )
}

export default YoutubeEmbed
