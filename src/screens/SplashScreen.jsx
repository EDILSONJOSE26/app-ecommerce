import React from 'react'
import {Image, StyleSheet, View, ActivityIndicator , Dimensions } from 'react-native';
const SplashScreen = () => {
    const {width, height} = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <Image
                style={{ height: height, width: width, position: 'absolute' }}
                source={require('../assets/login/dominos.jpg')}
            />
            <ActivityIndicator size="large" color="blue" />
        </View>
    )
}

export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});
