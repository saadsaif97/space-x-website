import { useLaunchInfoQuery } from '../../generated/graphql'

import React from 'react'
import LaunchInfo from './LaunchInfo'

type LaunchInfoContainerProps = {
  id: string
}

const LaunchInfoContainer: React.FC<LaunchInfoContainerProps> = ({ id }) => {
  const { data, loading, error } = useLaunchInfoQuery({
    variables: {
      id,
    },
  })

  if (loading) {
    return <h1 style={{ padding: '40px 20px' }}>Loading launch info</h1>
  }

  if (error) {
    return <h1>There was an error</h1>
  }

  if (!data) {
    return <h1>Please select the launch to see the results</h1>
  }

  return <LaunchInfo data={data} />
}

export default LaunchInfoContainer
