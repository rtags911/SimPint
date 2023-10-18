
import { useState, useEffect } from "react";
import AuthService from "../../apis/useAuthContext";

export function useMainScreenHooks() {
  // Use the useAuthContext hook

  const [name, setName] = useState(""); // State to store the user's name
  const [email, setEmail] = useState(""); // State to store the user's email
  const [isLoading, setIsLoading] = useState(true);
  const [url,setUrl] = useState(""); // State to store the

  useEffect(() => {
    async function fetchUserData() {
      const user = await AuthService.getCurrentUser(); // Fetch the user's name
      const jwt = await AuthService.getJwt(); // Fetch the JWT
        const email= await AuthService.getEmail();
        const Profile = await AuthService.getProfile();
      if (user) {
        setName(user); // Update the 'name' state with the user's name
        setEmail(`${email}`); // Update the 'email' state with the user's email
        setUrl(`${Profile}`); // Update the 'url' state with the user's avatarUrl
      }
      setIsLoading(false);
    }

    fetchUserData();
  }, [AuthService]);

  return { name, email, isLoading,url };
}
