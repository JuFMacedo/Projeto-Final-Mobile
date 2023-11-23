import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
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
      <Text style={styles.title}>
        {item.nome} - {item.autor} - {item.genero}
      </Text>
      <View>
        <TouchableOpacity onPress={navigate}>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => excluirMusica(item.id)}>
          <Text>Excluir</Text>
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
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
