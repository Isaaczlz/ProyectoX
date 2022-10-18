import React from "react";
import { TextInput, Text, View, StyleSheet, FlexStyle } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput
        style={{
          fontSize: 15,
          color: "#fff",
          fontWeight: "bold",
          opacity: 0.4,
          width: 400,
        }}
        autoFocus
        placeholder="Email"
        placeholderTextColor={"#cda469"}
        textAlign="center"
        cursorColor={"#cda469"}
      />
      <TextInput
        style={{
          fontSize: 15,
          color: "#fff",
          fontWeight: "bold",
          opacity: 0.4,
          width: 400,
        }}
        secureTextEntry
        password
        placeholder="Contraseña"
        placeholderTextColor={"#cda469"}
        textAlign="center"
        textContentType="password"
        cursorColor={"#cda469"}
      />
    </View>
  );
}
