import axios from "axios";
import * as Crypto from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNhostClient } from "@nhost/react";
import { NhostClient } from "@nhost/nhost-js";

export const signUp = async (email, mobile, username, password) => {
  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password
  );

  
  try {
    const response = await axios.post("http://192.168.31.29:1337/api/users", {
      data: {
        email: email,
        number: mobile,
        username: username,
        password: hashedPassword,
      },
    });
    return response; // Return the response data
  } catch (error) {
    // Handle any errors (e.g., display an error message)
    console.error("Sign-up error:", error);
    throw error; // Re-throw the error so it can be caught higher up
  }
};





export const Loginnow = async (email, pass) => {
  try {
    const response = await axios.post(
      "http://192.168.31.29:1337/api/auth/local",
      {
        identifier: email,
        password: pass,
      }
    );

    return response; // Return the response data
  } catch (error) {
    // Handle any errors (e.g., display an error message)
    console.error("Login error:", error);
    throw error; // Re-throw the error so it can be caught higher up
  }
};



// export const LoginUser = async (email, pass) => {

//   const nhost = NhostClient();

  
//   try {
//  const response = await nhost.auth.signIn({
//    email: email,
//    password: password,
//  });

//     return response; // Return the response data
//   } catch (error) {
//     // Handle any errors (e.g., display an error message)
//     console.error("Login error:", error);
//     throw error; // Re-throw the error so it can be caught higher up
//   }
// };







