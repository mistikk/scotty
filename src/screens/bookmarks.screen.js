import React, { Component } from 'react';

import BookmarksContainer from '../containers/bookmarks.container';
import { BookmarkList } from '../components/bookmarkList';

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `Bookmarks(${
        state.params && state.params.title ? state.params.title : 0
      })`,
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycles

  // Component Functions
  _setScreenTitle = (bookmarkCount) => {
    const {
      navigation: { setParams },
    } = this.props;
    setParams({ title: bookmarkCount });
  };

  render() {
    return (
      <BookmarksContainer setScreenTitle={this._setScreenTitle}>
        {({ bookmarks, handleDeleteButton }) => (
          <BookmarkList
            bookmarks={bookmarks}
            handleDeleteButton={handleDeleteButton}
          />
        )}
      </BookmarksContainer>
    );
  }
}

export default MapScreen;
