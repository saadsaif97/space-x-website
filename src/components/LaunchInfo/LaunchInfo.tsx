import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeImbed'
import './styles.css'

type LaunchInfoProps = {
  data: LaunchInfoQuery
}

const LaunchInfo: React.FC<LaunchInfoProps> = ({ data }) => {
  if (!data.launch) {
    return <h1>Data not available</h1>
  }

  return (
    <div className='launchDetails'>
      <div className='launchDetailsStatus'>
        <span>Flight {data.launch.flight_number}</span>
        <span
          className={
            data.launch.launch_success ? 'status success' : 'status failure'
          }
        >
          {data.launch.launch_success ? 'success' : 'failure'}
        </span>
      </div>
      <h1>
        {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
      </h1>
      <p>Launhed from: {data.launch.launch_site?.site_name}</p>
      <p>{data.launch.details}</p>

      {data.launch.links && data.launch.links.video_link && (
        <div>
          <YoutubeEmbed link={data.launch.links.video_link} />
          {!data.launch.links.video_link.length && <p>No video found...</p>}
        </div>
      )}
      {data.launch.links && data.launch.links.flickr_images && (
        <div className='launchImages'>
          <h2>Images</h2>
          {data.launch.links.flickr_images.map(
            (imgUrl, i) =>
              imgUrl && (
                <img
                  src={imgUrl}
                  key={i}
                  alt={
                    data.launch?.mission_name
                      ? data.launch?.mission_name
                      : 'space x mission'
                  }
                />
              )
          )}
          {!data.launch.links.flickr_images.length && <p>No image found...</p>}
        </div>
      )}
    </div>
  )
}

export default LaunchInfo
