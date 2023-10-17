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



export const Profile = styled.View`
   flex: 1;
    align-Items: center;
    justify-Content: center;
`;

export const ProfileImage = styled.Image`
 width: 200px;
 height: 200px;
 border-radius: 125px;
`;

export const ProfileText  = styled.Text`
  padding-top: 8px;
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileEmailText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;



export const Logout = styled.View`
    justify-Content: flex-end;    
    align-Items: flex-end;
    margin-Bottom: 20px;
    margin-Right: 20px;
    top: -100px;
    left: 175px;

`;
export const LogoutButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;

    border-radius: 25px;
    justify-Content: center;
    align-Items: center;
`;