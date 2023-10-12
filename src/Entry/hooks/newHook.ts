import nhost from "../../apis/constNhost";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSignInEmailPassword } from "@nhost/react";



const {
  signInEmailPassword,
  isLoading,
  isSuccess,
  needsEmailVerification,
  isError,
  error,
} = useSignInEmailPassword();