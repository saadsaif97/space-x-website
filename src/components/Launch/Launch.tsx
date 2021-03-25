import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import './styles.css'

type LaunchProps = {
  data: LaunchesQuery
  setId: Function
  open: boolean
}

const openStyle = {
  display: 'block',
}
const closeStyle = {
  display: 'none',
}

const Launch: React.FC<LaunchProps> = ({ data, setId, open }) => {
  return (
    <div
      className='launches'
      style={open ? { ...openStyle } : { ...closeStyle }}
    >
      <h3>All Space X launches</h3>
      <ol className='launchesOl'>
        {!!data.launches &&
          data.launches.map((launch, i) => (
            <li
              className='launchesItem'
              key={i}
              onClick={() => setId(`${i + 1}`)}
            >
              {launch?.mission_name} - {launch?.launch_year} (
              {launch?.launch_success ? 'success' : 'failure'})
            </li>
          ))}
      </ol>
    </div>
  )
}

export default Launch
