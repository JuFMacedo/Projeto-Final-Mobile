import { View, Text, TextInput } from "react-native";
import React from "react";

export default function CreateMusic({
  novaMusica,
  setNovaMusica,
  autor,
  setAutor,
  genero,
  setGenero,
  cadastrar,
  buscarPorGenero,
}) {
  const [filtroGenero, setFiltroGenero] = useState("");

  const handleCadastrar = () => {
    if (!novaMusica || !autor || !genero) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    cadastrar();
  };

  const handleBuscarPorGenero = () => {
    buscarPorGenero(filtroGenero);
  };

  return (
    <View>
      <Text>Adicione sua música</Text>
      <TextInput keyboardType="" />
    </View>
  );
}
