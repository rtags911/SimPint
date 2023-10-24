import { NavigatorScreenParams } from "@react-navigation/native";


declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        EntryStackParamList,
        MainBottomParamList{}
        
  }
}


export type RootStackParamList = {
  Entry: NavigatorScreenParams<EntryStackParamList> | undefined;
  Main: NavigatorScreenParams<MainBottomParamList> | undefined;
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
  Header: { id: string; images: string; title: string }| undefined;
};


export type MainBottomParamList = {
  Home: undefined;
  HomeScreen: undefined;
  Welcome: undefined;
};



