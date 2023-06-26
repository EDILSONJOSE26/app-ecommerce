import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Alert, Platform } from 'react-native';
import { Colors, FONTFAMILY } from '../../theme/constants';
import CustomTextInput from '../../components/TextInput';
import CustomText from '../../components/Text';

export default function SignUpAsProvider({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setPickedImagePath] = useState(null);
  const showImagePicker = async () => {
    // Pedir ao usuario autorização para acessar à biblioteca multimédia
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Recusou-se a permitir que esta aplicação ecesse às suas fotografias!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    // Explore the result
    // console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setModalVisible(false)
    }
  }
  const openCamera = async () => {
    // Pedir ao utilizador autorização para acessar à câmara
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Respeitamos sua escolha! Nosso aplicativo valoriza sua privacidade e respeita sua decisão de recusar o acesso à câmera.");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    // console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setModalVisible(false)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 35, }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require("../../assets/icons/sneaker-icon.png")} style={{
            width: 65,
            height: 65,
            marginTop: 10,
            transform: [{ rotate: '20deg' }],
          }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.titleColor }}>fashionFusion</Text>
        </View>
        <View style={{ marginVertical: 40, justifyContent: 'space-between' }}>
          <CustomText style={styles.title_filed} title={'Entrar como um provedor de serviços'} />
          <CustomTextInput placeholder={'Nome'} style={styles.login_fields} />
          <CustomTextInput placeholder={'email'} keyboardType="email-address" style={styles.login_fields} />
          <CustomTextInput placeholder={'Número de telefone'} keyboardType='number-pad' style={styles.login_fields} />
          <CustomTextInput placeholder={'Senha'} secureTextEntry={true} style={styles.login_fields} />
          <CustomTextInput placeholder={'Nome da Empresa'} style={styles.login_fields} />
          <CustomTextInput placeholder={'Endereço'} style={styles.login_fields} />
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <CustomText title={'Add Logo'} style={{ fontFamily: FONTFAMILY.cairoBold, marginBottom: 5 }} />
            <View style={styles.logo_container}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <FontAwesome5 name="cloud-upload-alt" size={60} color={Colors.titleColor} />
                {/* <Feather name="upload-cloud" size={30} color={Colors.white} /> */}
              </TouchableOpacity>
              <View style={styles.upload_image_container}>
                <Image style={styles.upload_image}
                  source={{ uri: image }}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.sign_button} onPress={() => { navigation.navigate("Main"); }}>
            <CustomText style={{ color: Colors.white }} title={'Cadastre-se'} />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 25, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <CustomText title={'Você já tem uma conta?'} />
            <TouchableOpacity  onPress={() => {navigation.navigate("Login");}}>
              <CustomText style={styles.login_buttton} title={'Login'} />
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => openCamera()} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <CustomText title={'Câmera'} style={{ fontFamily: FONTFAMILY.cairoBold }} />
                <Feather name="camera" size={32} color={Colors.black} style={{ marginHorizontal: 10 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => showImagePicker()} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <CustomText title={'imagem'} style={{ fontFamily: FONTFAMILY.cairoBold }} />
                <FontAwesome5 name="image" size={32} color={Colors.black} style={{ marginHorizontal: 10 }} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign name="close" size={24} color={Colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* <Text style={styles.titleText}>
          Example of Image Picker in React Native
        </Text>
        <View style={styles.contain}>
          <Image
            source={{ uri: filePath.uri }}
            style={styles.imageStyle}
          />
          <Text style={styles.textStyle}>{filePath.uri}</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => pickImage()}
          >
            <Text style={styles.textStyle}>
              Launch Camera for Image
            </Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
    marginBottom: 10
  },
  title_filed: {
    fontSize: 18,
    color: Colors.titleColor,
    marginBottom: 8,
    fontFamily: FONTFAMILY.cairoBold
  },
  login_buttton: {
    textDecorationLine: 'underline',
    marginLeft: 10,
    color: Colors.primary,
    // fontWeight: 'bold',
    fontFamily: FONTFAMILY.cairoBold
  },
  sign_button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    width: 200,
    alignSelf: 'center',
    borderRadius: 2
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    // padding: 35,
    paddingHorizontal: 15,
    paddingVertical: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  buttonClose: {
    padding: 7,
    borderRadius: 50,
    position: 'absolute',
    bottom: -10,
    left: -15,
    backgroundColor: Colors.titleColor,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
  contain: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo_container: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', height: 100, backgroundColor: Colors.white, marginBottom: 10 },
  upload_image_container: {
    borderRadius: 50,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 70,
    height: 70,

  },
  upload_image: {

    borderRadius: 50,

    flex: 1
  }

});
