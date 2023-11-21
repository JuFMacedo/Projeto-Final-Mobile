import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect } from "react";

export default function Musicas({ item, excluirMusica }) {
  //   const [musicas, setMusicas] = useState([]);
  /*
    1- criar state para salvar a lista de musicas.
    2- criar um useEffect para buscar as musicas assim que a tela carregar.
    3- pegar as musicas carregadas e setar elas no useState.
*/

  //   const Item = ({ musica }) => (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{musica.nome}</Text>
  //     </View>
  //   );

  return (
    <View style={styles.container}>
      <Text>
        {item.nome} - {item.autor} - {item.genero}
      </Text>
      {/* <FlatList
        data={musicas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={Item}
      /> */}
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
  title: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
