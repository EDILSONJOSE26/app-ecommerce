import React from 'react';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation';
import {I18nManager} from "react-native";

export default function App() {
    const [fontsLoaded] = useFonts({
        'Khayal': require('./src/assets/fonts/KhayalRegular.ttf'),
        'cairo':require('./src/assets/fonts/Cairo-Regular.ttf'),
        'cairoBold':require('./src/assets/fonts/Cairo-Bold.ttf'),
        'cairoIntail' :require('./src/assets/fonts/Cairo-VariableFont_wght.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    const rtl = () => {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
    };
    rtl()
    return (<AppNavigator />);
}



