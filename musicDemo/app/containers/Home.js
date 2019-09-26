import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export const TRACKS = [
  {
    title: 'SoundHelix-Song-1',
    artist: 'A.R.Rehman',
    albumArtUrl: "https://picsum.photos/200/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: 'SoundHelix-Song-2',
    artist: 'Sonu Nigam',
    albumArtUrl: "https://picsum.photos/seed/picsum/200/200",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'SoundHelix-Song-10',
    artist: 'Kailash Kher',
    albumArtUrl: 'https://picsum.photos/id/244/200/200',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  },
];

export default class Home extends Component {

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate("Player", { value: TRACKS, index: index });
      }}>
        <View
          style={styles.item}
        >
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={TRACKS}
          style={styles.container}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: 30,
  },
  itemText: {
    color: 'white',
  },
});


