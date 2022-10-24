import React from "react";
import { Alert, StyleSheet, Text, View, SafeAreaView } from "react-native";
import LoginForm from "../components/LoginForm";
import Button from "../components/Button";

const SettingsScreen = (props) => {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
      <Button
        text="ENVIAR DATOS"
        onPress={() => {
          Alert.alert("Chupamela");
        }} /*styleText={styles.buttonText}*/
      />
      {/* <Button text="Ir a inicio" onPress={() => goToPage("Inicio")} /> */}
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

export default SettingsScreen;
