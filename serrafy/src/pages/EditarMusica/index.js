import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import api from "../../service/api";

export default function EditarMusica({}) {
  const EditMusicModel = {
    id: null,
    nome: "",
    autor: "",
    genero: "",
    imagem: "",
  };

  const route = useRoute();
  const { id } = route.params;

  const [editMusicModel, setEditMusicModel] = useState(EditMusicModel);

  function handleEditMusicModel(value, key) {
    setEditMusicModel({
      ...editMusicModel,
      [key]: value,
    });
  }

  const editarMusica = async () => {
    try {
      const response = await api.put(
        `https://6542c2e301b5e279de1f8bd8.mockapi.io/musicas/${id}`,
        editMusicModel
      );
      alert("Musica alterada com sucesso:", response.status);
    } catch (error) {
      alert("Erro na requisição editar Musica:" + error + id);
    }
  };

  //  useEffect(() => {
  //    setEditMusicModel(state.item);
  //  }, [state]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edite sua música</Text>

      <View style={styles.inputs}>
        {/* <TextInput
          placeholder="Id da Música"
          value={editMusicModel.id}
          onChangeText={(value) => handleEditMusicModel(value, "id")}
          style={styles.input}
        /> */}
        <TextInput
          placeholder="Nome da Música"
          value={editMusicModel.nome}
          onChangeText={(value) => handleEditMusicModel(value, "nome")}
          style={styles.input}
        />
      </View>

      <View style={styles.inputs}>
        <TextInput
          placeholder="Autor da Música"
          value={editMusicModel.autor}
          onChangeText={(value) => handleEditMusicModel(value, "autor")}
          style={styles.input}
        />
      </View>

      <View style={styles.inputs}>
        <TextInput
          placeholder="Gênero Musical"
          value={editMusicModel.genero}
          onChangeText={(value) => handleEditMusicModel(value, "genero")}
          style={styles.input}
        />
        <TextInput
          placeholder="Imagem"
          value={editMusicModel.imagem}
          onChangeText={(value) => handleEditMusicModel(value, "imagem")}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={editarMusica}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#151515",
    color: "#fff",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
  },
  inputs: {
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    height: 40,
    fontSize: 20,
    marginLeft: 18,
    width: "100%",
    borderBottomWidth: 1,
    color: "#fff",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    color: "#fff",
  },
});
