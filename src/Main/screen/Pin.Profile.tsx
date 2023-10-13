import * as React from "react";
import { Text, View ,Alert} from "react-native";
import { Button, Buttontext } from "../../style/welcomestyle";


import { useSignOut } from "@nhost/react";
import nhost from "../../apis/constNhost";
import { useNavigation } from "@react-navigation/native";



function PinProfile() {
  const navigation = useNavigation();
    const { signOut } = useSignOut();
  


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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Profile Screen</Text>
      <Button onPress={handleLogout}>
        <Buttontext>LOGOUT</Buttontext>
      </Button>
    </View>
  );
}

export default PinProfile;
  