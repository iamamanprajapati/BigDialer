import React, { Component } from 'react'
import { Card } from '../Rest/AvatarCard'
import {
    View,
    StatusBar,
    ScrollView,
    Dimensions,
    Text,
    StyleSheet, Image, TouchableOpacity, Alert,
    Linking
} from 'react-native';
import call from 'react-native-phone-call'

const Width = Dimensions.get('window').width;

const args = {
    number: '9093900003',
    prompt: false
}

export class Favorites extends Component {

    clickHandler = () => {
        Alert.alert('Floating Button Clicked');
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(241, 243, 246)' }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#009384"
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            margin: 2
                        }}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </View>
                </ScrollView>
                <TouchableOpacity

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
        )
    }
}

export default Favorites


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
    },
});