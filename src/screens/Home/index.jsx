import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView style={styles.content}>
        <Text style={styles.titulo}>ENEM</Text>
        <Image
          style={styles.img}
          source={require("../../../assets/enem2024.jpg")}
        />
        <Text style={styles.texto}>
          Enem é a sigla de Exame Nacional do Ensino Médio, uma avaliação
          educacional criada pelo Ministério da Educação que serve como forma de
          ingresso nas instituições de ensino superior. O Enem foi criado,
          inicialmente, para avaliar o desempenho de estudantes que terminavam o
          ensino médio. Quando foi lançado pelo MEC, em 1998, o exame tinha como
          objetivo avaliar a qualidade do ensino brasileiro e refletir sobre
          como ele poderia ser melhorado. A partir de 2004, o Enem passou a ser
          usado como forma de ingresso em instituições de ensino superior.
        </Text>
        <View style={styles.botao}>
          <TouchableOpacity
            style={styles.botaoMenu}
            onPress={() => navigation.navigate("Materias")}
          >
            <Text style={styles.textoBotao}>Materias</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}