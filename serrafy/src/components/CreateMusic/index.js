import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

export default function CreateMusic({
  novaMusica,
  setNovaMusica,
  autor,
  setAutor,
  genero,
  setGenero,
  cadastrar,
  buscarPorGenero,
}) {
  const [filtroGenero, setFiltroGenero] = useState("");

  const handleCadastrar = () => {
    if (!novaMusica || !autor || !genero) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    cadastrar();
  };

  const handleBuscarPorGenero = () => {
    buscarPorGenero(filtroGenero);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicione sua música</Text>
      <View>
        <TextInput
          style={styles.input}
          value={novaMusica}
          onChangeText={(newMusic) => setNovaMusica(newMusic)}
          placeholder="Nome da música"
          placeholderTextColor="#727171"
        />
        <TextInput
          style={styles.input}
          value={autor}
          onChangeText={(newAutor) => setAutor(newAutor)}
          placeholder="Autor"
          placeholderTextColor="#727171"
        />
        <TextInput
          style={styles.input}
          value={genero}
          onChangeText={(newGenero) => setGenero(newGenero)}
          placeholder="Genero"
          placeholderTextColor="#727171"
        />
        <TouchableOpacity onPress={handleCadastrar}>
          <Text>Adicionar Música</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Filtrar por gênero</Text>
        <TextInput
          style={styles.input}
          value={filtroGenero}
          onChangeText={(e) => setFiltroGenero(e)}
          placeholder="Digite o gênero da música"
          placeholderTextColor="#727171"
        />
        <TouchableOpacity onPress={handleBuscarPorGenero}>
          <Text>Buscar por Gênero</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#d9d9d9",
  },
  title: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
});
