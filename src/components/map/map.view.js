import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

// Component
import { MarkerPopover } from '../makerPopover';

import styles from './map.styles';

class MapViewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions

  // Component Functions
  _handleOnPressBookmark = (id) => {
    const { places, addToBookmarks } = this.props;
    const place = places.filter(item => item.id === id);

    if (place.length > 0) addToBookmarks(place[0]);
  }

  _handleOnPressCallout = (id) => {
    if (Platform.OS === 'android') {
      this._handleOnPressBookmark(id);
    }
  }


  render() {
    const {
      latitude, longitude, places,
    } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          followsUserLocation
          showsMyLocationButton
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {places
            && places.map(place => (
              <Marker
                key={place.id}
                coordinate={{
                  latitude: place.coordinates.latitude,
                  longitude: place.coordinates.longitude,
                }}
              >
                <Callout onPress={() => this._handleOnPressCallout(place.id)}>
                  <MarkerPopover
                    id={place.id}
                    name={place.name}
                    distance={parseInt(place.distance, 10)}
                    rating={place.rating}
                    handleOnPressBookmark={this._handleOnPressBookmark}
                  />
                </Callout>
              </Marker>
            ))}
        </MapView>
      </View>
    );
  }
}

export default MapViewComp;
