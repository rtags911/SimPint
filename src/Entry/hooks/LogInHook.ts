import { useSignInEmailPassword } from "@nhost/react";
import AuthContext from "../../apis/useAuthContext";
import { useNavigation } from "@react-navigation/native";
// ... Other imports and code ...

export const LoginHooks = () => {
  const navigation = useNavigation<any>();

  const handleLogin = async (
    email1: string,
    password1: string,
    isUserLoggedIn: (value: boolean) => void,
    isLoading: (value: boolean) => void,
    setError: (value: string) => void,
    setPassword: (value: string) => void,
    setEmail: (value: string) => void
  ) => {
    isLoading(true);

    if (!email1 || !password1) {
      setError("Email and Password cannot be empty.");
      isLoading(false);
      return;
    }

    try {
      // Use the useSignInEmailPassword hook to sign in with email and password
      const {
        isLoading: signInLoading,
        isSuccess,
        isError,
        error,
      } = useSignInEmailPassword();

      // Call the hook to sign in
      const signInResponse = await useSignInEmailPassword();

      if (signInResponse.isSuccess) {
        navigation.replace("Home");
        setEmail("");
        setPassword("");
        return email1;
      } else if (isError) {
        // Handle the sign-in error
        setError(signInResponse.error || "Invalid Email or Password.");
      }
    } catch (e) {
      const error = e as any;
      console.log("LoginHookError", error.response);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
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
