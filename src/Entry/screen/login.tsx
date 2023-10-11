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
import { useAuth } from "./../../apis/useAuthContext";
import React, { useState,useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Alert, ActivityIndicator } from "react-native";
import { LoginUser} from "../../apis/Signup_Users";

import { useNavigation } from "@react-navigation/native";
import { AuthMachine, useAuthenticationStatus , useAuthInterpreter} from "@nhost/react";



const Login = () => {
  const { isAuthenticated, loading, user } = useAuthInterpreter();
      
  const navigation = useNavigation();
  const [email, setTextEmail] = React.useState("");
  const [password, setTextPass] = React.useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [loading, setIsLoading] = useState(false);

 const { login } = useAuth();

 const { authToken } = useAuth();
 useEffect(() => {
   // You can safely access `auth` here
   console.log(authToken);
 }, []);

  const handleLogin = async () => {
    console.log("first", email);
    console.log("fffs", password);

    try {
      const response = await LoginUser(email, password);
      //const response = await signInEmailPassword(email,pass);

      if (response.error) {
        console.log("error", response.error);
      } else {

        authToken(response.session?.accessToken);
        const isAuthenticated = useAuthenticationStatus();
        
        if (isAuthenticated) {
          // User is authenticated, navigate to the "Home" screen
          navigation.navigate("Home");
        } else {
          // Handle the case where the user is not authenticated
          console.log("User is not authenticated");
        }

        console.log(response);
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
            defaultValue={password}
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