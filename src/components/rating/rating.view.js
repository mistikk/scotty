import React from 'react';
import { View } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './rating.styles';

const _renderFullStar = value => [...new Array(5)].map((item, index) => {
  const i = index + 1;

  if (i <= value) {
    return <MaterialIcons key={i} style={styles.star} name="star" />;
  }
  if (index < value && value < i) {
    return <MaterialIcons key={i} style={styles.star} name="star-half" />;
  }
  return <MaterialIcons key={i} style={styles.star} name="star-border" />;
});

const RatingView = ({ value }) => (
  <View style={styles.container}>{_renderFullStar(value)}</View>
);

export default RatingView;
