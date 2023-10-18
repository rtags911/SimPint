

import React,{useContext} from "react";
import { useNhostClient ,useAuthenticated} from "@nhost/react";


export const checkUserStatus = async () => {
    const nhost = useNhostClient();
    const Checkuser = useAuthenticated();
    if(Checkuser.valueOf() === true){
    const user = await nhost.auth.getUser()?.id;
    const userLoggedIn = 
    const getJwt = 

    }else{

    }
  

  console.log("user = ", user);
  console.log("token = ",getJwt);
 console.log("IsLogged in = ", userLoggedIn);


  if (!userLoggedIn && !getJwt) {
    console.log("UserHelper", user);
    return getJwt;
  }

  return userLoggedIn;
};
