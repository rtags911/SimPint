
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NhostClient } from "@nhost/react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

const REACT_APP_NHOST_SUBDOMAIN = "gimpimrhxygihhtbpuof";
const REACT_APP_NHOST_REGION = "eu-central-1";

const nhostConfig = {
  subdomain: REACT_APP_NHOST_SUBDOMAIN,
  region: REACT_APP_NHOST_REGION,
  clientStorageType: "expo-secure-storage",
  clientStorage: SecureStore,
};

export const nhost = new NhostClient(nhostConfig);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Define the AuthProvider component
export function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const { data: userData, refetch: refetchUser } = useQuery(
    "user",
    nhost.auth.getUser,
    {
      retry: false,
      enabled: false,
    }
  );

  const login = async (token) => {
    setAuthToken(token);
    try {
      const fetchedUserData = await nhost.auth.getUser();
      // Update the user state with fetched user data
      refetchUser();
    } catch (error) {
      // Handle error if user data fetch fails
    }
  };

  const logout = () => {
    setAuthToken(null);
    nhost.auth.signOut();
  };

  useEffect(() => {
    nhost.auth.onAuthStateChanged(async (loggedIn) => {
      if (loggedIn) {
        try {
          // Fetch user data if the user is logged in
          refetchUser();
        } catch (error) {
          // Handle error if user data fetch fails
        }
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, login, logout, user: userData }}>
      {children}
    </AuthContext.Provider>
  );
}
