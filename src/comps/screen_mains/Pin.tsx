import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


interface ImageTitle {
  pins: {
    title: string;
    images: string;
  };
  // 👈️ for demo purposes
}


import {useState,useEffect} from 'react';

const Pin:React.FC<ImageTitle> = ({pins}) => {
const { title, images } = pins;

  const [ratio, setRatio] = useState(1);


    useEffect(() => {
      if (images) {
        Image.getSize(images, (width, height) => setRatio(width / height));
      }
    }, [images]);
 
  return (

    <View style={styles.pin}>
      <View>
        <Image style={[styles.image,{aspectRatio:ratio}]} source={{
          uri: images,
        }} />


        <TouchableOpacity style = {styles.heartlike}>
          <Ionicons name="heart-outline" size={30} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>

    
  );
};

export default Pin;



   const styles = StyleSheet.create({
     pin: {
       width:"50%",
     },
     title: {
       fontSize: 20,
       fontWeight: "bold",
       margin: 10,
     },
     image: {
       width: "100%",
       borderRadius: 25,
      
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

    


