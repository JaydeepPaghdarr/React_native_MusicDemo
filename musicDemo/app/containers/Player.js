import React, { Component } from 'react';
import { 
  Text,
  View,
} from 'react-native';


class Player extends Component {

  
  render() {
   
    return (
     
      <View style={{ flex: 1, justifyContent:"center", alignItems: "center" }}>
        <Text>Player</Text>  
      </View>
     
    );
  }
}


export default Player;

