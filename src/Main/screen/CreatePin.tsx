import { Alert,Platform} from "react-native";
import {Image,View,Text,TextAreas} from "../../style/PinStyles"
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

import * as FileSystem from "expo-file-system";
import { useNhostClient,useFileUpload } from "@nhost/react";



const PinCreateScreen = ({ route }: any) => {
  const nhost = useNhostClient();
  const image = route.params.Images;
  const [title,setTitle] = useState("");
  const [Images,setImages] = useState(image);
  const [imageUri,setImageUri] = useState("");
  const [file,setfile] = useState<File | null>();
 const { isError, isUploaded, upload } = useFileUpload();


 const uploadImageFile = async () => {

  const response = axios.post(
    "https://kwivsrhgpywxqalkwedn.hasura.ap-southeast-1.nhost.run/api/rest/files",{


    }

  );
  

 };

  


const imagefile = async () => {

  
  fetch(Images)
    .then((response) => response.blob())
    .then(async (blob) => {
      // Now 'blob' contains the image data, and you can use it as needed
      // For example, you can create a Blob object for the image
      const imageBlob = new Blob([blob], { type: "image/jpeg" });

      // You can also create a File object (for simulating a file input) with additional information
      const imageFile = new File([blob], "image.jpg", { type: "image/jpeg" });
        setfile(imageFile);
      
      // Upload the image using nhost.storage.upload
      // const response = await nhost.storage.upload({
      //   file: imageFile, // Use the created File object
      //   name: "image.jpg", // Set the desired name for the file
      // });I

        console.log({ imageFile });
      
      

      const today =  await upload({
        file: imageFile, // Use the created File object
        name: "image.jpg", // Set the desired name for the file
      });

      console.log("C",{ today });

           
        console.log("If error ", isError);

        console.log("NOT ERROR ", isUploaded);


      // if (response.error) {
      //   Alert.alert("ERROR", response.error.message);
      // } else {
      //   Alert.alert("OK");
      // }

      // Now, 'response' contains the information about the uploaded file

      return imageFile
    })
    .catch((error) => {
      console.error("Error fetching or uploading the image:", error);
    });

}
  const HandleImageUpload = async () => {
        await imagefile();

      console.log({file});
     
    
  }


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
      <TextAreas onPress={imagefile}>Upload</TextAreas>
    </View>
  );
};


export default PinCreateScreen;