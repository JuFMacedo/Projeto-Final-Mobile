import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Musicas({ route }) {
  const { musicType } = route.params;
  const [musicasSertanejo, setMusicasSertanejo] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState(null); //vai controlar a música selecionada
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://6542c2e301b5e279de1f8bd8.mockapi.io/musicas?genero=${musicType}`
        );
        const result = await response.json();
        setMusicasSertanejo(result);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, [musicType]);

  const openMusicDetail = (nome, autor, genero, image) => {
    setSelectedMusic({ nome, autor, genero, image }); // vai definir a música selecionada quando clicar no card
  };

  const closeMusicDetail = () => {
    setSelectedMusic(null); // Limpa a música selecionada para fechar os detalhes
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        openMusicDetail(item.nome, item.autor, item.genero, item.image)
      }
    >
      <View style={styles.cardDetails}>
        <Image source={{ uri: item.imagem }} style={styles.cardImage} />
        <Text style={styles.songName}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.listenNowText}>Ouça agora:</Text>
      <Ionicons name="play-circle" size={28} color="#fff" />
      <FlatList
        style={{ paddingTop: 20 }}
        data={musicasSertanejo}
        keyExtractor={(musica) => musica.id.toString()}
        renderItem={renderItem}
      />
      {selectedMusic && (
        <TouchableOpacity
          style={styles.selectedMusicContainer}
          onPress={closeMusicDetail}
        >
          <View style={styles.selectedMusicDetails}>
            <Text style={styles.songName}>{selectedMusic.nome}</Text>
            <Text style={styles.songInfo}>Cantor: {selectedMusic.autor}</Text>
            <Text style={styles.songInfo}>Álbum: {selectedMusic.genero}</Text>
            <Text style={styles.closeButton}>Fechar</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#010625",
  },

  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardDetails: {
    marginLeft: 12,
  },
  songName: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  songInfo: {
    fontSize: 14,
    color: "gray",
  },
  selectedMusicContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo para a tela de detalhes, para tela de trás ficar mais escura
  },
  selectedMusicDetails: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    top: "50%",
  },

  closeButton: {
    color: "blue",
    marginTop: 10,
  },

  listenNowText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    color: "#fff",
    marginBottom: 10,
  },
});
