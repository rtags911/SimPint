import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState, useContext, createContext } from "react";
import {
  PinScreenBar,
  PinScreenText,
  PinScreens,
  PinScreenImage,
  PinScreenButton,
  PinScreenToProfile,
  PinScreenToProfileImage,
  PinScreenToProfileText,
  Views
} from "../../style/PinStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMainScreenHooks } from "../Hooks/MainScreens";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUser, usePinsQuery } from "../../Cache/imageFetch";
import { Tabs } from "react-native-collapsible-tab-view";
import ProfPin from "../../comps/screen_mains/ProfPin";
import { useNhostClient } from "@nhost/react";

const HEADER_HEIGHT = 650;



const PinScreen = ({ route }: any) => {
  const { title, images, userid } = route.params;
  
  const nhost = useNhostClient();
  const { data: pins, refetch } = usePinsQuery(nhost);

  console.log("PinScreen", userid);
  const { url } = useMainScreenHooks();
  const [pinsData, setPinsData] = useState([]);
  const [ratio, setRatio] = useState(1);
  const [AvatarUrl, SetAvatar] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");

  const navigation = useNavigation();

  // const [ratio, setRatio] = useState(1);

  console.log("PinScreen", name, AvatarUrl);

  const isFocused = useIsFocused();
  console.log("MainScreen", url);

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (images) {
      Image.getSize(images, (width, height) => setRatio(width / height));
    }
  }, []);


    useEffect(() => {
      const fetchData = async () => {
        try {
          // Check if the screen is focused
          if (isFocused) {
            // const userDisplayName = await AsyncStorage.getItem("OnScreeName");
            // const userAvatarUrl = await AsyncStorage.getItem("OnScreenUrl");
            setPinsData(pins);
            // setName(userDisplayName);
            // SetAvatar(userAvatarUrl);
            const response = await fetchUser(userid); // Call the fetchUserPins function with the user ID
            // Set pins data in the state
            setName(response.user.displayName);
            SetAvatar(response.user.avatarUrl);
            console.log("Pinscreens", response);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchData();
    }, [userid, isFocused]);

    
const Header = () => {

  return (
    <View style={styles.header}>
      <PinScreenBar>
        <PinScreenImage
          source={{ uri: images }}
          style={{ aspectRatio: ratio }}
        />
        {/*  USE THIS AREA FOR CLICKABLE VIEW TO GO TO PROFILE*/}
        <PinScreenToProfile onPress={handleToProfile}>
          <PinScreenToProfileImage
            source={{
              uri: AvatarUrl || "../../../assets/22_Profile.jpg",
            }}
          ></PinScreenToProfileImage>
          <PinScreenToProfileText>{name}</PinScreenToProfileText>
        </PinScreenToProfile>

        <PinScreenText>{title}</PinScreenText>
      </PinScreenBar>
    </View>
  );
};





  useFocusEffect(
    React.useCallback(() => {
      // Refresh your data when the screen comes into focus
      refetch();
    }, [])
  );




  const handleToProfile = () => {
    navigation.navigate("UserProfile", {
      UserId: userid,
    });
    //Include Next to Profile of the user
  };


 
  
  const Button = ({onPress}:any) => (
    <Views>
      <PinScreenButton onPress={handleBack}>
        <Ionicons name="ios-chevron-back-outline" size={35} color="white" />
      </PinScreenButton>
    </Views>
  );

  return (
    // <PinScreens>
    //   <ScrollView>
    //     <PinScreenBar>
    //       <PinScreenImage
    //         source={{ uri: images }}
    //         style={{ aspectRatio: ratio }}
    //       />
    //       {/*  USE THIS AREA FOR CLICKABLE VIEW TO GO TO PROFILE*/}
    //       <PinScreenToProfile onPress={handleToProfile}>
    //         <PinScreenToProfileImage
    //           source={{
    //             uri: AvatarUrl || "../../../assets/22_Profile.jpg",
    //           }}
    //         ></PinScreenToProfileImage>
    //         <PinScreenToProfileText>{name}</PinScreenToProfileText>
    //       </PinScreenToProfile>

    //       <PinScreenText>{title}</PinScreenText>
    //     </PinScreenBar>
    //   </ScrollView>
    //   {Button()}
    // </PinScreens>

   
      <View style={styles.container}>
        <Tabs.Container
          renderHeader={Header}
          headerHeight={HEADER_HEIGHT}
          snapThreshold={1}
          allowHeaderOverscroll
          lazy
          
        >
          <Tabs.Tab name="Create">
            <Tabs.MasonryFlashList
              data={pinsData} // Use the state variable to render the pins data
              numColumns={2}
              renderItem={({ item }) => <ProfPin pins={item} />}
              estimatedItemSize={200}
              disableAutoLayout={true}
              snapToAlignment="start"
            />
          </Tabs.Tab>
        </Tabs.Container>
        <Button onPress={handleBack} />
      </View>
    
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 250,
    width: "100%",
  },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
