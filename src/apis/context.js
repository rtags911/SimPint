// import React, { createContext, useState, useContext, useEffect } from "react";
// import { checkUserStatus } from "../apis/Userhelper.ts";

// const UserLoginContext = createContext();
// export const UserLoginProvider = ({ children }) => {


//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null); // Add this line

//   useEffect(() => {
//     const fetchUserStatus = async () => {
//       setIsLoading(true);
//       try {
//         const isLoggedIn = await checkUserStatus();
//         setUserLoggedIn(isLoggedIn);
//       } catch (e) {
//         console.error(e);
//         setError(e.toString());
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUserStatus();
//   }, []);

//   return (
//     <UserLoginContext.Provider
//       value={{ userLoggedIn, setUserLoggedIn, isLoading, error }}
//     >
//       {children}
//     </UserLoginContext.Provider>
//   );
// };

// export const useUserLogin = () => useContext(UserLoginContext);
