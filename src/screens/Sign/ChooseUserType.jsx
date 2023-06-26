import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors, GetLangStyleForText } from '../../theme/constants';
import { Feather } from '@expo/vector-icons';

export default function ChooseUserType({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image source={require("../../assets/icons/sneaker-icon.png")} style={{
                    width: 65,
                    height: 65,
                    marginTop: 10,
                    transform: [{ rotate: '20deg' }],
                }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.titleColor }}>fashionFusion</Text>
            </View>
            <View style={{ marginBottom: 25, justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.social_buttons} onPress={() => { navigation.navigate("Sign Up"); }}>
                    <Text style={GetLangStyleForText('ar')}>Cadastro de Clientes</Text>
                    <Feather name="user" size={24} color="black" style = {{marginHorizontal : 10}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.social_buttons} onPress={() => { navigation.navigate("SignUpAsProvider"); }}>
                    <Text style={GetLangStyleForText('ar')}>Registra-se como Provedor de Serviços</Text>
                    <Image source={require("../../assets/icons/749127-200.png")} style={{ width: 24, height: 24 , marginHorizontal : 10 }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 35,
        justifyContent: 'center'
    },

    social_buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: Colors.brown,
        backgroundColor: "#fff",
        marginBottom: 10,
        justifyContent: 'center'
    },

    login_fields: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: Colors.brown,
        backgroundColor: "#fff",
        marginBottom: 10,
    },

});
