import React from "react";
import { View, Text, StyleSheet, TextInput ,KeyboardAvoidingView, Platform} from "react-native";
import { Divider } from "@rneui/base";

export const Views = () => {
        return (
          <View style={styles.container}>

            <KeyboardAvoidingView style={styles.topview}
              enabled={true}
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >


              <View style={styles.text}>

                <TextInput style={styles.Input} value="TODAY" />

                <Divider style = {styles.Divider}width={3} color="black"/>

                <TextInput style = {styles.Input1}value="TODAY TOMMROOW" />

              </View>

            </KeyboardAvoidingView>

            <View>
              <Text>HELLO WORLD</Text>
            </View>
          </View>
        );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topview: {
    width: "100%",
    height: "60%",
    backgroundColor: "blue",
    borderRadius: 30,
  },
  text: {
    flexDirection: "column",
   
    height: "50%",
    padding: 20,
    borderWidth: 1,
    top: 90,
  },
  Input: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    height: "50%",
    
    bottom: 10,
  },

  Input1: {
    borderWidth: 1,
    borderColor: "black",
    justifyContent:"center",
    height: "50%",
    
  },
  Divider: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-between",
  },
});
export default Views;