import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmptyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Empty Screen</Text>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
