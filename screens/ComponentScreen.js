import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = () => {
    return (
        <View>
            <Image 
                style={{width: 50, height: 50}}
                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
            <Text style={styles.textStyle}> 
                This is component Screen 
            </Text>
            <Text style={styles.textStyle2}>
                Hello World
            </Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        color: 'green'
    },
    textStyle2: {
        fontSize: 26,
        color: 'red'
    }
});

export default ComponentScreen;


