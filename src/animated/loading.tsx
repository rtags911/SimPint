import React, { Dispatch,SetStateAction, useEffect, useRef } from "react";

import { View, ActivityIndicator, Alert } from "react-native";
import LottieView from "lottie-react-native";


interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function LottieLoad({setIsLoading}:SplashProps):JSX.Element {
  
  return (
    <LottieView
      source={require("../animated/Json/loadingdotswT.json")}
      autoPlay
      loop
      onAnimationFinish={() => setIsLoading(false)}
      style={{
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignSelf: "center",
      }}
    />
  );
}


