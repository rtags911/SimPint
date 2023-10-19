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
import { useNavigation } from "@react-navigation/native";
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

  const onback = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDisplayName = await AsyncStorage.getItem("userDisplayName");
        const userAvatarUrl = await AsyncStorage.getItem("userAvatarUrl");
        const userEmail = await AsyncStorage.getItem("userEmail");
        setEmail(userEmail);
        setName(userDisplayName)
        SetAvatar(userAvatarUrl);
        const response = await fetchUserPins(users); // Call the fetchUserPins function with the user ID
     // Set pins data in the state
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [users]);

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
          <ProfileText>
            {isLoading ? "Loading..." : name}
          </ProfileText>
          <ProfileEmailText>
            {isLoading ? "Loading..." : email}
          </ProfileEmailText>
          <Toast />
       

    </Profile2>
  );
}

export default ProfileUser;
