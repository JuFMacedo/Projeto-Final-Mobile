// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Sobre from "./src/pages/Sobre";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigate } from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate></StackNavigate>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Home />
    //   <Login />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
