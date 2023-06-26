import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {  FontAwesome5 } from '@expo/vector-icons';
import cartItems from './CartItems';
import { BackIcon , Colors } from '../theme/constants';


export default function Cart({ navigation }) {
  const [brand, setBrand] = useState("Nike");   // estado para determinar que marca de sapatos é mostrada
  let totalPrice = 0;

  return (
    <SafeAreaView style={styles.container}>

      {/* Homepage top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
          {/* <Ionicons name="chevron-forward" size={24} color="black" /> */}
          {BackIcon('ar')}
          {/* <Ionicons name="chevron-back" size={24} color={Colors.titleColor} /> */}
        </TouchableOpacity>

        <View >
          <Text style={{ color: Colors.titleColor, fontWeight: 'bold', alignSelf: 'center' }}>Carrinho</Text>
        </View>

        <View >
          <FontAwesome5 name="bookmark" size={22} color={Colors.titleColor} style={{ alignSelf: 'flex-end' }} />
        </View>
      </View>


      <ScrollView showsVerticalScrollIndicator={false}>

        {/* itens do carrinho*/}
        <View style={{ marginTop: 20 }}>

          {
            cartItems.map((item, index) => {
              // atualizar o preço total
              totalPrice += parseInt(item.price);
              return (
                <View key={index} style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 15, marginVertical: 7 }}>
                  <View style={{ backgroundColor: Colors.background, padding: 15, borderRadius: 15, marginRight: 10 }}>
                    <Image source={item.images[0]} style={{ width: 80, height: 50 }} />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, color: Colors.titleColor, marginBottom: 2 }}>{item.name}</Text>
                    <Text style={{ color: Colors.textPrimary, marginBottom: 5 }}>Sapato masculino</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                      <View style={{ flexDirection: 'row', flex: 3, alignItems: 'baseline' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: Colors.titleColor, marginBottom: 2 }}>R${item.price}</Text>
                        <Text></Text>
                      </View>

                      <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: Colors.background, marginLeft: 15 }}>
                        <View style={{ backgroundColor: '#fff', paddingVertical: 0, paddingHorizontal: 9, marginHorizontal: 5, borderRadius: 6 }}>
                          <Text style={{ fontSize: 17, color: Colors.titleColor }}>-</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 2 }}>1</Text>
                        <View style={{ backgroundColor: Colors.primary, paddingVertical: 0, paddingHorizontal: 9, marginHorizontal: 5, borderRadius: 6 }}>
                          <Text style={{ fontSize: 17, color: "#fff" }}>+</Text>
                        </View>
                      </View>

                    </View>
                  </View>

                </View>
              );
            })
          }

        </View>


        {/* Total */}
        <View style={{ marginTop: 50 }}>

          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: Colors.titleColor, flex: 1 }}>Valor Total </Text>
            <View>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: Colors.titleColor, flex: 1, }}>
                {totalPrice}<Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.titleColor, flex: 1, }}>-</Text>
              </Text>
            </View>
          </View>

          {/* button F compra */}
          <TouchableOpacity style={{
            backgroundColor: Colors.primary,
            alignItems: 'center',
            paddingVertical: 20,
            marginHorizontal: 0,
            marginVertical: 20,
            borderRadius: 15
          }} onPress={() => navigation.navigate("Checkout")}>
            <Text style={{ color: "#fff" }}>Finalizar compra</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>


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

