import { Alert,Platform} from "react-native";
import {Image,View,Text,TextAreas} from "../../style/PinStyles"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNhostClient,useFileUpload } from "@nhost/react";
import * as ImagePicker from "expo-image-picker";
import FormData from "form-data";
import fs from "fs";

import RNFetchBlob from "rn-fetch-blob";
const PinCreateScreen = ({ route }: any) => {
  const nhost = useNhostClient();
  const image = route.params.Images;
  const [title,setTitle] = useState("");
  const [Images,setImages] = useState(image);
  const [imageUri,setImageUri] = useState("");

  const handleAlert = async () => {
    const os = Images.startsWith("file://")
      ? Images.replace("file://", "")
      : image;

    const parts = os.split("/");
    const name = parts[parts.length - 1];
    const nameParts = name.split(".");
    const finalName = nameParts.slice(0, -1).join(".");
    const types = nameParts[nameParts.length - 1];

    const filePath = os;

    // const result = await nhost.storage.upload({
    //   name:'finalName',
    //   type:'image/'+types,
    //   uri: filePath,
    // })
    
    const fd = new FormData();
    fd.append("file",fs.createReadStream(os) );
      const test = await nhost.storage.upload({
        formData:fd,
      });
       console.log(test);
      return test;
     
  };



  const handleUpload = async () => {
    const userid = await nhost.auth.getUser()?.id;
    const upload = await handleAlert();
    console.log(upload);

      if(upload) {
        Alert.alert("Upload Success", "Image Uploaded Successfully");
      
      }
      else {

          

          console.log("test", title, " + user ID = ", userid, " + Url = ", imageUri);

          const apIUrl =
            "https://kwivsrhgpywxqalkwedn.hasura.ap-southeast-1.nhost.run/api/rest/upload?title=" +
            title +
            "&userid=" +
            userid +
            "&image=" +
            imageUri;

          const response = await axios.get(apIUrl);
          if (response.statusText === "success") {
            Alert.alert("Pin Created Successfully");
          } else {
            Alert.alert("Pin Created Failed To Create");
            console.log(response);
          }
          


      }


     
  };


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0].uri;
     // handleAlert();
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
      <TextAreas onPress={handleAlert}>Upload</TextAreas>
    </View>
  );
};

export default PinCreateScreen;