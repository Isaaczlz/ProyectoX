import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text, onPress, styleView, styleText }) {
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => console.log("Enviado")}
    >
      <View style={styleView ? styleView : styles.button}>
        <Text style={styleText ? styleText : styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#361f17",
    paddingVertical: 13,
    paddingHorizontal: 15,
    backgroundColor: "#a98f71",
    marginTop: 10,
  },
  buttonText: {
    color: "#3c231a",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 12,
    textAlign: "center",
    opacity: 0.8,
  },
});
