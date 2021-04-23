import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <StatusBar
        translucent
        animated
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.1)"
      />
      <Text style={styles.headerText}>Keep Notes</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FBBC04",
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
