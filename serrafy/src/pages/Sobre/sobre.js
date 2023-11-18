import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";

export default function Sobre() {
  const openGitHubbernardo = () => {
    Linking.openURL("https://github.com/BernardoChrist");
  };
  const openGitHubbernardoR = () => {
    Linking.openURL("https://github.com/YoloDesu");
  };
  const openGitHubcaique = () => {
    Linking.openURL("https://github.com/caiquelms");
  };
  const openGitHubestevao = () => {
    Linking.openURL("https://github.com/Estevao1323");
  };
  const openGitHubjulia = () => {
    Linking.openURL("https://github.com/JuFMacedo");
  };
  const openGitHubmarcos = () => {
    Linking.openURL("https://github.com/marcospavao");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.section}>
            <Text style={styles.sobre}>Sobre Nós</Text>
            <Text style={styles.sobrenos}>
              O projeto consiste na criação de um E-Commerce de Música chamado
              Serrafy, onde os usuários podem pesquisar e gerenciar músicas e
              álbuns. O aplicativo utiliza Componentes Funcionais e Hooks como
              useState e useEffect, axios para requisições HTTP e validações de
              entrada para garantir dados completos.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.dev}>Desenvolvedores</Text>
            <View style={styles.viewImage}>
              <TouchableOpacity onPress={openGitHubbernardo}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../../assets/bernardo.jpg")}
                    style={styles.circularImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.viewImage}>
              <TouchableOpacity onPress={openGitHubbernardoR}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../../assets/bernardoR.png")}
                    style={styles.circularImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.viewImage}>
              <TouchableOpacity onPress={openGitHubcaique}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../../assets/caique.png")}
                    style={styles.circularImage}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.viewImage}>
              <TouchableOpacity onPress={openGitHubestevao}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../../assets/estevao.jpg")}
                    style={styles.circularImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.viewImage}>
              <TouchableOpacity onPress={openGitHubjulia}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../../assets/julia.jpg")}
                    style={styles.circularImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.viewImage}>
              <TouchableOpacity onPress={openGitHubmarcos}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../../assets/marcos.jpg")}
                    style={styles.circularImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2f4f4f",
  },
  section: {
    marginBottom: 20,
    color: "white",
    alignItems: "center",
  },
  sobre: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    marginTop: 50,
  },
  dev: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  sobrenos: {
    fontSize: 16,
    color: "white",
  },

  viewImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "120",
    height: 120,
    borderRadius: 80,
    overflow: "hidden",
    backgroundColor: "#FFFDFD",
    margin: 10,
  },

  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#FFFDFD",
  },
  circularImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
