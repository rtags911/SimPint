import * as React from "react";
import { Text, View ,Alert} from "react-native";
import { Button, Buttontext } from "../../style/welcomestyle";
import {
  Profile,
  ProfileImage,
  ProfileText,
  Logout,
  LogoutButton,
  ProfileEmailText,
} from "../../style/PinStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSignOut } from "@nhost/react";
import nhost from "../../apis/constNhost";
import { useNavigation } from "@react-navigation/native";
import useAuthContext from "../../apis/useAuthContext";
import { useMainScreenHooks } from "../Hooks/MainScreens";
import Toast from "react-native-toast-message";

function PinProfile() {
  const navigation = useNavigation();


 const { name, email, isLoading, url, handleLogout } = useMainScreenHooks();
    console.log("profile", url);


  return (
    <Profile>
      <Logout>
        <LogoutButton onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={45} />
        </LogoutButton>
      </Logout>
      <ProfileImage
        source={
          url ? { uri: url } : require("../../../assets/Image/dota2.jpg")
        }
      />

      <ProfileText>{isLoading ? "Loading..." : name}</ProfileText>
      <ProfileEmailText>{isLoading ? "Loading..." : email}</ProfileEmailText>
        <Toast/>
    </Profile>
  );
}

export default PinProfile;
  