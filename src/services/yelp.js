import { gql } from 'apollo-boost';

export const GET_BUSINESSES = gql`
  query search ($latitude: Float!, $longitude: Float!) {
    search(latitude: $latitude, longitude: $longitude, radius: 800, limit: 50) {
      total
      business {
        id
        name
        rating
        distance
        coordinates {
          latitude
          longitude
        }
        categories {
          alias
        }
      }
    }
  }
`;
