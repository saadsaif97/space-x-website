import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'

type LaunchContainerProps = {
  idState: {
    id: string
    setId: Function
  }
  open: boolean
}

const LaunchContainer: React.FC<LaunchContainerProps> = ({ idState, open }) => {
  const { data, loading, error } = useLaunchesQuery()

  if (loading) {
    return <h1 style={{ padding: '40px 20px' }}>Data is loading</h1>
  }

  if (error || !data) {
    return <h1 style={{ padding: '40px 20px' }}>There was an error</h1>
  }

  return <Launch data={data} idState={idState} open={open} />
}

export default LaunchContainer
