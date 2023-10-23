import React, { useEffect, useState } from "react";
import { View, StyleSheet, ListRenderItem, Alert,Text } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import {
  Logout,
  LogoutButton,
  ProfileEmailText,
  ProfileImage,
  ProfileText,
} from "../../style/PinStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMainScreenHooks } from "../Hooks/MainScreens";
import { NhostProvider, useNhostClient } from "@nhost/react";
import Pin from "../../comps/screen_mains/Pin";
import { useProfilePins } from "../../Cache/imageFetch";
import useAuthContext from "../../apis/useAuthContext";
import ProfPin from "../../comps/screen_mains/ProfPin";

const HEADER_HEIGHT = 400;

const DATA = [0, 1, 2, 3, 4];



const Header = () => {

  const { name, email, isLoading, url, handleLogout } = useMainScreenHooks();
  return (
    <View style={styles.header}>
      <Logout>
        <LogoutButton onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={45} />
        </LogoutButton>
      </Logout>
      <ProfileImage
        source={url ? { uri: url } : require("../../../assets/Image/dota2.jpg")}
      />

      <ProfileText>{isLoading ? "Loading..." : name}</ProfileText>
      <ProfileEmailText>{isLoading ? "Loading..." : email}</ProfileEmailText>
    </View>
  );
};

const Example: React.FC = () => {
const nhost = useNhostClient();
const userid = nhost.auth.getUser()?.id;

const [pinsData, setPinsData] = useState([]); // State variable to hold the pins data
const [isLoading, setIsLoading] = useState(true);
const [dataLoaded, setDataLoaded] = useState(false);
const [Loadings, setIsLoadings] = useState(true);
 
  console.log("ID",userid);
  console.log("LOGCHECK",pinsData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pins = await useProfilePins(userid);
        console.log("LOGCHECK1", pins);

        if (pins) {
          // Store the fetched pins data in the state variable
          setPinsData(pins);
        }

        setIsLoading(false);
        setDataLoaded(true);
      } catch (error) {
        setIsLoading(false);
        Alert.alert("Data Loading Error", "Data couldn't be loaded.", [
          { text: "OK", onPress: () => setIsLoading(false) },
        ]);
      }
    };

    fetchData();
  }, [userid]);

  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  return (
    <NhostProvider nhost={nhost}>
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
        <Tabs.Tab name="Pinned">
          <Tabs.ScrollView>
            <View style={[styles.box, styles.boxA]} />
            <View style={[styles.box, styles.boxB]} />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </NhostProvider>
  );
};

const styles = StyleSheet.create({
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

export default Example;
