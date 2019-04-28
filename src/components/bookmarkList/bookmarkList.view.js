import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import Swipeable from 'react-native-swipeable-row';

import { Tag } from '../tag';
import { Rating } from '../rating';

import styles from './bookmarkList.styles';

class BookmarkListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions

  // Component Functions

  _renderRightButton = (item) => {
    const { handleDeleteButton } = this.props;
    return [
      <TouchableHighlight
        onPress={() => handleDeleteButton(item)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableHighlight>,
    ];
  };

  _renderListItem = item => (
    <Swipeable rightButtons={this._renderRightButton(item)}>
      <View style={styles.itemContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.name}</Text>
          <Rating value={item.rating} />
        </View>
        <View style={styles.tagWrapper}>
          {item.categories.map((catogory, index) => (
            <Tag key={`${catogory.alias}${index}`} value={catogory.alias} />
          ))}
        </View>
      </View>
    </Swipeable>
  );

  _renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { bookmarks } = this.props;

    if (bookmarks.length <= 0) {
      return (
        <View style={styles.container}>
          <Text>Empty :(</Text>
        </View>
      );
    }

    return (
      <SafeAreaView>
        <FlatList
          data={bookmarks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this._renderListItem(item)}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </SafeAreaView>
    );
  }
}

export default BookmarkListView;
