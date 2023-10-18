import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Divider } from "@rneui/base";

export const Views = () => {
        return (
          <View style={styles.container}>
            <View style={styles.topview}>
              <View style={styles.text}>
                <TextInput style={styles.Input} value="TODAY" />

                <Divider style = {styles.Divider}width={3} color="black"/>

                <TextInput style = {styles.Input1}value="TODAY TOMMROOW" />
              </View>
            </View>

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
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 60,
    padding: 20,
    top:90,
  },
  Input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
  },

  Input1: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    paddingTop: 20,
  },
  Divider: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-between",
  },
});
export default Views;