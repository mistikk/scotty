import React from 'react';
import { View, Text, Platform } from 'react-native';

// Component
import styles from './makerPopover.styles';
import { Button } from '../button';

const MakerPopoverView = ({
  id, name, distance, rating, handleOnPressBookmark,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <Text>{`Distance : ${parseInt(distance, 10)}`}</Text>
    <Text>{`Rating : ${rating}`}</Text>
    {(Platform.OS === 'android') ? (
      <Text>Click here to dd to bookmarks</Text>
    ) : (
      <Button
        style={styles.button}
        text="Add to bookmarks"
        onPress={() => handleOnPressBookmark(id)}
      />
    )}

  </View>
);

export default MakerPopoverView;
