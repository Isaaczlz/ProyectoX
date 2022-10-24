import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";

const Button = (props) => {
  const { onPress, text, styleView, styleText } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styleView}>
        <Text style={styleText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

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

//defaultProps => Para las propiedades por default del componente
Button.defaultProps = {
  onPress: () => {
    console.log("Enviar Carta");
  },
  text: "ENVIAR",
  styleView: styles.button,
  styleText: styles.buttonText,
};

// PropTypes => Para que la propiedad "text" sea requerido obligatoriamente
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
