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

function PinProfile() {
  const navigation = useNavigation();


 const { name, email, isLoading,url } = useMainScreenHooks();
    console.log("profile", url);

  const handleLogout = async () => {
    // Clear the authToken when logging out
     const logout =  await nhost.auth.signOut();
     console.log("logout", logout);
      if (logout.error) { 
          Alert.alert("Success", "logout Failed");
    
      } else {
Alert.alert("Success", "Logout Successful", [
  { text: "OK", onPress: () => navigation.navigate("Welcome") },
]);
      
      }
  
  };

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
    </Profile>
  );
}

export default PinProfile;
  