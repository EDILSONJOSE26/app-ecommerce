import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { GetLangStyleForText , Colors } from '../../theme/constants';

export default function SignUp({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={require("../../assets/icons/sneaker-icon.png")} style={{
          width: 65, 
          height: 65, 
          marginTop: 10,
          transform: [{rotate: '20deg'}],
        }}/>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.titleColor}}>fashionFusion</Text>
      </View>

      {/* sign-up Areas */}
      <View style={{marginVertical: 40, justifyContent: 'space-between'}}>
        <Text style={[{
            fontSize: 18,
            fontWeight: 'bold', 
            color: Colors.titleColor,
            marginBottom: 8,
        },GetLangStyleForText('ar')]}>Criar uma conta.</Text>
        <TextInput placeholder="Nome" style={styles.login_fields}/>
        <TextInput placeholder="Email" keyboardType="email-address" style={styles.login_fields}/>
        <TextInput placeholder="Senha" secureTextEntry={true} style={styles.login_fields} />
        <TouchableOpacity style={{
            backgroundColor: Colors.primary, 
            paddingVertical: 12, 
            paddingHorizontal: 25,
            alignItems: 'center',
            width: 200,
            alignSelf: 'center'
          }} onPress={() => {navigation.navigate("Home");}}>
          <Text style={{color: '#fff'}}>Continuar</Text>
        </TouchableOpacity>
      </View>

      
      {/* logins com redes sociais */}
      <View style={{marginBottom: 25,justifyContent: 'space-between'}}>

        {/* line */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontWeight: 'bold', color: Colors.titleColor}}>OU</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>

        {/* login com google */}
        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../../assets/icons/google.png")} style={{width: 20, height: 20, marginRight: 25}}/>
          <Text>Sign Up Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../../assets/icons/facebook.png")} style={{width: 20, height: 20, marginRight: 25}}/>
          <Text>Sign Up FaceBook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../../assets/icons/apple-1.png")} style={{width: 20, height: 20, marginRight: 25}}/>
          <Text>Sign Up Apple</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Já possui uma conta?</Text>
          <TouchableOpacity>
            <Text style={{
              textDecorationLine: 'underline',
              marginLeft: 10, 
              color: Colors.primary, 
              fontWeight: 'bold',
            }} onPress={() => {navigation.navigate("Login");}}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 35,
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
