import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FONTFAMILY ,Colors} from '../../theme/constants';
export default function Login({navigation}) {
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

      {/* Logins em redes sociais */}
      <View style={{marginBottom: 25,justifyContent: 'space-between'}}>
        {/* linha */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontWeight: 'bold', color: Colors.titleColor, fontSize: 17, marginHorizontal: 10}}>Login</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>

        {/* login no google */}
        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../../assets/icons/google.png")} style={styles.icon_image}/>
          <Text style = {{ fontFamily : FONTFAMILY.cairo }}>login Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../../assets/icons/facebook.png")} style={styles.icon_image}/>
          <Text>login Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../../assets/icons/apple-1.png")} style={styles.icon_image}/>
          <Text>login Apple</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={{
              textDecorationLine: 'underline',
              marginLeft: 10, 
              color: Colors.primary, 
              fontWeight: 'bold',
            }} onPress={() => {navigation.navigate("Sign Up");}}>Sign Up</Text>
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
  icon_image : {
    width: 20, height: 20, marginRight: 25
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
  login_images: {
    width: 280,
    height: 380,
    borderRadius: 15,
    marginRight: 10,
  }
});
