import * as React from "react";
import { ScrollView, Text, View, StyleSheet ,Alert} from "react-native";
import MasonryList from "../../comps/MasonryList";
import { NhostClient, NhostProvider } from "@nhost/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNhostClient } from "@nhost/react";



function PinHome() {
 
const [pins, setPins] = useState([]);
const nhost = useNhostClient();


  const fetchPins = async () => {
    const userid = await nhost.auth.getUser()?.id;
    console.log('TBD',userid);
    try {
    



      const apiUrl =
        "https://kwivsrhgpywxqalkwedn.hasura.ap-southeast-1.nhost.run/api/rest/pins?id="+userid;
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        // If the request is successful, set the data in your state (or handle it as needed)
        setPins(response.data.pins);
        // You can also log the data to the console if needed
        console.log("Data retrieved:", response.data);
      } else {
        // Handle other status codes if needed
        console.error("Unexpected status code:", response.status);
        Alert.alert("Error fetching Pins");
      }
    } catch (error) {
      // Handle any errors that occur during the request.
      console.error("Error fetching Pins:", error);
      Alert.alert("Error fetching Pins");
    }
  };

  useEffect(() => {
    fetchPins();
  }, []);

  return(
 <NhostProvider nhost={nhost}>
    <MasonryList pins={pins} />
 </NhostProvider>
  
  );
  

}

export default PinHome;
