import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './button.styles';

const MakerPopoverView = ({ text, style, onPress }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default MakerPopoverView;
