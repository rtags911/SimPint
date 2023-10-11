import { NavigatorScreenParams } from "@react-navigation/native";


declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        EntryStackParamList,
        MainBottomParamList,
        SecStackParamList {}
  }
}


export type RootStackParamList = {
  Entry: NavigatorScreenParams<EntryStackParamList> | undefined;
  Main: NavigatorScreenParams<MainBottomParamList> | undefined;
  Second: NavigatorScreenParams<SecStackParamList> | undefined;  
};

export type EntryStackParamList = {
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
};


export type MainBottomParamList = {
  "Home": undefined;  
  HomeScreen: undefined;
};

export type SecStackParamList = {
  HomeScreen: undefined;
};

