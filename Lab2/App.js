import {Button,Image, StyleSheet,Text,TouchableOpacity,View,} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Manager from "./components/screens/Manager";
import About from "./components/screens/About";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Manager" component={Manager} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const FirstScreen = (props) => {
  const nav = props.navigation;
  const list = [
    {
      masv: "PH27535",
      name: "Cuong to",
      image_url:
        "https://thuthuatnhanh.com/wp-content/uploads/2020/09/anh-lien-quan-nakroth-scaled.jpg",
    },
    {
      masv: "PH27535",
      name: "Cuong to",
      image_url:
      "https://www.bing.com/images/search?view=detailV2&ccid=8necnIla&id=26A436A833E1884E0BF471D10388D82909FB5761&thid=OIP.8necnIlaVRNPtTAhInyjCAHaEX&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f2779c9c895a55134fb53021227ca308%3frik%3dYVf7CSnYiAPRcQ%26riu%3dhttp%253a%252f%252fnhandaovadoisong.com.vn%252fwp-content%252fuploads%252f2019%252f05%252fhinh-anh-lien-quan-mobile-dep-nhat-lam-hinh-nen-26.jpg%26ehk%3dMj%252feszGc%252bSCMuuLurwgSV1hazElwbQvxfWG8AsMphTk%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=755&expw=1280&q=anh+lien+quan&simid=608016796593573576&FORM=IRPRST&ck=EEC0F5071C11B9671E7C58C30845BBA9&selectedIndex=11"
    },
  ];
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
        uri: "https://www.bing.com/images/search?view=detailV2&ccid=8necnIla&id=26A436A833E1884E0BF471D10388D82909FB5761&thid=OIP.8necnIlaVRNPtTAhInyjCAHaEX&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f2779c9c895a55134fb53021227ca308%3frik%3dYVf7CSnYiAPRcQ%26riu%3dhttp%253a%252f%252fnhandaovadoisong.com.vn%252fwp-content%252fuploads%252f2019%252f05%252fhinh-anh-lien-quan-mobile-dep-nhat-lam-hinh-nen-26.jpg%26ehk%3dMj%252feszGc%252bSCMuuLurwgSV1hazElwbQvxfWG8AsMphTk%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=755&expw=1280&q=anh+lien+quan&simid=608016796593573576&FORM=IRPRST&ck=EEC0F5071C11B9671E7C58C30845BBA9&selectedIndex=11",
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          nav.navigate("Manager", { list });
        }}
      >
        <Text style={styles.text}>Manager</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          nav.navigate("About", {
            masv: "PH27535",
            name: "Cuong to",
            image_url:
              "https://www.bing.com/images/search?view=detailV2&ccid=ocqoPmde&id=E0ADD6431A9022CEC1E3082B575022D00ECF9163&thid=OIP.ocqoPmdel-PaZCCnDHC-gQHaEX&mediaurl=https%3a%2f%2fimg2.thuthuatphanmem.vn%2fuploads%2f2019%2f01%2f26%2fnakroth-lien-quan_012329257.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a1caa83e675e97e3da6420a70c70be81%3frik%3dY5HPDtAiUFcrCA%26pid%3dImgRaw%26r%3d0&exph=754&expw=1280&q=anh+lien+quan&simid=608049137697718175&FORM=IRPRST&ck=8797234F700E50D1BA370F2E6D7DFB93&selectedIndex=3",
          });
        }}
      >
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 30,
    backgroundColor:"blue",
    
  },
  
  image:{
    width: 200,
          height: 200,
          borderWidth: 1,
          borderRadius: 15,
  }
});
