import styled from "styled-components/native";

export const Masonlist = styled.View`
padding: 10px;
flex-Direction: "row";
`;

export const MasonColumn = styled.View`
  flex: 1;
`;


export const Image = styled.Image`
width: 100%;

aspect-ratio: 1;
`;

export const View = styled.TouchableOpacity`
  flex:1;
  alight-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Text = styled.TextInput`
 border-width: 1px;
 border-color:#DCCDCD;
 padding:5px;
 width: 100%;
 border-radius: 5px;
 margin-top: 5px;
`;

export const TextAreas = styled.Text`
  padding: 5px;
  justify-content: center;
  text-align: center;
  font-size:20px;
  font-weight: bold;
`;
