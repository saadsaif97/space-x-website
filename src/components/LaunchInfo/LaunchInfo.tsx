import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeImbed'
import './styles.css'

type LaunchInfoProps = {
  data: LaunchInfoQuery
  openState: {
    open: boolean
    setOpen: Function
  }
  idState: {
    id: string
    setId: Function
  }
}

const LaunchInfo: React.FC<LaunchInfoProps> = ({
  data,
  openState,
  idState,
}) => {
  if (!data.launch) {
    return <h1>Data not available</h1>
  }

  return (
    <div className='launchDetails'>
      <span
        className='toggleMenu'
        onClick={() => openState.setOpen(!openState.open)}
      >
        {openState.open ? 'X' : '→'}
      </span>
      <div className='launchStatus'>
        <span>Flight {data.launch.flight_number}</span>
        <span
          className={
            data.launch.launch_success ? 'status success' : 'status failure'
          }
        >
          {data.launch.launch_success ? 'success' : 'failure'}
        </span>
        <div className='navigation'>
          <button
            style={{ marginRight: '20px' }}
            disabled={idState.id === '1'}
            onClick={() =>
              idState.setId((prev: string) =>
                JSON.stringify(parseInt(prev) - 1)
              )
            }
          >
            ←Previous{' '}
          </button>
          <button
            disabled={idState.id === '110'}
            onClick={() =>
              idState.setId((prev: string) =>
                JSON.stringify(parseInt(prev) + 1)
              )
            }
          >
            Next→{' '}
          </button>
        </div>
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
