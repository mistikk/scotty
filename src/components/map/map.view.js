import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

// Services and Actions

// Middleware

// Constants

// Utilities

// Component
import { MarkerPopover } from '../makerPopover';

import styles from './map.styles';

/*
 *            Props Name        Description                                     Value
 *@props -->  props name here   description here                                Value Type Here
 *
 */

class MapViewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions

  // Component Functions
  _handleOnPressBookmark = (id) => {
    const { places } = this.props;

    const place = places.filter(item => item.id === id);
    console.log('place :', place);
  }

  render() {
    const {
      latitude, longitude, loading, places,
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
                <Callout>
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
