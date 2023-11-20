import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Serrafy</Text>
    </View>
  );
};

export default function App() {
  const handleButtonPress = (buttonName) => {
    console.log(`Botão ${buttonName} pressionado!`);
    // Adicione sua lógica aqui
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Conteúdo da Página</Text>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Botão 1")}
        >
          <Text style={styles.buttonText}>Botão 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Botão 2")}
        >
          <Text style={styles.buttonText}>Botão 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Botão 3")}
        >
          <Text style={styles.buttonText}>Botão 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#3498db",
    paddingVertical: 45,
    alignItems: "center",
    marginHorizontal: -130,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingVertical: 2,
    marginHorizontal: -130,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    paddingVertical: 18,
  },
});
