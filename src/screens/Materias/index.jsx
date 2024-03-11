import { View, Text, ScrollView } from "react-native";

import styles from "./styles";
import MateriasComponente from "../../components/MateriasComponente/MateriasComponente";

export default function Menu() {
  return (
    <View>
      <ScrollView>
        <Text style={styles.titulo}>Matérias</Text>
        <MateriasComponente
          nome="Matemática"
          imagem={require("../../../assets/matematica.jpg")}
          link="Matematica"
        />
        <MateriasComponente
          nome="Biologia"
          imagem={require("../../../assets/biologia.png")}
          link="Biologia"
        />
        <MateriasComponente
          nome="Física"
          imagem={require("../../../assets/fisica.png")}
          link="Fisica"
        />
      </ScrollView>
    </View>
  );
}