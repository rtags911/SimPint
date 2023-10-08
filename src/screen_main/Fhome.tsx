import * as React from "react";
import { ScrollView, Text, View ,StyleSheet} from "react-native";
import Pin  from "../comps/screen_mains/Pin";
import * as SecureStorage from "expo-secure-store";
import pins from '../style/pins'
import MasonryList from "../comps/MasonryList";
  

function Home1() {
return <MasonryList pins={pins} />;
}


export default Home1;
