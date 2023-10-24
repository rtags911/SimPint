import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity,Pressable,Alert} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

interface ImageTitle {
  pins: {
    id: string;
    images: string;
    title: string;
    userid:string;
  };
  // 👈️ for demo purposes
}


import {useState,useEffect} from 'react';

const Pin:React.FC<ImageTitle> = ({pins}) => {


  const navigation = useNavigation();

const { id,title, images ,userid} = pins;

  const [ratio, setRatio] = useState(1);


    useEffect(() => {
      if (images) {
        Image.getSize(images, (width, height) => setRatio(width / height));
      }
    }, [images]);
 


    const gotoPress = () => {
      //  Alert.alert("Checkbox Checked", "The checkbox has been checked");
      navigation.navigate("PinScreen", {
        id: pins.id,
        title: pins.title,
        images: pins.images,
        userid:pins.userid,
      });
    }

  return (
    <Pressable onPress ={gotoPress}style={styles.pin}>
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
    </Pressable>
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

    


