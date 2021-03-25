import { useLaunchInfoQuery } from '../../generated/graphql'

import React from 'react'
import LaunchInfo from './LaunchInfo'

type LaunchInfoContainerProps = {
  idState: {
    id: string
    setId: Function
  }
  openState: {
    open: boolean
    setOpen: Function
  }
}

const LaunchInfoContainer: React.FC<LaunchInfoContainerProps> = ({
  idState,
  openState,
}) => {
  const { data, loading, error } = useLaunchInfoQuery({
    variables: {
      id: idState.id,
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

  return <LaunchInfo data={data} openState={openState} idState={idState} />
}

export default LaunchInfoContainer
