import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const AlbumArt = ({
  url,
}) => (
  <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: url}}
      />
  </View>
);

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 10
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
})
