import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios"; // Import Axios
import * as SecureStore from "expo-secure-store";
import nhost from "./constNhost";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient } from "react-query";
console.log("ctx", { nhost });


class AuthContext {
  async login(email1: string, password1: any) {
    try {
      const response = await nhost.auth.signIn({
        email: email1,
        password: password1,
      });
      if (response.error) {
        console.log("errorContext", response.error);
      } else {
       

        await AsyncStorage.setItem("jwt", response.session?.accessToken.toString()|| "");
        
        await AsyncStorage.setItem("userLoggedIn", "true");
        await  AsyncStorage.setItem("email", email1);
       
        console.log("AuthContextlogs", { response });
        return response;
      }
    } catch (error) {
      console.log("AuthContext", error);
      throw error;
    }
  }

  async logout() {
    try {
      const token = await AsyncStorage.removeItem("jwt");
      const user = await AsyncStorage.removeItem("userLoggedIn");
      const email =  await AsyncStorage.removeItem("email");
      const ifLoggedout = await nhost.auth.signOut();
        console.log("AuthContext", { token, user, email, ifLoggedout });
      if(!ifLoggedout.error){
        throw ifLoggedout.error;
      }if(token == null && user == null && email == null){
          return true;
      }   
    } catch (error) {
      console.log("AuthContextLogout", error);
      throw error;
    }
  }

  async getUser() {
    try {
      const user = await nhost.auth.getSession();
      console.log("AuthContextgetUser = ", { user });
      return user;
    } catch (error) {
      console.log("AuthContextgetUser", error);
      throw error;
    }
  }

  async getJwt() {
    return await AsyncStorage.getItem("jwt");
  }

  async isLoggedIn() {
    try {
      const userLoggedin = await nhost.auth.getAuthenticationStatus();
      console.log("AuthContextisLoggedIn = ", { userLoggedin });
      return userLoggedin !== null;

      return userLoggedin;
    } catch (error) {
      console.log("AuthContextisLoggedIn", error);
      throw error;
    }
  }
}
export default new AuthContext();