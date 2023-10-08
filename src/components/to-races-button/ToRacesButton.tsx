import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  DriverScreenPropsNavigation,
  ScreenNames,
} from "../../types/navigation";

interface IToRacesButton {}

const ToRacesButton: React.FC<IToRacesButton> = () => {
  const navigation = useNavigation<DriverScreenPropsNavigation>();
  const handlePress = () => navigation.navigate(ScreenNames.RaceScheduleScreen);
  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Text>To Races</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 16,
  },
});

export default ToRacesButton;
