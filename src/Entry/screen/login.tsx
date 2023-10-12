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
  ErrorText
} from "../../screen/style-log/Safe";

import React, { useState,useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useAuthenticationStatus } from "@nhost/react";
import { LoginHooks } from "../hooks/LogInHook";
import nhost from "../../apis/constNhost";

const Login = () => {
    
  const isAuthenticated = useAuthenticationStatus(); 
  const navigation = useNavigation();
  const [email1, setEmail] = React.useState("");
  const [password1, setPassword] = React.useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setChecked] = useState(false);
    
    const [isLoggingIn, isUserLoggedIn] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const handleLogin  = LoginHooks();
    const [error, setError] = useState("");


    const handleLoginPress = async () => {
      console.log("LogData",email1,password1);

    try {
        await handleLogin(
          email1,
          password1,
          isUserLoggedIn,
          setIsLoading,
          setError,
          setEmail,
          setPassword
        );

    }finally{
        isUserLoggedIn(false);
      }
    }


  const handleCheckboxChange = () => {
    setChecked(!isChecked); // Update the checkbox state immediately

    if (!isChecked) {
      handleCheckboxChecked();
    }
  };

  const handleCheckboxChecked = async () => {
    try {
      const test = await nhost.auth.getAccessToken();
      console.log("AuthContextlogs", { test });
      Alert.alert("Checkbox Checked", "The checkbox has been checked");
    } catch (error) {
      // Handle any errors that may occur during the async operation
      console.error("Error while checking the checkbox:", error);
    }
  };
// const handleLogin = async () => {

  //   console.log("first", email);
  //   console.log("fffs", password);

  //   try {
  //     const response = await useUserLogin(email, password);
       
  //     //const response = await signInEmailPassword(email,pass);

  //     if (response?.error) {
  //       console.log("error", response.error);
  //     } else {

       
  //       if (!isAuthenticated) {
          
  //         // User is authenticated, navigate to the "Home" screen
  //         navigation.navigate("Home");
  //       } else {
  //         // Handle the case where the user is not authenticated
  //         console.log("User is not authenticated");
  //       }

  //       console.log(response);
  //     }
  //   } catch (error) {
  //     // Display an error alert
  //     alert("Login Error");

  //     console.error("Login errorTS:", error);
  //   }
  // };

  


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
            onChangeText={(newText) => setEmail(newText)}
            value={email1}
            editable={!isLoggingIn}
          ></Texthold2>
        </View_Holder2>

        <View_Holder2>
          <Text_Holder>
            <Text>Password</Text>
          </Text_Holder>

          <Texthold2
            placeholder="Password"
            onChangeText={(newText) => setPassword(newText)}
            value={password1}
            editable={!isLoggingIn}
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
            onValueChange={handleCheckboxChange}
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

        <Button_signUp2 onPress={handleLoginPress}>
          <TextButton_signUp2>Login</TextButton_signUp2>
        </Button_signUp2>
        {isloading && <ActivityIndicator size="large" />}
        {error ? <ErrorText>{error}</ErrorText> : null}

        <View_BtoLog>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <TextBtoLog>Don't have an account? Register</TextBtoLog>
          </Pressable>
        </View_BtoLog>
      </View_Pos>
    </SafeVi>
  );
};


export default Login;