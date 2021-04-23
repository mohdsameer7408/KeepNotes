import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const KeepButton = ({ style, children, color, onButtonPress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.floatingButtonContainer, ...style }}>
      <TouchableComponent useForeground onPress={onButtonPress}>
        <View style={{ ...styles.floatingAddButton, backgroundColor: color }}>
          {children}
        </View>
      </TouchableComponent>
    </View>
  );
};

export default KeepButton;

const styles = StyleSheet.create({
  floatingButtonContainer: {
    overflow: "hidden",
  },
  floatingAddButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
