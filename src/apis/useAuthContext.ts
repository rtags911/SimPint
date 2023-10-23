import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthService {
  async logout() {
    try {
      // Clear the authToken when logging out

      // Remove items from AsyncStorage
      await AsyncStorage.removeItem("Name");
      await AsyncStorage.removeItem("jwt");
      await AsyncStorage.removeItem("userLoggedIn");
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("Profile");
      await AsyncStorage.removeItem("Profile");
      await AsyncStorage.removeItem("userID");
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error };
    }
  }

  async getCurrentUser() {
    const user = await AsyncStorage.getItem("Name");
    return user ? JSON.parse(user) : null;
  }

  async getEmail() {
    const emailUser = await AsyncStorage.getItem("email");
    return emailUser;
  }

  async getUserId() {
    const userid = await AsyncStorage.getItem("userID");
    return userid;
  }



  async getJwt() {
    return await AsyncStorage.getItem("jwt");
  }
  async isLoggedIn() {
    const jwt = await this.getJwt();
    return jwt !== null;
  }

  async getProfile() {
    const UserProfile = await AsyncStorage.getItem("Profile");
    return UserProfile ? JSON.parse(UserProfile) : null;
  }
}


export default new AuthService();
