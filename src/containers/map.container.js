import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { getCurrentLocation } from '../utilities/location';

const GET_DOGS = gql`
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
      }
    }
  }
`;

class MapContainer extends Component {
  state = {
    latitude: null,
    longitude: null,
  };

  componentDidMount() {
    getCurrentLocation().then((coords) => {
      if (coords) this.setState({ latitude: coords.latitude, longitude: coords.longitude });
    });
  }

  render() {
    const { children } = this.props;
    const { latitude, longitude } = this.state;

    if (!latitude || !longitude) return null;

    return (
      <Query query={GET_DOGS} variables={{ latitude, longitude }}>
        {({ loading, error, data }) => children && children({
          latitude, longitude, loading, places: data.search && data.search.business,
        })}
      </Query>
    );
  }
}

export default MapContainer;
