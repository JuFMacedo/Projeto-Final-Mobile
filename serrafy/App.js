// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Sobre from "./src/pages/Sobre/sobre";
//import Login from "./src/pages/Login";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      {/* <Login /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
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
