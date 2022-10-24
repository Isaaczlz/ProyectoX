import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import Button from "../components/Button";
import Saludar from "../components/Saludar";

const HomeScreen = (props) => {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "Ramadhan-Mubarak": require("../../assets/fonts/Ramadhan-Mubarak.ttf"),
      Westcoast: require("../../assets/fonts/Westcoast.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <SafeAreaView />;
  }

  return (
    <SafeAreaView style={styles.container}>
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
      {/* <Saludar/>
      <Saludar firstName= "Flor" lastName= "Flandes" /> */}
      <Button text="Ir a login" onPress={() => goToPage("Login")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c231a",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
