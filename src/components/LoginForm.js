import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const LoginForm = (props) => {
  // const [mail, setMail] = useState('')
  const { desing } = props;
  return (
    <View>
      <TextInput
        placeholder="Email"
        // onChangeText={(e)=>console.log(e)}
        {...desing}
      />
      <TextInput
        secureTextEntry
        password
        placeholder="Contraseña"
        textContentType="password"
        {...desing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    opacity: 0.4,
    width: 400,
  },
});

const textDesing = {
  style: styles.textInput,
  placeholderTextColor: "#cda469",
  textAlign: "center",
  cursorColor: "#cda469",
};

LoginForm.defaultProps = {
  desing: textDesing,
};

export default LoginForm;
