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
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUser } from "../../Cache/imageFetch";
const PinScreen = ({ route }: any) => {
  const { title, images,userid} = route.params;
  console.log("PinScreen",userid)
 const {url} = useMainScreenHooks();

 const [AvatarUrl, SetAvatar] = useState<string | null>("");
 const [name, setName] = useState<string | null>("");

  const navigation = useNavigation();
  const [ratio, setRatio] = useState(1);
  const imageSource = { uri: String(url) || undefined };
const isFocused = useIsFocused();

  useEffect(() => {
    if (images) {
      Image.getSize(images, (width, height) => setRatio(width / height));
    }
  }, []);
  console.log("MainScreen",url)
  const handleBack = () => {
    navigation.goBack();
  };


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the screen is focused
        if (isFocused) {
          const userDisplayName = await AsyncStorage.getItem("OnScreeName");
          const userAvatarUrl = await AsyncStorage.getItem("OnScreenUrl");

          setName(userDisplayName);
          SetAvatar(userAvatarUrl);

          const response = await fetchUser(userid); // Call the fetchUserPins function with the user ID
          // Set pins data in the state
        } else {
          // Clear AsyncStorage when the screen is not focused (e.g., when going back)
          await AsyncStorage.removeItem("OnScreeName");
          await AsyncStorage.removeItem("OnScreenUrl");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userid, isFocused]);

   const handleToProfile = () => {
     navigation.navigate("UserProfile", {
       UserId: userid
     });
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
              source={{
                uri: AvatarUrl || "../../../assets/22_Profile.jpg",
              }}
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
