import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity,Pressable,Alert} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

interface ImageTitle {
  pins: {
    id: string;
    image: string;
    title: string;
    user_id:string;
  };
  // 👈️ for demo purposes
}


import {useState,useEffect} from 'react';

const ProfPin:React.FC<ImageTitle> = ({pins}) => {


  const navigation = useNavigation();

const { id,title, image ,user_id} = pins;
  
  const [ratio, setRatio] = useState(1);


    useEffect(() => {
      if (image) {
        Image.getSize(image, (width, height) => setRatio(width / height));
      }
    }, [image]);
 


    const gotoPress = () => {
      //  Alert.alert("Checkbox Checked", "The checkbox has been checked");
      navigation.navigate("PinScreen", {
        id: pins.id,
        title: pins.title,
        images: pins.image,
        userid:pins.user_id,

      });
    }

  return (
    <Pressable onPress ={gotoPress}style={styles.pin}>
      <View>
        <Image
          style={[styles.image, { aspectRatio: ratio }]}
          source={{
            uri: image,
          }}
        />
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

export default ProfPin;

   const styles = StyleSheet.create({
     pin: {
       width: "100%",
       padding: 5,
      
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

    


