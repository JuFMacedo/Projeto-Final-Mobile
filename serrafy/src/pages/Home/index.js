import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header}>Serrafy</Text>
      <Text style={styles.headerText}>
        Selecione o tipo de música desejado:
      </Text>
    </View>
  );
};

//Card das músicas:
const MusicCard = ({ musicType, imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.cardImage} />
      <Text style={styles.cardText}>{musicType}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const navigation = useNavigation();

  // const handleButtonPress = (buttonName) => {
  //   console.log(`Botão ${buttonName} pressionado!`);
  // };

  const navigateToMusicList = (musicType) => {
    //Colocar a página que quer que seja redirecionado
    navigation.navigate("MusicList", { musicType });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* Cards de música */}
          <MusicCard
            musicType="Rock"
            imageSource={require("../../../assets/music/rock.jpg")}
            onPress={() => navigateToMusicList("Rock")} //Trocar para lista correta
          />
          <MusicCard
            musicType="Eletrônica"
            imageSource={require("../../../assets/music/eletro.jpg")}
            onPress={() => navigateToMusicList("Eletro")} //Trocar para lista correta
          />
          <MusicCard
            musicType="Pop"
            imageSource={require("../../../assets/music/pop.jpg")}
            onPress={() => navigateToMusicList("Pop")} //Trocar para lista correta
          />
          <MusicCard
            musicType="HipHop"
            imageSource={require("../../../assets/music/hiphop.jpg")}
            onPress={() => navigateToMusicList("HipHop")} //Trocar para lista correta
          />

          <MusicCard
            musicType="Pagode"
            imageSource={require("../../../assets/music/pagode.png")}
            onPress={() => navigateToMusicList("Pagode")} //Trocar para lista correta
          />
          <MusicCard
            musicType="Sertanejo"
            imageSource={require("../../../assets/music/sertanejo.png")}
            onPress={() => navigateToMusicList("Sertanejo")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#010625",
    color: "white",
  },
  header: {
    backgroundColor: "#010625",
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: -130,
    color: "#fff",
    fontSize: 50,
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    justifyContent: "center",
    marginTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "20",
  },
  card: {
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: "40%",
  },
  cardImage: {
    width: 130,
    height: 130,
    marginBottom: 10,
    resizeMode: "cover",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
