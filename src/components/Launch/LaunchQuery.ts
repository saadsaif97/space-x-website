import gql from 'graphql-tag'

export const LAUNCH_QUERY = gql`
  query launches {
    launches {
      mission_name
      flight_number
      launch_year
      launch_success
    }
  }
`
