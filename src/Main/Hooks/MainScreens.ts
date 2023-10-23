import { useState, useEffect } from "react";
import AuthService from "../../apis/useAuthContext";
import { useNhostClient } from "@nhost/react";
import Toast from "react-native-toast-message";
import { useNavigation ,StackActions} from "@react-navigation/native";

export function useMainScreenHooks() {
  // Use the useAuthContext hook
  const nhost = useNhostClient();
  const [name, setName] = useState(""); // State to store the user's name
  const [email, setEmail] = useState(""); // State to store the user's email
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(""); // State to store the
  const navigation = useNavigation();
  const [isLoadingLog, setIsLoadingLog] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      const user = await AuthService.getCurrentUser(); // Fetch the user's name
      const jwt = await AuthService.getJwt(); // Fetch the JWT
      const email = await AuthService.getEmail();
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

  const handleLogout = async () => {
    // Handle logout in mainscreenhook
    const { success, error } = await AuthService.logout(); // Call the modified logout function
    const response = await nhost.auth.signOut();
    setIsLoading(true);

    // Simulate a delay for better user experience
    setTimeout(async () => {
      setIsLoading(false);

      if (success && !response.error) {
        // Logout was successful
        // Additional logic if needed
        Toast.show({
          type: "success",
          text1: "Logout successful",
        });

        // Delay and navigate to the home screen after a successful logout
        setTimeout(() => {
          
          
          navigation.reset({
            index:0,
            routes:[{name:"Welcome"}],
          });

          navigation.navigate("Welcome");
           // Replace "Home" with your actual home screen name
        }, 1000); // Delay for 2 seconds (adjust as needed)
      } else {
        // Logout failed
        console.error("Logout error: ", error);
        // Handle error if needed
      }
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  };


  return { name, email, isLoading, url, handleLogout };
} 
