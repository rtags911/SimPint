import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
  Pressable,
} from "react-native";

import pins from "../style/pins";
import { useState } from "react";
import Pin from "../comps/screen_mains/Pin";
import {Masonlist,MasonColumn} from '../style/PinStyles'

interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
    user_id:string;
  }[];
}

const MasonryList: React.FC<IMasonryList> = ({ pins }) => {
  console.log("masonList",pins);
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 350);

  if (!pins || !Array.isArray(pins)) {
    return null; // or display a message indicating no pins are available
  }
  
  return (
    <ScrollView contentContainerStyle={{ width: "150%" }}
    >
      <View style= {styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column} key={colIndex}>
            {pins
              
              .filter((_, index) => index % numColumns === colIndex)
              .map(
                (
                  pin // Change the variable name here to 'pin'
                ) => (
                  <Pin
                    key={pin.id}
                    pins={{ id: pin.id, title: pin.title, images: pin.image ,userid:pin.user_id}} // Change 'pins' to 'pin'
                  />
                )
              )}
          </View>
        ))}
        <View style={{ flex: 1 }}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

export default MasonryList;
