import { Alert} from "react-native";
import {Image,View,Text} from "../../style/PinStyles"
import React, { useState, useEffect } from "react";



const PinCreateScreen = ({ route }: any) => {
  
  const image = route.params.Images;
  const [title,setTitle] = useState("");
  const [Images,setImages] = useState(null);


  const handleAlert = () =>{

    alert("You did not select any image.");

  }

  return (
    <View onPress={handleAlert}>
      {image && (
        <Image
          source={{ uri: image }}
          resizeMode="cover"
// Set the desired width and height
        />
      )}
      <Text>TODAY</Text>
    </View>
  );
};

export default PinCreateScreen;