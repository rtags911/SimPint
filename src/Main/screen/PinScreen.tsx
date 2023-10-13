import {View,Text,StyleSheet,Image} from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import React,{useEffect, useState} from 'react';



const PinScreen = ({ route }:any) => {
    const { id, title, images } = route.params; 

  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (images) {
      Image.getSize(images, (width, height) => setRatio(width / height));
    }
  }, []);

  return (
    <SafeAreaView>
      <Image source={{ uri: images }} style={{ aspectRatio: ratio }} />
      <Text>{title} </Text>
    </SafeAreaView>
  );
}; 

export default PinScreen;