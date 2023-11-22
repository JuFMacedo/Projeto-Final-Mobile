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

export default function Musicas({ route }) {
  const { musicType } = route.params;
  const [musicasRock, setMusicasRock] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://6542c2e301b5e279de1f8bd8.mockapi.io/musicas?genero=${musicType}`
        );
        const result = await response.json();
        setMusicasRock(result);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, [musicType]);

  const navigateToMusicDetail = (nomemusica, nomecantor, album, tempo) => {
    navigation.navigate("Sobre a música", {
      nomemusica,
      nomecantor,
      album,
      tempo,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigateToMusicDetail(
          item.nomemusica,
          item.nomecantor,
          item.album,
          item.tempo
        )
      }
    >
      {/* Se a API fornecer URLs de imagens usar: */}
      {/* <Image source={{ uri: item.imagem }} style={styles.cardImage} /> */}

      <View style={styles.cardDetails}>
        <Text style={styles.songName}>{item.nomemusica}</Text>
        <Text style={styles.songInfo}>
          Cantor: {item.nomecantor} - Álbum: {item.album}
        </Text>
        <Text style={styles.songInfo}>Duração: {item.tempo}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>{musicType} - Rock </Text>
      <FlatList
        data={musicasRock}
        keyExtractor={(musica) => musica.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d9d9d9",
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
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  cardDetails: {
    marginLeft: 12,
  },
  songName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  songInfo: {
    fontSize: 14,
    color: "gray",
  },
});
