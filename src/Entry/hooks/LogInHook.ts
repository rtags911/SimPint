import React from "react";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../apis/useAuthContext";

export const LoginHooks = () => {
const navigation = useNavigation<any>();


const handleLogin = async (
    email1:string,
    password1:string,
    isUserLoggedIn:(value: boolean )=> void,
    isLoading:(value: boolean )=> void,
    setError:(value: string )=> void,
    setPassword:(value: string )=> void,
    setEmail:(value: string )=> void
) => {
    isLoading(true);
      if (!email1 || !password1) {
      setError("Email and Password cannot be empty.");
      isLoading(false);
      return;
    }

    try {

        const login = await AuthContext.login(email1, password1);
        console.log("loginHook", email1, password1);

        if (login) {
            navigation.replace("Home");
            setEmail("");
            setPassword("");
            return email1;
        } else {
        setError("Invalid Email or Password.");
        }


    } catch (e) {
         const error = e as any;
         console.log("LoginHookError", error.response);

         if(error.response && error.response.data && error.response.data.message){
            setError(error.response.data.message); 
    } else {

         setError("Invalid Email or Password.");
    }
        } finally { 

                isLoading(false);
        } 
 
     };



        return handleLogin;
};