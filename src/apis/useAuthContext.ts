import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthService {
  async logout() {
    await AsyncStorage.removeItem("Name");
    await AsyncStorage.removeItem("jwt");
    await AsyncStorage.removeItem("userLoggedIn");
    await AsyncStorage.removeItem("email");
  }

  async getCurrentUser() {
    const user = await AsyncStorage.getItem("Name");
    return user ? JSON.parse(user) : null;
  }

  async getEmail() {
    const emailUser = await AsyncStorage.getItem("email");
    return emailUser;
  }

  async getJwt() {
    return await AsyncStorage.getItem("jwt");
  }
  async isLoggedIn() {
    const jwt = await this.getJwt();
    return jwt !== null;
  }

  async getProfile(){
    const UserProfile = await AsyncStorage.getItem("Profile");
    return UserProfile ? JSON.parse(UserProfile) : null;
  }


}


export default new AuthService();
