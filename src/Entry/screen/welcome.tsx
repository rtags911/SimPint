import { View, Text, StyleSheet, Pressable } from "react-native";
import  React,{useEffect} from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../consts/colors";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import nhost from "../../apis/constNhost";

import {
  Button,
  Container,
  Buttontext,
  UnderText,
  UnderView,
} from "../../style/welcomestyle";



const Welcome = () => {


 useEffect(() => {
   // You can safely access `auth` her
    try {
      const isAuth = nhost.auth.isAuthenticated(); // Check authentication status
      if (isAuth) {
        // User is authenticated, navigate to "Home"
        navigation.navigate("Home");
      } else {
        // User is not authenticated, navigate to "Welcome"
        navigation.navigate("Welcome");
      }
    } catch (error) {
      console.error("Authentication check error:", error);
    }


 }, []);




  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]} // Use the colors prop directly without quotes
      style={{
        flex: 1,
      }}
    >
      {/* /flex container  */}
      <View
        style={{
          flex: 1,
        }}
      >
        {/* Image 1 */}
        <View style={styles.container1_1}>
          <Image
            source={require("../../../assets/Image/dota2.jpg")}
            style={styles.image}
          ></Image>
        </View>

        {/* Image 1 */}
        <View style={styles.container1_2}>
          <Image
            source={require("../../../assets/Image/zelda2.jpg")}
            style={styles.image}
          ></Image>
        </View>

        {/* Image 1 */}
        <View style={styles.container1_3}>
          <Image
            source={require("../../../assets/Image/gibli2.jpg")}
            style={styles.image}
          ></Image>
        </View>

        {/* Image 2-1*/}
        <View style={styles.container2_1}>
          <Image
            source={require("../../../assets/Image/ghibili.jpg")}
            style={styles.image}
          ></Image>
        </View>

        {/* Image 2-2*/}
        <View style={styles.container2_2}>
          <Image
            source={require("../../../assets/Image/Lightbulb.jpg")}
            style={styles.image}
          ></Image>
        </View>

        {/* Image 2-3*/}
        <View style={styles.container2_3}>
          <Image
            source={require("../../../assets/Image/meathok.jpg")}
            style={styles.image}
          ></Image>
        </View>

        {/* Image 3-1*/}
        <View style={styles.container3_1}>
          <Image
            source={require("../../../assets/Image/whale.jpg")}
            style={styles.image}
          ></Image>
        </View>

        {/* Image 3-2*/}
        <View style={styles.container3_2}>
          <Image
            source={require("../../../assets/Image/zelda.jpg")}
            style={styles.image}
          ></Image>
        </View>

        {/* Image 3-3*/}
        <View style={styles.container3_3}>
          <Image
            source={require("../../../assets/Image/zelda1.jpg")}
            style={styles.image}
          ></Image>
        </View>
      </View>

      <Container>
        <Button onPress={() => navigation.navigate("Login")}>
          <Buttontext> LOGIN </Buttontext>
        </Button>
        <UnderView>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <UnderText> Already Have an account ? </UnderText>
          </Pressable>
        </UnderView>
      </Container>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  //image1-1 1-3
  container1_1: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: -10 }, { translateY: 5 }],
  },

  container1_2: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: -10 }, { translateY: 240 }],
  },

  container1_3: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: -10 }, { translateY: 475 }],
  },

  //image 2-1 - 2_3
  container2_1: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: 130 }, { translateY: -100 }],
  },

  container2_2: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: 130 }, { translateY: 140 }],
  },

  container2_3: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: 130 }, { translateY: 375 }],
  },

  //image3 - 3
  container3_1: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: 275 }, { translateY: 30 }],
  },

  container3_2: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: 275 }, { translateY: 260 }],
  },
  container3_3: {
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: 275 }, { translateY: 495 }],
  },

  image: {
    position: "relative",
    width: 120,
    height: 220,
    borderRadius: 20,
  },
});

export default Welcome;
