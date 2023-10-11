import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios"; // Import Axios
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const { data: userData, refetch: refetchUser } = useQuery(
    "user",
    fetchUserData,
    {
      retry: false,
      enabled: false,
    }
  );

  async function fetchUserData() {
    try {
      const response = await axios.get(
        "http://192.168.1.13:1337:1337/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      // Handle error if user data fetch fails
      throw error;
    }
  }

  const login = async (token) => {
    setAuthToken(token);
    try {
      // Update the user state with fetched user data
      await refetchUser();
    } catch (error) {
      // Handle error if user data fetch fails
    }
  };

  const logout = () => {
    setAuthToken(null);
    // Clear any stored authentication data or tokens
    // Implement any logout logic specific to your app
  };

  useEffect(() => {
    // Add your logic here to check if the user is already authenticated
    // and set the authToken accordingly when the component mounts.
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, login, logout, user: userData }}>
      {children}
    </AuthContext.Provider>
  );
}
