import React, { useEffect, useRef, useState } from "react";
import {
  View,
} from "react-native";
import { Button, Text } from "@rneui/base";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../../screen/style-log/screen-styles";
import {
  ButtonRowView,
  TouchButton,
  TouchButtonTitle,
} from "../../screen/style-log/Gallery-style";
import {
  Camera,
  useCameraPermission,
} from "react-native-vision-camera";
import * as ImagePicker from "expo-image-picker";

import { useNavigation } from "@react-navigation/native";



const ModalCamImage = () => {

  const [isCameraModalVisible, setCameraModalVisible] = useState(false);
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [image, setImage] = useState<string>("default-image-url");
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    (async () => {
      const CamhasPermission = await Camera.requestCameraPermission();
      requestPermission;
      CamhasPermission === "granted";
    })();
  }, []);


  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
     const selectedImage = result.assets[0].uri;
        setImage(selectedImage);
      navigation.navigate("CreatePinScreen", { Images:selectedImage });

      console.log(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
    
  };

const CaptureImage = async () => {
  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 0.5,
  });
  if (!result.canceled) {
    try {

     const selectedImage = result.assets[0].uri;
     setImage(selectedImage);
     navigation.navigate("CreatePinScreen", { Images: selectedImage });
    
    } catch (error) {
      // Handle error if necessary
      console.error("Error uploading image:", error);
    }
  }
};

  return (
    <>
      <View style={styles.position}>
        <Button
          onPress={() => {
            setModalVisible(true);
          }}
          buttonStyle={styles.buttonStyle}
          icon={
            <Ionicons
              name="add-circle-outline"
              size={55}
              color="#BDDBD0"
              style={{
                right: 6,
                top: 6,
                left: 9,
                position: "absolute",
                flex: 1,
              }}
            />
          }
        />
      </View>

      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <View style={styles.content}>
            <ButtonRowView>
              <View>
                <TouchButton onPress={CaptureImage}>
                  <Ionicons name="camera-outline" size={50} />
                </TouchButton>
                <TouchButtonTitle>Camera</TouchButtonTitle>
              </View>

              <View>
                <TouchButton onPress={pickImageAsync}>
                  <Ionicons name="images-outline" size={50} />
                </TouchButton>
                <TouchButtonTitle>Gallery</TouchButtonTitle>
              </View>
            </ButtonRowView>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ModalCamImage;
