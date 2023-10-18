import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNhostClient } from "@nhost/react";

class AuthService {

  async logout() {

    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("jwt");
    await AsyncStorage.removeItem("userLoggedIn");
    await AsyncStorage.removeItem("email");

  }
  async getCurrentUser() {

    const user = await AsyncStorage.getItem("user");
    return user ? JSON.parse(user) : null;

  }

  async getJwt() {

    return await AsyncStorage.getItem("jwt");

  }
  async isLoggedIn() {

    const jwt = await this.getJwt();
    return jwt !== null;
    
  }
}

export default new AuthService();
