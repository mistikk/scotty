import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';

import MapContainer from '../../src/containers/map.container';
import MockStorage from '../../__mocks__/@react-native-community/async-storage';

import { GET_BUSINESSES } from '../../src/services/yelp';


const businessMock = {
  request: {
    query: GET_BUSINESSES,
    variables: { latitude: 1, longitude: 1 },
  },
  result: {
    data: {
      search: {
        total: 1,
        business: [
          {
            categories: [{ alias: 'chinese' }, { alias: 'noodles' }],
            coordinates: { latitude: 37.784236, longitude: -122.406566 },
            distance: 178.1710908248786,
            id: 'TCUfp_AdAQv-g7aD6ktEEQ',
            name: 'M Y China',
            rating: 3.5,
          },
        ],
      },
    },
  },
};

jest.mock('@react-native-community/async-storage');

jest.mock('react-native-maps', () => {
  const React = require.requireActual('react');
  const MapView = require.requireActual('react-native-maps');

  class MockCallout extends React.Component {
    render() {
      return React.createElement('Callout', this.props, this.props.children);
    }
  }

  class MockMarker extends React.Component {
    render() {
      return React.createElement('Marker', this.props, this.props.children);
    }
  }

  class MockMapView extends React.Component {
    render() {
      return React.createElement('MapView', this.props, this.props.children);
    }
  }

  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockMapView.Marker = MockMarker;
  MockMapView.Callout = MockCallout;

  return MockMapView;
});

describe('Map Container', () => {
  let component;

  beforeEach(() => {
    const navigation = { addListener: jest.fn(), setParams: jest.fn() };
    component = renderer.create(
      <MockedProvider mocks={[businessMock]} addTypename={false}>
        <MapContainer navigation={navigation}>
          {() => null}
        </MapContainer>
      </MockedProvider>,
    );
  });

  it('> getBookmarks function', async () => {
    const mapContainer = component.root.findByType(MapContainer);
    mapContainer.instance.setState({ latitude: 1, longitude: 1 });
    await wait(0);
    const testData = {
      categories: [{ alias: 'chinese' }, { alias: 'noodles' }],
      coordinates: { latitude: 37.784236, longitude: -122.406566 },
      distance: 178.1710908248786,
      id: 'sads-g7aD6ktEEQ',
      name: 'M Y China',
      rating: 3.5,
    };
    await mapContainer.instance._addToBookmarks(testData);
    expect(await MockStorage.getItem('bookmarks')).toEqual(JSON.stringify([testData]));
  });
});
