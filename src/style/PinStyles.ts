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


//Pin PROFILE
export const Profile = styled.View`
    flex-direction: column;
    align-Items: center;
    justify-Content: center;
`;

export const ProfileImage = styled.Image`
 width: 200px;
 height: 200px;
 border-radius: 125px;
 top:45px;
`;

export const ProfileText  = styled.Text`
  padding-top: 50px;
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileEmailText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;



export const Logout = styled.View`
  margin-bottom: 20px;
  margin-right: 20px;
  top: 15px;
  left: 175px;
`;
export const LogoutButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-Content: center;
    align-Items: center;
`;



//PinScreen 
export const PinScreens = styled.SafeAreaView`
color: #000;
`; 
export const PinScreenBar = styled.View`
    height: 100%;
    backgroundColor: white;
    borderTopLeftRadius: 50px;
    borderTopRightRadius: 50px;
`;

export const PinScreenText = styled.Text`
    margin: 10px;
    fontSize: 24px;
    fontWeight: bold;
    textAlign: center;
    lineHeight: 35px; 
`;

export const PinScreenImage = styled.Image`
    width: 100%;
    borderTopLeftRadius: 50px;
    borderTopRightRadius: 50px;
`;

export const PinScreenButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    backgroundColor: rgba(0, 0, 0, 0.5);
    alignItems: center;
    justifyContent: center;
    position: absolute;
    left:15px;
    top:10px;
    `;


export const PinScreenToProfile = styled.Pressable`
   flex-direction: row;
   border-radius: 50px;
   margin: 10px;
`;

export const PinScreenToProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;

`;

export const PinScreenToProfileText = styled.Text`
color: black;
font-size: 18px;
font-weight: bold;
padding-left:8px
`;