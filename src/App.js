/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TabBar from '@mindinventory/react-native-tab-bar-interaction';

/*eslint-disable*/
export default class App extends Component<Props> {
  render() {
    return (
      <TabBar>
        <TabBar.Item
          icon={require('./assets/avatar-7.png')}
          selectedIcon={require('./assets/avatar-8.png')}
          title="Tab1"
          screenBackgroundColor={{ backgroundColor: '#008080' }}
        >
          <View>
            {/* Page Content */}
          </View>
        </TabBar.Item>
        <TabBar.Item
          icon={require('./assets/avatar-9.png')}
          selectedIcon={require('./assets/avatar-7.png')}
          title="Tab2"
          screenBackgroundColor={{ backgroundColor: '#F08080' }}
        >
          <View>
            {/* Page Content */}
          </View>
        </TabBar.Item>
        <TabBar.Item
          icon={require('./assets/avatar-10.png')}
          selectedIcon={require('./assets/avatar-7.png')}
          title="Tab3"
          screenBackgroundColor={{ backgroundColor: '#485d72' }}
        >
          <View>
            {/* Page Content */}
          </View>
        </TabBar.Item>
      </TabBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
