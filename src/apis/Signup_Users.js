import axios from "axios";
import * as Crypto from "expo-crypto";
//import nhost from ".././apis/constNhost";

import { NhostClient } from "@nhost/react";

const REACT_APP_NHOST_SUBDOMAIN = "kwivsrhgpywxqalkwedn";
const REACT_APP_NHOST_REGION = "ap-southeast-1";

export const nhostConfig = {
  subdomain: REACT_APP_NHOST_SUBDOMAIN,
  region: REACT_APP_NHOST_REGION,
};

export const nhost = new NhostClient(nhostConfig);





export const signUp = async (email, mobile, username, password) => {
  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password
  );

  
  try {
    const response = await axios.post(" ", {
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





export const Loginnow = async (email, password) => {
  try {
    const response = await axios.post("http://192.168.1.13:1337/api/auth/local", {
      identifier: email,
      password: password,
    });
    return response; // Return the response data
  } catch (error) {
    // Handle any errors (e.g., display an error message)
    console.error("Login error:", error);
    throw error; // Re-throw the error so it can be caught higher up

  }
};

// //nhost
// export const LoginUser = async (email, pass) => {
//   try {
//  const response = await nhost.auth.signIn(
//   {
//    email: email,
//    password: pass,
//  }
//  );

//     return response;
//      // Return the response data
//   } catch (error) {
//     // Handle any errors (e.g., display an error message)
//     console.error("Login error:", error);
//     throw error; // Re-throw the error so it can be caught higher up
//   }
// };








