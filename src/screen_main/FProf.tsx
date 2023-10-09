import * as React from "react";
import { Text, View ,Alert} from "react-native";
import { Button, Buttontext } from "../style/welcomestyle";
import useAuthStore from "../apis/AuthStore";
import { Login, Welcome, Signup, Homes } from "../screen/index";
import { useSignOut } from "@nhost/react";
 

function Prof1({ navigation }: { navigation: any }) {
    const { signOut } = useSignOut();
  
  const setAuthToken = useAuthStore((state:any) => state.setAuthToken);

  const handleLogout = () => {
    // Clear the authToken when logging out
    setAuthToken(null);
    signOut();
    Alert.alert("Success", "Login Successful", [
      { text: "OK", onPress: () => navigation.navigate("Welcome") },
    ]);
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

export default Prof1;
