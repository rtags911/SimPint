import { useNhostClient, useAuthenticationStatus } from "@nhost/react";
import React, { useState } from "react";
{
}
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ... Other imports and code ...

export const LoginHooks = () => {
  const nhost = useNhostClient();
  const navigation = useNavigation<any>();

  // const authService = new AuthService(nhost);

  const logAsyncStorageValues = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      const jwt = await AsyncStorage.getItem("jwt");
      const userLoggedIn = await AsyncStorage.getItem("userLoggedIn");
      const email = await AsyncStorage.getItem("email");
      const name = await AsyncStorage.getItem("Name");
      const profile = await AsyncStorage.getItem("Profile");
      console.log("User:", user ? JSON.parse(user) : null);
      console.log("JWT:", jwt ? JSON.parse(jwt) : null);
      console.log("User Logged In:", userLoggedIn);
      console.log("Email:", email);
      console.log("Name:", name ? JSON.parse(name) : null);
       console.log("Profile:", profile ? JSON.parse(profile) : null);
    } catch (error) {
      console.error("Error while logging AsyncStorage values:", error);
    }
  };

  const handleLogin = async (
    email1: string,
    password1: string,
    isUserLoggedIn: (value: boolean) => void,
    isLoading: (value: boolean) => void,
    setError: (value: string) => void
  ) => {
    isLoading(true);

    if (!email1 || !password1) {
      setError("Email and Password cannot be empty.");
      isLoading(false);
      return;
    }

    try {
      // Use the useSignInEmailPassword hook to sign in with email and password
      const response = await nhost.auth.signIn({
        email: email1,
        password: password1,
      });

      if (response.error) {
        console.log("LoginHookError", response.error);
        setError("Invalid Email or Password.");
      } else {
        isUserLoggedIn(true);
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(response.session?.user)
        );
        await AsyncStorage.setItem(
          "jwt",
          JSON.stringify(response.session?.accessToken)
        );
        await AsyncStorage.setItem("userLoggedIn", "true");
        await AsyncStorage.setItem("email", email1);
        await AsyncStorage.setItem(
          "Name",
          JSON.stringify(await nhost.auth.getUser()?.displayName)
        );
        await AsyncStorage.setItem(
          "Profile",
          JSON.stringify(await nhost.auth.getUser()?.avatarUrl)
        );

         await AsyncStorage.setItem(
           "userID",
           JSON.stringify(await nhost.auth.getUser()?.id)
         );


        // const response = AuthService.login(email1, password1);
        logAsyncStorageValues();
          
        console.log("user = ", response.session?.user);
        // Handle successful login here
        // Set userLoggedIn to true, update user info in context, etc.
        navigation.navigate("Home");
      }

      // if((await response).error){
      //   console.log("LoginHookError", response);
      //   setError("Invalid Email or Password.");

      // }else{

      //      console.log("user = ", response);
      //      // Handle successful login here
      //      // Set userLoggedIn to true, update user info in context, etc.
      //      navigation.navigate("Home");
      //      isUserLoggedIn(true);

      // }
    } catch (error) {
      console.error("LoginHookError", error);
      setError("An error occurred during login.");
    } finally {
      isLoading(false);
    }
  };

  return handleLogin;
};
