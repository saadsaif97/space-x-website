import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'

type LaunchContainerProps = {
  setId: Function
  open: boolean
}

const LaunchContainer: React.FC<LaunchContainerProps> = ({ setId, open }) => {
  const { data, loading, error } = useLaunchesQuery()

  if (loading) {
    return <h1 style={{ padding: '40px 20px' }}>Data is loading</h1>
  }

  if (error || !data) {
    return <h1 style={{ padding: '40px 20px' }}>There was an error</h1>
  }

  return <Launch data={data} setId={setId} open={open} />
}

export default LaunchContainer
