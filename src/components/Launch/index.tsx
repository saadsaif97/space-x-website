import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'

type LaunchContainerProps = {
  setId: Function
}

const LaunchContainer: React.FC<LaunchContainerProps> = ({ setId }) => {
  const { data, loading, error } = useLaunchesQuery()

  if (loading) {
    return <h1>Data is loading</h1>
  }

  if (error || !data) {
    return <h1>There was an error</h1>
  }

  return <Launch data={data} setId={setId} />
}

export default LaunchContainer
