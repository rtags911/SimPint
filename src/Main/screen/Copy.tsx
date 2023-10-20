import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CollapsibleHeader = ({ userProfile, headerHeight }:any) => {
  return (
    <View style={[styles.header, { height: 200 }]}>
      <Image
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BZDQxMjVmMjYtZTU4OC00MzRhLTljNTgtMTAwMDg3YzhlY2M4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpghttps://m.media-amazon.com/images/M/MV5BZDQxMjVmMjYtZTU4OC00MzRhLTljNTgtMTAwMDg3YzhlY2M4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        }}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>JANEDOE</Text>
      <Text style={styles.profileEmail}>JANEDONE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
  },
  profileEmail: {
    fontSize: 16,
  },
});

export default CollapsibleHeader;
