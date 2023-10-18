import { Alert,Platform} from "react-native";
import {Image,View,Text,TextAreas} from "../../style/PinStyles"
import React, { useState, useEffect } from "react";
import axios from "axios";
import {NhostClient} from "@nhost/nhost-js";
import * as ImagePicker from "expo-image-picker";
import nhost from "../../apis/constNhost";
import * as FileSystem from "expo-file-system";
import FormData from "form-data";

const PinCreateScreen = ({ route }: any) => {
  
  const image = route.params.Images;
  const [title,setTitle] = useState("");
  const [Images,setImages] = useState(image);
  const [imageUri,setImageUri] = useState("");


  const handleUpload = async () => {
    const userid = await nhost.auth.getUser()?.id;
     
          

          console.log("test", title, " + user ID = ", userid, " + Url = ", imageUri);

          const apIUrl =
            "https://kwivsrhgpywxqalkwedn.hasura.ap-southeast-1.nhost.run/api/rest/upload?title=" +
            title +
            "&userid=" +
            userid +
            "&image=" +
            image;

          const response = await axios.post(apIUrl);
          if (response.statusText === "success") {
            Alert.alert("Pin Created Successfully");
          } else {
            Alert.alert("Pin Created Failed To Create");
            console.log(response);
          }
          
  };


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64:true,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0].uri;
     // handleAlert();
      const logs = await FileSystem.readAsStringAsync(selectedImage, {length});
      console.log("FILES TO STRING", logs);

      console.log(selectedImage);
      setImages(selectedImage);
    }
  };



  return (
    // add to upload Image to Server
    <View>
      <TextAreas onPress={pickImage}> Upload Image </TextAreas>
      {Images && (
        <Image
          source={{ uri: Images }}
          resizeMode="cover"
          // Set the desired width and height
        />
      )}
      <Text placeholder="Title.." value={title} onChangeText={setTitle}></Text>
      <TextAreas onPress={handleUpload}>Upload</TextAreas>
    </View>
  );
};


export default PinCreateScreen;