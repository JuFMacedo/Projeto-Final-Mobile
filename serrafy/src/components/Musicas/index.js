import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

export default function Musicas({ item, excluirMusica }) {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6542c2e301b5e279de1f8bd8.mockapi.io/musicas"
        );
        const result = await response.json();
        setMusicas(result);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
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

  return (
    <View style={styles.container}>
      <FlatList
        data={musicas}
        keyExtractor={(musica) => musica.id.toString()}
        renderItem={renderItem}
      />
      {/* <View>
        <TouchableOpacity>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => excluirMusica(item.id)}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View> */}
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
