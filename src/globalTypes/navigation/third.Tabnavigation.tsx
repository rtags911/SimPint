import React,{useState} from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PinnedScreen from "../../Main/screenTopTab/Pinned";
import CreateScreen from "../../Main/screenTopTab/Create";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";


const SomeThreshold = 100; // Set your threshold value


const Top = createMaterialTopTabNavigator();

const ThirdTab = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  const handleScroll = (event:any) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    if (scrollY > SomeThreshold && isTopBarVisible) {
      setIsTopBarVisible(false);
    } else if (scrollY <= SomeThreshold && !isTopBarVisible) {
      setIsTopBarVisible(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} onScroll={handleScroll}>
      
        <View style={{ flex: 1, width: "100%", height: "100%" }}>
          <Top.Navigator
            initialRouteName="Created"
            screenOptions={{
              tabBarStyle: { backgroundColor: "transparent" },
            }}
          >
            <Top.Screen name="Created" component={CreateScreen} />
            <Top.Screen name="Pinned" component={PinnedScreen} />
          </Top.Navigator>
        </View>
    
     
    </ScrollView>
  );
};

export default ThirdTab;
