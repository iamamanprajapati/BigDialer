import React, { Component } from 'react';

import { StyleSheet, View, Image, TouchableOpacity, Alert, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class FloatingButton extends Component {
  clickHandler = () => {
    Alert.alert('Floating Button Clicked');
  };

  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView>
        <Text style={{fontSize:1000}}>hello</Text>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.clickHandler}
        style={styles.TouchableOpacityStyle}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
          }}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});