import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  titulo : {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#000080',
    textAlign: "center",
  },
  img: {
    width: 300,
    height: 100,
    borderRadius: 50,
    marginTop: 15,
  },
  texto: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: 20,
  },
  texto2: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    marginTop: 10,
  },
  botao: {
    alignItems: "center",
    marginTop: 10,
  },
  botaoMenu: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  textoBotao: {
    color: "white",
  },
});

export default styles;