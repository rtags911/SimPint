import React, { useEffect,useRef} from "react";

import { View, ActivityIndicator } from "react-native";
import LottieLoad from "../animated/loading";


export default function LottieSplash():JSX.Element  {


  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 100,
      }}
    >
      <ActivityIndicator size={150}></ActivityIndicator>
    </View>
  );
};

