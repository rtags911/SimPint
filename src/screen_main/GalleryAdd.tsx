import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import { Button, Text } from "@rneui/base";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../screen/style-log/screen-styles";
import {
  ButtonRowView,
  TouchButton,
  TouchButtonTitle,
  ViewContainer,
} from "../screen/style-log/Gallery-style";
import {
  Camera,
  useCameraPermission,
  useCameraDevice,
  useCameraDevices,
} from "react-native-vision-camera";
import * as ImagePicker from "expo-image-picker";
import CameraCapture from "./Camera";

const GalleryAdd = () => {
  const [isCameraModalVisible, setCameraModalVisible] = useState(false);
  const device = useCameraDevice("back");
  const camera = useRef<Camera>(null);

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
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  if (device == null) {
    alert("Camera has not have any permission");
  }

  const openCameraModal = () => {
    setCameraModalVisible(true);
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
                <TouchButton onPress={openCameraModal}>
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

        <Modal
          isVisible={isCameraModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={() => setCameraModalVisible(false)}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <CameraCapture device={device} ref={camera} photo={true} />
            <TouchableOpacity
              onPress={() => setCameraModalVisible(false)}
              style={{ position: "absolute", top: 20, right: 20 }}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default GalleryAdd;
