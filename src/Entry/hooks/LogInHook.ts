import { useNhostClient,useAuthenticationStatus } from "@nhost/react";
import React,{useState} from "react";{}
import { useNavigation } from "@react-navigation/native";
// ... Other imports and code ...

export const LoginHooks = () => {
  const nhost = useNhostClient();
  const navigation = useNavigation<any>();


  const handleLogin = async (
    email1: string,
    password1: string,
    isUserLoggedIn: (value: boolean) => void,
    isLoading: (value: boolean) => void,
    setError: (value: string) => void,
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
        console.log("user = ", response);
        // Handle successful login here
        // Set userLoggedIn to true, update user info in context, etc.
        navigation.navigate("Home");
        isUserLoggedIn(true);
      }
    } catch (error) {
      console.error("LoginHookError", error);
      setError("An error occurred during login.");
    } finally {
      isLoading(false);
    }
  };

  return handleLogin;
};
