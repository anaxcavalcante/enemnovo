import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

const MateriasComponente = ({ nome, imagem, link }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.materias}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate(link)}
      >
        <Text style={styles.title}>{nome}</Text>
        <Image style={styles.img} source={imagem} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  materias: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  img: {
    width: 400,
    height: 200,
    left: 5,
  },
  botao: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default MateriasComponente;