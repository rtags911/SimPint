import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Camera ,useCameraDevice} from "react-native-vision-camera";


interface CamData {
  navigation: any;
  device: any;
  camera: any;

}

const CameraCapture: React.FC<CamData> = ({
  navigation,
  device,
  camera,
}) => {
  const [photoUri, setPhotoUri] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [imageData, SetImageData] = useState("");

  const takePhoto = async () => {
    if (device) {
      if (camera != null) {
        const shoot = await camera.current?.takePhoto();

        setPhotoUri(shoot?.path!);
        console.log(shoot?.path);
      }
    }
  };

  const retakePhoto = () => {
    setShowPreview(false);
    setPhotoUri("");
  };

  const savePhoto = () => {
    // Implement the logic to save the photo
    // You can use the 'photoUri' state to access the captured photo
  };

  return (
    <View style={styles.container}>
      {photoUri !== "" ? (
        <Image
          source={{ uri: `file://'${photoUri}` }}
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device!}
          ref={camera}
          isActive={true}
          photo={true}
        />
      )}

      <View style={styles.bottomButtons}>
        {photoUri ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={retakePhoto} style={styles.button}>
              <Text style={styles.buttonText}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={savePhoto} style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
            <Text style={styles.captureButtonText}>Capture</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  previewImage: {
    flex: 1,
    resizeMode: "contain",
    aspectRatio: 0.7,
    transform: [{ rotate: "-90deg" }],
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  captureButton: {
    alignSelf: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  captureButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CameraCapture;
