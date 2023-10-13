import { Text} from "react-native";
import {Image,View} from "../../style/PinStyles"



const PinCreateScreen = ({ route }: any) => {
  
  const image = route.params.Images;

  return (
    <View>
      {image && (
        <Image
          source={{ uri: image }}
          resizeMode="cover"
// Set the desired width and height
        />
      )}
      <Text>TODAY</Text>
      <Text>TODAY1</Text>
    </View>
  );
};

export default PinCreateScreen;