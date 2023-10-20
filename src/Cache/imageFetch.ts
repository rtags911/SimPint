import { useQuery,useMutation } from "react-query";
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

 return response.data;
}


export const postPin = async (data:string) => {
  const apiUrl = `${Url}/your-post-endpoint`; // Replace with the actual API endpoint
  const response = await axios.post(apiUrl, data);
  return response.data; // Assuming the response contains the posted data or a success message
};

export const usePostPinMutation = () => {
  return useMutation(postPin, {
    onMutate: (newData) => {
      // You can perform some actions before the mutation, e.g., optimistic updates
      // For example, updating the UI with the new data before the request is complete.
      // You can access the `newData` you're trying to post here.
    },
    onSuccess: () => {
      // This function is called if the mutation is successful
      // You can perform actions, show notifications, or navigate to another screen here.
    },
    onError: (error) => {
      // Handle errors here, e.g., show an error message to the user.
      console.error("Mutation error:", error);
    },
  });
};