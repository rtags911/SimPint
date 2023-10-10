import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

import {
  SafeVi,
  TextSafe,
  Texts,
  View_Holder2,
  Text_Holder,
  View_BtoLog,
  TextBtoLog,
  ViewsButton,
  View_Pos,
  Texthold2,
  TextButton_signUp2,
  Button_signUp2,
} from "../../screen/style-log/Safe";

import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Alert, ActivityIndicator } from "react-native";
import { LoginUser } from "../../apis/Signup_Users";
import { useSignOut,useAuthInterpreter } from "@nhost/react";
import useAuthStore from "../../apis/AuthStore";
import{useSignInEmailPassword} from "@nhost/react";
import nhost from '../../apis/constNhost';
import { useNavigation } from "@react-navigation/native";



const Login = () => {
    const { signOut } = useSignOut();
    const logout = nhost.auth.signOut();
  const [email, setTextEmail] = React.useState("");
  const [pass, setTextPass] = React.useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const setAuthToken = useAuthStore((state) => state.setAuthToken);
  const today = useAuthInterpreter();
const { signInEmailPassword } = useSignInEmailPassword();

const HandleLogout = () => {
setAuthToken(null);
signOut();
nhost.auth.signOut();
Alert.alert("Success", "Login Successful", [
  { text: "OK", onPress: () => navigation.navigate("Home") },
]);


};
  const handleLogin = async () => {
    console.log("first", email);
    console.log("fffs", pass);
     
    try {

       const loginResponse = await LoginUser(email, pass);
          
       //const response = await signInEmailPassword(email,pass);
        if(loginResponse.error) {
            console.log(loginResponse.error);
        }else {
             setAuthToken(loginResponse.session?.accessToken);
             console.log(loginResponse);
             navigation.navigate("Home");
        }

         

    } catch (error) {
      // Display an error alert
      alert("Login Error");

      console.error("Login error:", error);
    }
  };

  
  


  return (
    <SafeVi>
      {/* Login TITLE CARD AND BACK BUTTON */}
      <ViewsButton>
        <TextSafe>Hey Welcome Back!</TextSafe>
      </ViewsButton>
      <Texts>Hello again, You have been missed.</Texts>

      <View_Pos>
        {/*  TEXT HOLDER FOR EMAIL AND PASS */}
        <View_Holder2>
          <Text_Holder>
            <Text>Email Address</Text>
          </Text_Holder>

          <Texthold2
            placeholder="Email"
            onChangeText={(newText) => setTextEmail(newText)}
            defaultValue={email}
          ></Texthold2>
        </View_Holder2>

        <View_Holder2>
          <Text_Holder>
            <Text>Password</Text>
          </Text_Holder>

          <Texthold2
            placeholder="Password"
            onChangeText={(newText) => setTextPass(newText)}
            defaultValue={pass}
            secureTextEntry={isPasswordShown}
          ></Texthold2>

          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              paddingTop: 55,
              right: 10,
            }}
          >
            {isPasswordShown == true ? (
              <Ionicons name="eye-off" size={30} color="black" />
            ) : (
              <Ionicons name="eye" size={30} color="black" />
            )}
          </TouchableOpacity>
        </View_Holder2>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 40,
            marginBottom: -30,
          }}
        >
          <Checkbox
            style={{
              marginRight: 10,
            }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          ></Checkbox>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Remember Me
          </Text>
        </View>

        <Button_signUp2 onPress={handleLogin}>
          <TextButton_signUp2>Login</TextButton_signUp2>
        </Button_signUp2>

        <View_BtoLog>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <TextBtoLog>Don't have an account? Register</TextBtoLog>
            {loading && <ActivityIndicator size="large" />}
          </Pressable>
        </View_BtoLog>
      </View_Pos>
    </SafeVi>
  );
};


export default Login;