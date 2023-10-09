import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


interface ImageTitle {
  pins: {
    id: string;
    images: string;
    title: string;
  };
  // 👈️ for demo purposes
}


import {useState,useEffect} from 'react';

const Pin:React.FC<ImageTitle> = ({pins}) => {
const { id,title, images } = pins;

  const [ratio, setRatio] = useState(1);


    useEffect(() => {
      if (images) {
        Image.getSize(images, (width, height) => setRatio(width / height));
      }
    }, [images]);
 
  return (
    <View style={styles.pin}>
      <View>
        <Image
          style={[styles.image, { aspectRatio: ratio }]}
          source={{
            uri: images,
          }}
        />

        <TouchableOpacity style={styles.heartlike}>
          <Ionicons name="heart-outline" size={30} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

export default Pin;
   const styles = StyleSheet.create({
     pin: {
       width: "100%",
       padding: 4,

     },
     title: {
       fontSize: 16,
       lineHeight: 22,
       fontWeight: "600",
       margin: 5,
       
       color: "#181818",
     },
     image: { 
       width: "100%",
       borderRadius: 15,
     },
     heartlike: {
       backgroundColor: "#D3CFD4",
       position: "absolute",
       bottom: 10,
       right: 10,
       height: 40,
       width: 40,
       justifyContent: "center",
       alignItems: "center",
       borderRadius: 20,
     },
   });

    


