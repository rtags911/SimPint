import { Alert, Platform } from "react-native";
import { Image, View, Text, TextAreas } from "../../style/PinStyles";
import React, { useState, useEffect } from "react";

import * as ImagePicker from "expo-image-picker";

import * as FileSystem from "expo-file-system";
import { useNhostClient, useFileUpload } from "@nhost/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../apis/Firebaseconfig";
import useAuthContext from "../../apis/useAuthContext";
import { useNavigation } from "@react-navigation/native";
import { uploadPin } from "../../Cache/imageFetch";
import { useMutation, useQueryClient } from "react-query";
import z from "zod";

const PinCreateScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const image = route.params.Images;
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [Images, setImages] = useState(image);
  const [userId, setIDuser] = useState<string | null>("");



  const imagefile = async () => {
    // Assuming that 'image' is defined somewhere in your code
    const response = await fetch(image);
    const blob = await response.blob();

    // You need to import necessary functions and initialize Firebase storage
    // Make sure to initialize Firebase Storage
    const storageref = ref(storage, "Images/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageref, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle any errors that occur during the upload.
        console.error("Error uploading image: ", error);
      },
      () => {
        // Upload completed successfully, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("Completed", downloadURL);
          // Assuming setImageUrl is a function to set the image URL
          const encodedUrl = await downloadURL.replace(/Images\//g, "Images%2F");
          console.log("Completed EDITED", encodedUrl);
          

          const ids = await useAuthContext.getUserId();
          setIDuser(ids);

      console.log("test", title, " + user ID = ", ids, " + Url = ", encodedUrl);
            const data = {
              userid: ids,
              title: title,
              image: encodedUrl,
            };
            await mutate(data);

        });
      }
    );
  };


      const { mutate } = useMutation("uploadPin", uploadPin, {
        onSuccess: (data) => {
          if (data === "Successful") {
            // Handle the success case here
            console.log("Upload was successful");
            queryClient.invalidateQueries("homeQuery");
            navigation.navigate("Home");
          } else {
            // Handle the error case here
            Alert.alert("Upload failed");
            
            console.log("Upload failed");
            // You can show an error message or take appropriate action
          }
        },
      });


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
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
      <TextAreas onPress={imagefile}>Upload</TextAreas>
    </View>
  );
};

export default PinCreateScreen;
