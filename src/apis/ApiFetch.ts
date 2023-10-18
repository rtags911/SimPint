import { useNhostClient,useAuthenticationStatus} from "@nhost/react";
import React,{useState,useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FetchUserStatus =() => {
    const nhost = useNhostClient();
    
 const { isAuthenticated, isLoading } = useAuthenticationStatus();
    const [email,setEmail] = useState('');
    const [name, setName] = useState("");
    const [loggedin, setLoggedin] = useState('')

    const [] = useState(null);


  useEffect(() => {
    console.log("Fetching", isLoading);

    if(isAuthenticated){
    //   AsyncStorage.getItem("email").then((value) => {
    //     setEmail(email);
    //   });
       AsyncStorage.getItem("userLoggedIn").then((value) => {
         setLoggedin(loggedin);
       });
        // AsyncStorage.getItem("Name").then((value) => {
        //   setName(name);
        // });
    }
  }, []); 

return loggedin;
}