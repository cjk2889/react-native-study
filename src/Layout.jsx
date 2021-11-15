import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// custom components
import Navbar from "./components/Navbar";
import LandingPage from "./pages/Landing.page";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <Navbar />
      <View style={styles.container}>
        {/* TODO react-navigation 으로 router 만들기 */}
        <LandingPage />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Layout;
