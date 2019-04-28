import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Query } from 'react-apollo';

// Services and Actions
import { GET_BUSINESSES } from '../services/yelp';

// Utilities
import { getCurrentLocation } from '../utilities/location';

class MapContainer extends Component {
  state = {
    latitude: null,
    longitude: null,
  };

  // Component Life Cycle Functions
  componentDidMount() {
    getCurrentLocation().then((coords) => {
      if (coords) {
        this.setState({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      }
    });
  }

  // Component Functions
  _addToBookmarks = async (place) => {
    let bookmarksArr = [];
    let isDublicate = false;
    const bookmarks = await AsyncStorage.getItem('bookmarks');

    if (bookmarks) {
      bookmarksArr = JSON.parse(bookmarks);
      isDublicate = bookmarksArr.filter(item => item.id === place.id).length > 0;
    }
    if (!isDublicate) {
      bookmarksArr.push(place);
    }

    await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarksArr));
  };

  render() {
    const { children } = this.props;
    const { latitude, longitude } = this.state;

    if (!latitude || !longitude) return null;

    return (
      <Query query={GET_BUSINESSES} variables={{ latitude, longitude }}>
        {({ loading, data }) => children
          && children({
            latitude,
            longitude,
            loading,
            places: data.search && data.search.business,
            addToBookmarks: this._addToBookmarks,
          })
        }
      </Query>
    );
  }
}

export default MapContainer;
