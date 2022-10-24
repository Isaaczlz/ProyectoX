import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
      {/* <NavigationTab /> */}
      {/* <NavigationDrawer /> */}
    </NavigationContainer>
  );
};

export default App;
