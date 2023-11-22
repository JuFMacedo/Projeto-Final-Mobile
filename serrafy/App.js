import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigate } from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate></StackNavigate>
    </NavigationContainer>
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
