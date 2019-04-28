import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ApolloProvider } from 'react-apollo';

import { apolloClient } from './config/apolloClient';
import Routes from './navigation/routes';

EStyleSheet.build({
  $deviceWidth: Dimensions.get('window').width,
  $deviceHeight: Dimensions.get('window').height,

  $primaryBlue: '#00B2FF',
  $white: '#FFFFFF',
  $grayBackground: '#c1c5c7',
  $starYellow: '#F6CB2E',
});

export default class App extends Component {
  state = {};

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Routes />
      </ApolloProvider>
    );
  }
}
