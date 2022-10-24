import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const Saludar = (props) => {
  const { firstName, lastName, edad, cumple } = props;
  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
};

Saludar.defaultProps = {
  firstName: "Isaac",
  lastName: "Gotta",
  edad: "22",
  cumple: "10 de Octubre",
};

Saludar.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Saludar;
