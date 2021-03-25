import gql from 'graphql-tag'

export const LAUNCH_INFO_QUERY = gql`
  query launchInfo($id: String) {
    launch(id: $id) {
      launch_year
      flight_number
      mission_name
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        video_link
        flickr_images
      }
    }
  }
`
