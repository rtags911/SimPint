// import React, { createContext, useContext, ReactNode } from "react";
// import { useNhostClient } from "@nhost/react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// type AuthContextType = {
//   login: (email: string, password: string) => Promise<any>;
//   logout: () => Promise<any>;
//   getUser: () => Promise<any>;
//   getJwt: () => Promise<string | null>;
//   isLoggedIn: () => Promise<boolean>;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const nhost = useNhostClient();

//   const login = async (email: string, password: string) => {
//     try {
//       const response = await nhost.auth.signIn({
//         email,
//         password,
//       });

//       if (response.error) {
//         console.log("errorContext", response.error);
//       } else {
//         await AsyncStorage.setItem(
//           "jwt",
//           response.session?.accessToken.toString() || ""
//         );
//         await AsyncStorage.setItem("userLoggedIn", "true");
//         await AsyncStorage.setItem("email", email);
//         console.log("AuthContextlogs", { response });

//         return response;
//       }
//     } catch (error) {
//       console.log("AuthContext", error);
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       const token = await AsyncStorage.removeItem("jwt");
//       const user = await AsyncStorage.removeItem("userLoggedIn");
//       const email = await AsyncStorage.removeItem("email");
//       const ifLoggedout = await nhost.auth.signOut();
//       console.log("AuthContext", { token, user, email, ifLoggedout });

//       if (!ifLoggedout.error) {
//         throw ifLoggedout.error;
//       }
//       if (token == null && user == null && email == null) {
//         return true;
//       }
//     } catch (error) {
//       console.log("AuthContextLogout", error);
//       throw error;
//     }
//   };

//   const getUser = async () => {
//     try {
//       const user = await nhost.auth.getUser();
//       console.log("AuthContextgetUser = ", { user });
//       return user;
//     } catch (error) {
//       console.log("AuthContextgetUser", error);
//       throw error;
//     }
//   };

//   const getJwt = async () => {
//     return await AsyncStorage.getItem("jwt");
//   };

//   const isLoggedIn = async () => {
//     try {
//       const isLoading = await nhost.auth.getAuthenticationStatus();
//       const userLogged = isLoading.isAuthenticated;
      
//       console.log("AuthContextisLoggedIn = ", { isLoading });
//       return userLogged !== null;
//     } catch (error) {
//       console.log("AuthContextisLoggedIn", error);
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ login, logout, getUser, getJwt, isLoggedIn }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
