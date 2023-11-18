import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  //const navigation = useNavigation();

  const mockUsername = "admin";
  const mockSenha = "123";

  const logar = () => {
    // Verificar se os campos estão vazios - o trim serve para eliminar os espaços vazios antes de uma string
    if (!username.trim() || !senha.trim()) {
      alert("Preencha todos os campos");
    } else if (username !== mockUsername || senha !== mockSenha) {
      // Verificar se o usuário e senha estão corretos - de acordo com os dados mockados
      alert("Usuário ou senha incorretos");
    } else {
      alert("Sucesso", "Login bem-sucedido");
      // Você pode navegar para a próxima página ou executar outras ações após o login
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={styles.viewImage}>
          <Image
            source={require("../../../assets/serrafylogo.png")}
            style={{ width: 125, height: 125 }}
          />
        </View>
        <Text style={styles.titulo}>Login</Text>
        <View style={styles.main}>
          <View style={styles.inputsMain}>
            <Text style={styles.textos}>Username</Text>
            <TextInput
              placeholder="Insira o username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholderTextColor="#727171"
              style={{
                height: 50,
                width: 250,
                borderColor: "gray",
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 30,
                paddingHorizontal: 10,
                fontSize: 15,
              }}
            />
            <Text style={styles.textos}>Senha:</Text>
            <TextInput
              placeholder="Insira a senha"
              keyboardType="numeric"
              value={senha}
              onChangeText={(text) => setSenha(text)}
              placeholderTextColor="#727171"
              style={{
                height: 50,
                width: 250,
                borderColor: "gray",
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 10,
                paddingHorizontal: 10,
                fontSize: 15,
              }}
            />
          </View>

          <TouchableOpacity onPress={logar} style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#004AAD",
    alignItems: "center",
    width: "100%",
  },
  viewImage: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop: -70,
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    backgroundColor: "#FFFDFD",
  },

  titulo: {
    color: "#FFFDFD",
    fontSize: 28,
    marginTop: 10,
    marginBottom: 30,
    fontWeight: "bold",
  },

  main: {
    backgroundColor: "#FFFDFD",
    width: 300,
    padding: 30,
    borderRadius: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  inputsMain: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
  },

  textos: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  botao: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#004AAD",
    width: 170,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 20,
  },

  textoBotao: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
