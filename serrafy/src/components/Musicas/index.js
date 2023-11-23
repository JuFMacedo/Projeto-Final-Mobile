import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import EditarModal from "../../ActionModal/editarModal";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Musicas({ item, excluirMusica, state }) {
  const [exibirModal, setExibirModal] = useState(false);
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate("EditarMusica");
  };

  return (
    <View style={styles.container}>
      <View style={styles.musica}>
        <View>
          <Image source={{ uri: item.imagem }} style={styles.cardImage} />
        </View>
        <View style={styles.titles}>
          <Text style={styles.title}>{item.nome}</Text>
          <Text>Cantor: {item.autor}</Text>
          <Text>Gênero: {item.genero}</Text>
        </View>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity onPress={navigate} style={styles.botao}>
          <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => excluirMusica(item.id)}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEBEB",
    width: "90%",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "orange",
  },

  botoes: {
    flexDirection: "row",
    width: "90%",
    paddingTop: 5,
    paddingBottom: 5,

    alignItems: "center",
    justifyContent: "center",
  },

  botao: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#010625",
    width: 100,
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 20,
  },

  textoBotao: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },

  musica: {
    flexDirection: "row",
    width: "90%",
    paddingTop: 5,
    paddingBottom: 5,
  },

  titles: {
    paddingLeft: 10,
  },

  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#010625",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 17,
    color: "#010625",
  },

  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#010625",
  },
});
