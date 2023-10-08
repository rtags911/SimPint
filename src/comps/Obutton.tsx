import React from "react";
import { View,Text } from "react-native";
import { Button1, Buttontext } from "../style/welcomestyle";




const Button = (props:any) => {
return (
    <Button1 onPress={props.onPress}>
            <Buttontext>{props.title}</Buttontext>
    </Button1>
);

}
