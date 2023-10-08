import { Camera, CameraType ,PermissionResponse} from "expo-camera";
import { useState,useRef ,useEffect} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native";



const Cameras = () => {

const [type, setType] = useState(CameraType.back);
const [image,setImage] = useState(null);
 const [permission, setPermission] = useState<PermissionResponse | null>(null);
const cameraRef = useRef(null);

 useEffect(() => {
   (async () => {
     const { status } = await Camera.requestCameraPermissionsAsync();
     if (status === "granted") {
       setPermission({ granted: true } as PermissionResponse);
     } else {
       setPermission(null);
     }
   })();
 }, []);

 function toggleCameraType() {
   setType((current) =>
     current === CameraType.back ? CameraType.front : CameraType.back
   );
 }
    return (
        <View style={styles.container}>
                <Camera
                style = {styles.camera}
                type={type}
                ref ={cameraRef}
                >
                </Camera>

                {/* <Button title="Take a Picture" onPress={}></Button> */}
                
        </View>
    );


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    camera:{
        flex:1,
        borderRadius: 20,

    }
});

export default Cameras;