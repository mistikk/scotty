import { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';

class BookmarksContainer extends Component {
  state = {
    bookmarks: [],
  };

  // Component Life Cycle Functions
  componentDidMount() {
    const { navigation } = this.props;

    this.didBlurSubscription = navigation.addListener('didFocus', () => this._getBookmarks());
  }

  componentWillUnmount() {
    this.didBlurSubscription.remove();
  }

  // Component Functions
  _getBookmarks = async () => {
    const {
      navigation: { setParams },
    } = this.props;
    const bookmarks = await AsyncStorage.getItem('bookmarks');

    if (bookmarks) {
      const bookmarksArr = JSON.parse(bookmarks);
      this.setState({ bookmarks: bookmarksArr });
      setParams({ title: bookmarksArr.length });
    }
  };

  _deleteBookmark = async (item) => {
    const bookmarks = await AsyncStorage.getItem('bookmarks');

    const newBookmarks = JSON.parse(bookmarks).filter(
      bookmark => bookmark.id !== item.id,
    );

    await AsyncStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    this._getBookmarks();
  };

  render() {
    const { children } = this.props;
    const { bookmarks } = this.state;

    return (
      children
      && children({ bookmarks, handleDeleteButton: this._deleteBookmark })
    );
  }
}

export default withNavigation(BookmarksContainer);
