import { Alert, Platform } from "react-native";
import { Image, View, Text, TextAreas } from "../../style/PinStyles";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

import * as FileSystem from "expo-file-system";
import { useNhostClient, useFileUpload } from "@nhost/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../apis/Firebaseconfig";
import useAuthContext from "../../apis/useAuthContext";
import { useNavigation } from "@react-navigation/native";

const PinCreateScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const image = route.params.Images;

  const [title, setTitle] = useState("");
  const [Images, setImages] = useState(image);

  const [imageUrL, setImageUrl] = useState("");
  const [file, setfile] = useState<File | null>();
  const { isError, isUploaded, upload } = useFileUpload();

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
          setImageUrl(downloadURL);
        });
      }
    );
  };

  const handleUpload = async () => {
    const ids = await useAuthContext.getUserId();
    await imagefile();

    console.log("test", title, " + user ID = ", ids, " + Url = ", imageUrL);

    const apIUrl =
      "https://kwivsrhgpywxqalkwedn.hasura.ap-southeast-1.nhost.run/api/rest/upload?title=&image=&userid=";

    const response = await axios.post(apIUrl);
    if (response.statusText === "OK") {
      Alert.alert("Pin Created Successfully");
      navigation.navigate("Home");
    } else {
      Alert.alert("Pin Created Failed To Create");
      console.log(response);
    }
  };


  const handleUploads = async () => {
    try {
      const ids = await useAuthContext.getUserId();
      await imagefile();

      console.log("test", title, " + user ID = ", ids, " + Url = ", imageUrL);

      const postData = {
        title: title, // Replace with the actual data you want to post
        image: imageUrL, // Assuming imageUrL contains the image URL
        userid: ids,
      };

      await postPinMutation.mutateAsync(postData);

      // Handle navigation or show success messages here
    } catch (error) {
      console.error("Upload error:", error);
      // Handle error cases
    }
  };



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
      <TextAreas onPress={handleUpload}>Upload</TextAreas>
    </View>
  );
};

export default PinCreateScreen;
