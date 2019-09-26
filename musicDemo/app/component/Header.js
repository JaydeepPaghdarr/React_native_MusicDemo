import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = ({
  onBackPress
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onBackPress}>
      <Image style={styles.button}
        source={require('../assets/images/ic_back_32pt.png')} />
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 40,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  button: {
    opacity: 0.72
  }
});
