import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import {
  PinScreenBar,
  PinScreenText,
  PinScreens,
  PinScreenImage,
  PinScreenButton,
  PinScreenToProfile,
  PinScreenToProfileImage,
  PinScreenToProfileText
} from "../../style/PinStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMainScreenHooks } from "../Hooks/MainScreens";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const PinScreen = ({ route }: any) => {
  const { id, title, images } = route.params;

 const { name, email, isLoading, url } = useMainScreenHooks();

  const navigation = useNavigation();
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (images) {
      Image.getSize(images, (width, height) => setRatio(width / height));
    }
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

   const handleToProfile = () => {
    //  navigation.navigate("ProfileScreen");

    //Include Next to Profile of the user
    
   };

  const Button = () => (
    <PinScreenButton onPress={handleBack}>
      <Ionicons name="ios-chevron-back-outline" size={35} color="white" />
    </PinScreenButton>
  );

  return (
    <PinScreens>
      <ScrollView>
        <PinScreenBar>
          <PinScreenImage
            source={{ uri: images }}
            style={{ aspectRatio: ratio }}
          />
          {/*  USE THIS AREA FOR CLICKABLE VIEW TO GO TO PROFILE*/}
          <PinScreenToProfile onPress={handleToProfile}>
            <PinScreenToProfileImage
              source={{uri:url}}
            ></PinScreenToProfileImage>
            <PinScreenToProfileText>{name}</PinScreenToProfileText>
          </PinScreenToProfile>

          <PinScreenText>{title}</PinScreenText>
        </PinScreenBar>
      </ScrollView>
      {Button()}
    </PinScreens>
  );
};

export default PinScreen;
