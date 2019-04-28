import React from 'react';
import { Text, View } from 'react-native';

import styles from './tag.styles';

const Tag = ({ value }) => (
  <View style={styles.textWrapper}>
    <Text style={[styles.text]}>{value}</Text>
  </View>
);

export default Tag;
