import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
//import api from "../../Service/api";
//import CreateMusic from "../../components/CreateMusic";

export default function Musicas() {
  const [novaMusica, setNovaMusica] = useState("");
  const [musicas, setMusicas] = useState([]);
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [loading, setLoading] = useState(false);

  // const carregarMusicasPorGenero = async (genero) => {
  //   setLoading(true);
  //   try {
  //     const response = await api.get(`?genero=${genero}`);
  //     console.log("Resposta da requisição carregarMusicasPorGenero:", response);
  //     setMusicas(response.data);
  //   } catch (error) {
  //     console.error("Erro na requisição carregarMusicasPorGenero:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const cadastrar = async () => {
  //   const novaMusicaData = {
  //     nome: novaMusica,
  //     autor: autor,
  //     genero: genero,
  //   };

  //   try {
  //     const response = await api.post(novaMusicaData);
  //     console.log("Resposta da requisição cadastrar:", response);
  //     setMusicas([...musicas, response.data]);
  //     setNovaMusica("");
  //     setAutor("");
  //     setGenero("");
  //   } catch (error) {
  //     console.error("Erro na requisição cadastrar:", error);
  //   }
  // };

  // const editarMusica = async (id) => {
  //   try {
  //     const response = await api.put(`/${id}`);
  //     console.log("Musica alterada com sucesso:", response);
  //     setMusicas(musicas.filter((musica) => musica.id !== id));
  //   } catch (error) {
  //     console.error("Erro na requisição editar Musica:", error);
  //   }
  // };

  // const excluirMusica = async (id) => {
  //   try {
  //     const response = await api.delete(`/${id}`);
  //     console.log("Resposta da requisição excluirMusica:", response);
  //     setMusicas(musicas.filter((musica) => musica.id !== id));
  //   } catch (error) {
  //     console.error("Erro na requisição excluirMusica:", error);
  //   }
  // };

  // useEffect(() => {
  //   carregarMusicasPorGenero(genero);
  // }, [genero]);

  return (
    <View>
      <Text>Em construção</Text>
      {/* <CreateMusic
        novaMusica={novaMusica}
        setNovaMusica={setNovaMusica}
        autor={autor}
        setAutor={setAutor}
        genero={genero}
        setGenero={setGenero}
        cadastrar={cadastrar}
        buscarPorGenero={carregarMusicasPorGenero}
      /> */}
    </View>
  );
}
