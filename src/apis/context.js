import React, { useState, useContext, useEffect } from "react";
import { FetchUserStatus } from "./ApiFetch";


export const UserLoginProvider = ({ children }) => {


  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Add this line

  useEffect(() => {
    const fetchUserStatus = async () => {
      setIsLoading(true);
      try {
        const isLoggedIn = await checkUserStatus();
        setUserLoggedIn(isLoggedIn);
      } catch (e) {
        console.error(e);
        setError(e.toString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserStatus();
  }, []);

  return (
    <UserLoginContext.Provider
      value={{ userLoggedIn, setUserLoggedIn, isLoading, error }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

export const useUserLogin = () => useContext(UserLoginContext);
