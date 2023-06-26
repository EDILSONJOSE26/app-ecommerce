import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { BackIcon, Colors } from '../theme/constants';
export default function Profile({ navigation }) {
  const [brand, setBrand] = useState("Nike");   // determinar qual marca de sapatos é mostrada
  const pds = [
    require("../assets/product-images/test/pd-1.png"),
    require("../assets/product-images/test/pd-2.png"),
    require("../assets/product-images/test/pd-3.png"),
    require("../assets/product-images/test/pd-4.png"),
    require("../assets/product-images/test/pd-5.png"),
  ]
  return (
    <SafeAreaView style={styles.container}>

      {/* Perfil top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
          {BackIcon('ar')}
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Image source={require("../assets/icons/sneaker-icon.png")} style={{
            width: 40,
            height: 30,
            transform: [{ rotate: '20deg' }],
          }} />
        </View>

        <View>
          <FontAwesome5 name="bookmark" size={22} color={Colors.titleColor} style={{ alignSelf: 'flex-end' }} />
        </View>
      </View>

      {/* Linha */}
      <View style={{ borderWidth: 0.4, borderColor: Colors.textPrimary, marginTop: 40 }}></View>

      {/*perfil card */}
      <View style={{ marginVertical: 10, flexDirection: 'row', paddingVertical: 20, alignItems: 'center' }}>

        {/* Imagem do perfil */}
        <View style={{ flex: 1 }}>
          <Image source={require("../assets/login/profile-img.png")} style={{ width: 50, height: 50, borderRadius: 50 }} />
        </View>

        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 14.5, fontWeight: 'bold', color: Colors.textPrimary }}>Bem vindo</Text>
          <Text style={{ fontSize: 16.5, fontWeight: 'bold', marginTop: 5, color: Colors.titleColor }}>Edilson José</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Ionicons name="mail-unread-outline" size={24} color="black" />
        </View>
      </View>

      {/* Linha */}
      <View style={{ borderWidth: 0.4, borderColor: Colors.textPrimary }}></View>

      {/* Opções do perfil */}
      <View style={{ marginTop: 30 }}>

        <TouchableOpacity style={{ flexDirection: 'row', padding: 17, marginBottom: 10 }}>
          <Feather name="settings" size={24} color="black" style={{ marginRight: 25 }} />
          <Text style={{ fontSize: 16, color: Colors.titleColor }}>Configurações</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {BackIcon('en')}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', padding: 17, marginBottom: 10 }}>
          <Ionicons name="card-outline" size={24} color="black" style={{ marginRight: 25 }} />
          <Text style={{ fontSize: 16, color: Colors.titleColor }}>Meus Cartões</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {BackIcon('en')}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', padding: 17, marginBottom: 10 }}>
          <Feather name="package" size={24} color="black" style={{ marginRight: 25 }} />
          <Text style={{ fontSize: 16, color: Colors.titleColor }}>Pedidos</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {BackIcon('en')}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', padding: 17, marginBottom: 10 }}>
          <FontAwesome name="exchange" size={24} color="black" style={{ marginRight: 25 }} />
          <Text style={{ fontSize: 16, color: Colors.titleColor }}>Configurações</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {BackIcon('en')}
          </View>
        </TouchableOpacity>

      </View>

      {/*Card suporte*/}
      <View style={{ padding: 20, flexDirection: 'row', backgroundColor: '#ffdac7', alignItems: 'center', borderRadius: 20, marginTop: 30 }}>
        <FontAwesome5 name="headset" size={50} color={Colors.primary} />
        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 20, color: Colors.primary }}>Como podemos ajudá-lo?</Text>
      </View>

      {/*Política de privacidade */}
      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 13, color: Colors.textPrimary }}>Política de privacidade</Text>
        <Ionicons name="chevron-forward" size={24} color="black" style={{ marginRight: 20, marginLeft: 5 }} />
        <Text style={{ fontSize: 13, color: Colors.textPrimary }}>Sobre</Text>
        <Ionicons name="chevron-forward" size={24} color="black" style={{ marginRight: 20, marginLeft: 5 }} />
        <Text style={{ fontSize: 13, color: Colors.textPrimary }}>Português</Text>
        <Ionicons name="chevron-down" size={24} color="black" style={{}} />
      </View>

      {/* Botão de confirmação da compra

      <View style={{flex:1, justifyContent: 'flex-end'}}>
        <TouchableOpacity style={{
            backgroundColor: Colors.primary, 
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
            marginHorizontal: 0,
            marginVertical: 20,
            borderRadius: 15,
            flexDirection: 'row'
            }} onPress={() => navigation.navigate("Cart")}>
              <Entypo name="lock" size={24} color="white" />
            <Text style={{color: "#fff", marginLeft: 10, fontWeight: 'bold'}}>Confirm</Text>
          </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    marginTop: 10,
    backgroundColor: Colors.background,
  },
});

