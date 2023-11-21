import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../service/api";
import CreateMusic from "../../components/CreateMusic";
import Musica from "../../components/Musicas";
import axios from "axios";

export default function Musicas() {
  const [novaMusica, setNovaMusica] = useState("");
  const [musicas, setMusicas] = useState([]);
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [loading, setLoading] = useState(false);

  // const url = "https://65482e6add8ebcd4ab229f62.mockapi.io/serrafy";

  const carregarMusicasPorGenero = async (genero) => {
    setLoading(true);
    try {
      const response = await api.get(`?genero=${genero}`);
      console.log("Resposta da requisição carregarMusicasPorGenero:", response);
      setMusicas(response.data);
    } catch (error) {
      console.error("Erro na requisição carregarMusicasPorGenero:", error);
    } finally {
      setLoading(false);
    }
  };

  const cadastrar = async () => {
    const novaMusicaData = {
      nome: novaMusica,
      autor: autor,
      genero: genero,
    };

    try {
      const response = await api.post("", novaMusicaData);
      console.log("Resposta da requisição cadastrar:", response);
      setMusicas([...musicas, response.data]);
      setNovaMusica("");
      setAutor("");
      setGenero("");
    } catch (error) {
      console.error("Erro na requisição cadastrar:", error);
    }
  };

  const editarMusica = async (id) => {
    try {
      const response = await api.put(`/${id}`);
      console.log("Musica alterada com sucesso:", response);
      setMusicas(musicas.filter((musica) => musica.id !== id));
    } catch (error) {
      console.error("Erro na requisição editar Musica:", error);
    }
  };

  const excluirMusica = async (id) => {
    try {
      const response = await api.delete(`/${id}`);
      console.log("Resposta da requisição excluirMusica:", response);
      setMusicas(musicas.filter((musica) => musica.id !== id));
    } catch (error) {
      console.error("Erro na requisição excluirMusica:", error);
    }
  };

  useEffect(() => {
    carregarMusicasPorGenero(genero);
  }, [genero]);

  return (
    <ScrollView>
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <CreateMusic
            novaMusica={novaMusica}
            setNovaMusica={setNovaMusica}
            autor={autor}
            setAutor={setAutor}
            genero={genero}
            setGenero={setGenero}
            cadastrar={cadastrar}
            buscarPorGenero={carregarMusicasPorGenero}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>Sua Playlist</Text>
          {musicas.map((musica) => (
            <Musica
              key={musica.id}
              item={musica}
              editarMusica={editarMusica}
              excluirMusica={excluirMusica}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
