import { StyleSheet } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 0,
  },
  buttonStyle: {
    height: 70,
    width: 70,
    backgroundColor: "#BFC0C0",
    borderRadius: 100,
  },
  position: {
    top: -40,
    position: "relative",
    elevation: 100,
    alignContent: "center",
  },
   container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

});


export default styles;


