import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import * as Font from "expo-font";
import FlatButton from "./src/components/Button.js";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "Ramadhan-Mubarak": require("./assets/fonts/Ramadhan-Mubarak.ttf"),
      Westcoast: require("./assets/fonts/Westcoast.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 80,
          fontFamily: "Westcoast",
          color: "#a98f71",
          textShadowColor: "black",
          textShadowRadius: 16,
        }}
      >
        CowBoy
      </Text>
      <LoginForm />
      <FlatButton
        text="Enviar"
        onPress={() => {
          Alert.alert("Chupamela");
        }} /*styleText={styles.buttonText}*/
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c231a",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 1,
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
