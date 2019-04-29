import React from 'react';
import renderer from 'react-test-renderer';
import { Callout } from 'react-native-maps';
import { MarkerPopover } from '../makerPopover';

import Map from './map.view';

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

describe('Map Component', () => {
  const props = {
    latitude: 37.785834,
    loading: false,
    longitude: -122.406417,
    places: [
      {
        categories: [{ alias: 'cocktailbars' }, { alias: 'tacos' }],
        coordinates: {
          latitude: 37.7853008468227,
          longitude: -122.403918653727,
        },
        distance: 227.41363185164334,
        id: '_EncdQezAzcShATMFXL0dA',
        name: 'Tropisueno',
        rating: 4,
      },
    ],
  };

  it('> Callout onClick for Android platform', () => {
    const component = renderer.create(<Map {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('> button onClick function', () => {
    jest.mock('Platform', () => {
      const Platform = require.requireActual('Platform');
      Platform.OS = 'android';
      return Platform;
    });

    const mockCallback = jest.fn();
    const component = renderer.create(<Map {...props} addToBookmarks={mockCallback} />);

    component.root.findByType(Callout).props.onPress();
    expect(mockCallback.mock.calls[0][0]).toBe(props.places[0]);
  });

  it('> MarkerPopover onClick for iOS platform', () => {
    jest.mock('Platform', () => {
      const Platform = require.requireActual('Platform');
      Platform.OS = 'ios';
      return Platform;
    });

    const mockCallback1 = jest.fn();
    const component = renderer.create(<Map {...props} addToBookmarks={mockCallback1} />);

    component.root.findByType(MarkerPopover).props.handleOnPressBookmark(props.places[0].id);
    expect(mockCallback1.mock.calls[0][0]).toBe(props.places[0]);
  });
});
