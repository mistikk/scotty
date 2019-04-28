import React from 'react';

import MapContainer from '../containers/map.container';
import { MapView } from '../components/map';

/* Props
 * ------------------------------------------------
 *   @prop { type }    name                - Description....
 */

const MapScreen = () => (
  <MapContainer>
    {({
      latitude, longitude, loading, places, addToBookmarks,
    }) => {
      if (latitude && longitude) {
        return (
          <MapView
            latitude={latitude}
            longitude={longitude}
            loading={loading}
            places={places}
            addToBookmarks={addToBookmarks}
          />
        );
      }
      return null;
    }}
  </MapContainer>
);

export default MapScreen;
