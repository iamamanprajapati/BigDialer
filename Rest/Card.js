import React, { Component } from 'react';

import {
    View,
    TouchableNativeFeedback,
    ImageBackground,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native';

const Width = Dimensions.get('window').width;
const W1 = (Width / 2)-3;


export class Card extends Component {

    render() {
        return (
            
                        <ImageBackground
                            style={{
                                width: W1,
                                height: W1,
                                backgroundColor: 'white',
                                elevation: 4,
                                marginTop: 2,
                            }}>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#bfbfbf')}>
                                <View>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={require('../logo.png')}
                                    />
                                </View>
                            </TouchableNativeFeedback>
                        </ImageBackground>
                    
        );
    }
}


export default Card;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: W1,
        height: W1,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

