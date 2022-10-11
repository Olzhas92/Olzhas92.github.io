import { StatusBar, SafeAreaView, View, StyleSheet } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    paddingTop: 10,
  },
});
