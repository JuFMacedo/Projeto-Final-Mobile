import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Musicas({ item, excluirMusica }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {item.nome} - {item.autor} - {item.genero}
      </Text>

      <View>
        <TouchableOpacity>
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
