import { useQuery } from "react-query";
import { useNhostClient } from "@nhost/react";
import axios from "axios";
import { BASE_URL } from "../consts/Base";
const Url = `${BASE_URL}`;
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchPins = async (nhost:any) => {
  const apiUrl = `${Url}/showpin`;
  const response = await axios.get(apiUrl);
  return response.data.pins;
};


export const usePinsQuery = (nhost:any) => {
  return useQuery("pins", () => fetchPins(nhost));
};


export const fetchUserPins = async (userid: string) => {
  const apiUrl = `${Url}/userprof?userid=${userid}`;
  const response = await axios.get(apiUrl);

  // Extract user data
  const userData = response.data.user;

  // Store user data in AsyncStorage
  try {
    await AsyncStorage.setItem("userDisplayName", userData.displayName);
    await AsyncStorage.setItem("userAvatarUrl", userData.avatarUrl);
    await AsyncStorage.setItem("userEmail", userData.email);
  } catch (error) {
    console.error("Error storing user data in AsyncStorage:", error);
  }

  return response.data;
};

export const fetchUser = async (userid: string) => {
const apiUrl = `${Url}/screen?userid=${userid}`;
const response = await axios.get(apiUrl);

 const userData = response.data.user;

 try {
   await AsyncStorage.setItem("OnScreeName", userData.displayName);
   await AsyncStorage.setItem("OnScreenUrl", userData.avatarUrl);
  

 } catch (error) {
   console.error("Error storing user data in AsyncStorage:", error);
 }

 return response.data;
}