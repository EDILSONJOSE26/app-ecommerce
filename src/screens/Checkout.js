import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import {Colors} from "../theme/constants";



export default function Checkout({navigation}) {
  const [brand, setBrand] = useState("Nike");   // estado para determinar que marca é mostrada
  const pds = [
    require("../assets/product-images/test/pd-1.png"),
    require("../assets/product-images/test/pd-2.png"),
    require("../assets/product-images/test/pd-3.png"),
    require("../assets/product-images/test/pd-4.png"),
    require("../assets/product-images/test/pd-5.png"),
  ]

  return (
    <SafeAreaView style={styles.container}>

      {/* pagina inicio top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {navigation.navigate("Cart")}}>
        <Ionicons name="chevron-back" size={24} color={Colors.titleColor} />
        </TouchableOpacity>

        <View style={{flex: 1}}>
        <Text style={{color: Colors.titleColor, fontWeight:'bold', alignSelf: 'center', fontSize: 16}}></Text>
        </View>

        <View style={{flex: 1}}>
            <FontAwesome5 name="bookmark" size={22} color={Colors.titleColor} style={{alignSelf: 'flex-end'}} />
        </View>
      </View>

      <View style={{marginTop: 20}}>

        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.titleColor, marginTop: 15, marginBottom: 17}}>Forma de pagamento</Text>

        {/*Cartões de crédito*/}

        <View style={{flexDirection: 'row', backgroundColor: Colors.titleColor, padding: 15,marginVertical:7, alignItems: 'center'}}>
          <View style={{flex: 1}}>
           <Image source={require("../assets/product-images/test/visa.png")} style={{width: 80, height: 30}}/>  
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{color: '#fff'}}>****4358</Text>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
          </View>
          
        </View>

        <View style={{flexDirection: 'row', backgroundColor: Colors.titleColor, padding: 15,marginVertical:7, alignItems: 'center'}}>
          <View style={{flex: 1}}>
           <Image source={require("../assets/product-images/test/mastercard.png")} style={{width: 80, height: 30}}/>  
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{color: '#fff'}}>****3123</Text>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
          </View>
          
        </View>

        <View style={{flexDirection: 'row', backgroundColor:"#fff", padding: 20, marginVertical:7, justifyContent: 'center', borderWidth: 1, borderColor: Colors.textPrimary}}>
          <Text>Add Novo Cartão</Text>
        </View>

      </View>



    {/* Botão de confirmação da compra */}
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
          }} onPress={() => Alert.alert("", "Pagamento processado. Obrigado.")}>
            <Entypo name="lock" size={24} color="white" />
          <Text style={{color: "#fff", marginLeft: 10, fontWeight: 'bold'}}>Efetuar o pagamento</Text>
        </TouchableOpacity>
      </View>


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

