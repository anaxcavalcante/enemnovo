import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import Materias from "./src/screens/Materias";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela Inicial",
          }}
        />
        <Stack.Screen
          name="Materias"
          component={Materias}
          options={{
            title: "Matérias",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}