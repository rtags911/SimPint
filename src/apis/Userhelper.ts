import AuthContext from "./useAuthContext";

export const checkUserStatus = async () => {
  const user = await AuthContext.getUser();
  const isLoggedIn = await AuthContext.isLoggedIn();
  const getJwt = await AuthContext.getJwt();

  console.log("user = ", user);
  console.log("token = ",getJwt);
 console.log("IsLogged in = ", isLoggedIn);


  if (!isLoggedIn && !getJwt) {
    console.log(user);
    return getJwt;
  }

  return isLoggedIn;
};
