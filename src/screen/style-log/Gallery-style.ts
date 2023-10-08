import React, { useState } from "react";
import styled from "styled-components/native";


export const ButtonRowView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 120%;

`;


export const TouchButton = styled.TouchableOpacity`
    background-color: #BFC0C0;
    height: 80px;
    width: 80px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const TouchButtonTitle = styled.Text`
    font-size:18;
    font-weight: bold;
    color: black;
    text-align: center;

`;


export const ViewContainer = styled.View `
flex:1;
padding-top:10;

`;
