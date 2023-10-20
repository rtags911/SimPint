
import * as React from "react";
import { Text, View,Image, ScrollView} from "react-native";
import { Profile, ProfileImage } from "../../style/PinStyles";




function CreateScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      
      <ProfileImage source={require("../../../assets/Image/dota2.jpg")} />
    </ScrollView>
  );
}



export default CreateScreen;