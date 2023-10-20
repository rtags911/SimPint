import { NavigatorScreenParams } from "@react-navigation/native";


declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        EntryStackParamList,
        MainBottomParamList,
        ThirdTopParamList {}
  }
}


export type RootStackParamList = {
  Entry: NavigatorScreenParams<EntryStackParamList> | undefined;
  Main: NavigatorScreenParams<MainBottomParamList> | undefined;
  Third:NavigatorScreenParams<ThirdTopParamList> | undefined;
 
}
export type EntryStackParamList = {
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
  PinScreen:
    | { id: string; title: string; images: string; userid: string }
    | undefined;
  CreatePinScreen: { Images: string } | undefined;
  UserProfile: { UserId: string } | undefined;
  TopNav: undefined;
};


export type MainBottomParamList = {
  Home: undefined;
  HomeScreen: undefined;
  Welcome: undefined;
};



export type ThirdTopParamList = {
  Create: undefined;
  Pinned: undefined;
};


