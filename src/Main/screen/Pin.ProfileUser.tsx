import React, { useEffect, useState } from "react";
import { Text, View, Alert } from "react-native";
import { Button, Buttontext } from "../../style/welcomestyle";
import {
  Profile2,
  ProfileImage,
  ProfileText,
  Logout2,
  LogoutButton2,
  ProfileEmailText,
} from "../../style/PinStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import useAuthContext from "../../apis/useAuthContext";
import { useMainScreenHooks } from "../Hooks/MainScreens";
import Toast from "react-native-toast-message";
import { fetchUserPins } from "../../Cache/imageFetch";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfileUser({ route }: any) {
  const navigation = useNavigation();

  const users = route.params.UserId;
  console.log("PROFUSER", users);

  const [user, setUser] = useState(null); // State for user data
  const [pins, setPins] = useState([]); // State for pins data
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string | null>("");
  const [AvatarUrl, SetAvatar] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");
  console.log("profileUser ", name, AvatarUrl);
  const isFocused = useIsFocused();

  const onback = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the screen is focused
        if (isFocused) {
          const response = await fetchUserPins(users);
          // Call the fetchUserPins function with the user ID
          // Set pins data in the state
          setName(response.user.displayName);
          SetAvatar(response.user.avatarUrl);
          setEmail(response.user.email);

          console.log("Pinscreens", email, name, AvatarUrl);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [user, isFocused]);
  return (
    <Profile2>
      <Logout2>
        <LogoutButton2 onPress={onback}>
          <Ionicons name="chevron-back-outline" size={45} />
        </LogoutButton2>
      </Logout2>
      <ProfileImage
        source={
          AvatarUrl
            ? { uri: AvatarUrl }
            : require("../../../assets/Image/dota2.jpg")
        }
      />
      <ProfileText>{name}</ProfileText>
      <ProfileEmailText>{email}</ProfileEmailText>
      <Toast />
    </Profile2>
  );
}

export default ProfileUser;
