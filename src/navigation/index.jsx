import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './StackNavigator';
import SplashScreen from '../screens/SplashScreen';
export default function AppNavigator() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1111);
    }, []);
   
    return (
        <View style={styles.container}>
            {
                loading ? <SplashScreen /> :
                    <NavigationContainer>
                        <StackNavigator />
                    </NavigationContainer>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


