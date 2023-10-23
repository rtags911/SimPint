import * as React from "react";
import { ScrollView, Text, StyleSheet ,Alert} from "react-native";
import MasonryList from "../../comps/MasonryList";
import {  NhostProvider } from "@nhost/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNhostClient } from "@nhost/react";
import { usePinsQuery } from "../../Cache/imageFetch";
import LottieLoad from "../../animated/loading";
import {View,} from '../../style/MainStyles';
import { useFocusEffect } from "@react-navigation/native";


function PinHome() {
 
// const [pins, setPins] = useState([]);
const nhost = useNhostClient();
  const {data:pins, isLoading,refetch} = usePinsQuery(nhost);
  const [Loadings, setIsLoadings] = useState(true);
  const [Loading,setIsLoading] =React.useState<boolean>(true);
const [dataLoaded, setDataLoaded] = useState(false);


  // const fetchPins = async () => {
  //   const userid = await nhost.auth.getUser()?.id;
  //   console.log('TBD',userid);
  //   try {
  

  //     const apiUrl =
  //       "https://kwivsrhgpywxqalkwedn.hasura.ap-southeast-1.nhost.run/api/rest/pins?id="+userid;
  //     const response = await axios.get(apiUrl);
  //     if (response.status === 200) {
  //       // If the request is successful, set the data in your state (or handle it as needed)
  //       setPins(response.data.pins);
  //       // You can also log the data to the console if needed
  //       console.log("Data retrieved:", response.data);
  //     } else {
  //       // Handle other status codes if needed
  //       console.error("Unexpected status code:", response.status);
  //       Alert.alert("Error fetching Pins");
  //     }
  //   } catch (error) {
  //     // Handle any errors that occur during the request.
  //     console.error("Error fetching Pins:", error);
  //     Alert.alert("Error fetching Pins");
  //   }
  // };

  // useEffect(() => {
  //   fetchPins();
  // }, []);
useFocusEffect(
  React.useCallback(() => {
    // Refresh your data when the screen comes into focus
    refetch();
  }, [])
);
  useEffect(() => {
    setTimeout(() => {
      // Replace this condition with your actual data loading logic
      // For example, check if you have successfully loaded your data
      if (isLoading == true) {
       setDataLoaded(true);
      }
      setIsLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);

  
useEffect(() => {
  if (!Loadings && !dataLoaded) {
    // Show an alert when data couldn't be loaded
    Alert.alert("Data Loading Error", "Data couldn't be loaded.", [
      { text: "OK", onPress: () => setIsLoading(false) },
    ]);
  }
}, [isLoading, dataLoaded]);




  return (
    <NhostProvider nhost={nhost}>
      {Loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <LottieLoad setIsLoading={setIsLoading} />
        </View>
      ) : dataLoaded ? (
        <MasonryList pins={pins} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <LottieLoad setIsLoading={setIsLoading} />
        </View>
      )}
      
       {/* // <LottieLoad setIsLoading={setIsLoading} /> */}
      
    </NhostProvider>
  );
  

}

export default PinHome;
