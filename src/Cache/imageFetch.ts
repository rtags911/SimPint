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

export const useProfilePins = async(userId:any) => {
    const apiUrl = `${Url}/userpinprof?userid=${userId}`;
    const response = await axios.get(apiUrl);
    console.log("ID", userId);
    console.log("QUERY",response);

    const data = response.data.pins;
    
     console.log("QUERY", response); 
    return data;
  
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


export const uploadPin = async (data:any) => {
  console.log("yesterday",data);
  const stringWithQuotes = data.userid;

  const uuid = await stringWithQuotes.replace(/^"|"$/g, "");
  console.log("uuid",uuid);


  const url = data.image;
  const imageUrl = await url.split("&token")[0];
   const encodedUrl = await encodeURIComponent(imageUrl.replace(/Images\//g, "Images%2F"));

   const apiUrl = `${Url}/upload?userid=${uuid}&image=${encodedUrl}&title=${data.title}`;
    console.log("response", apiUrl);

   const response = await axios.post(apiUrl);
 

  try {
   
    if (response.status === 200) {
      // Upload was successful, return a success message
      return "Successful";
    } else {
      // Handle other status codes if needed
      return "Error";
    }
  } catch (error) {
    console.log("HOOKS",response.status)
    throw error;
  }
};


