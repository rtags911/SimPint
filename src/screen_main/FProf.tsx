import * as React from "react";
import { Text, View ,Alert} from "react-native";
import { Button, Buttontext } from "../style/welcomestyle";
import useAuthStore from "../apis/AuthStore";
import { Login, Welcome, Signup, Homes } from "../screen/index";

 

function Prof1({ navigation }: { navigation: any }) {
  const authToken = useAuthStore((state:any) => state.authToken);
  const setAuthToken = useAuthStore((state:any) => state.setAuthToken);

  const handleLogout = () => {
    // Clear the authToken when logging out
    setAuthToken(null);

    Alert.alert("Success", "Login Successful", [
      { text: "OK", onPress: () => navigation.navigate("Welcome") },
    ]);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Home Screen</Text>
      <Button onPress={handleLogout}>
        <Buttontext>LOGOUT</Buttontext>
      </Button>
    </View>
  );
}

export default Prof1;
