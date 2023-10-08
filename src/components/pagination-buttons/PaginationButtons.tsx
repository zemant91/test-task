import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { actions, selectors } from "../../store/slices";

interface IPaginationButtons {}

const PaginationButtons: React.FC<IPaginationButtons> = () => {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector(selectors.app);

  const nextButtonHandler = () => {
    dispatch(actions.nextPage());
  };

  const prevButtonHandler = () => {
    dispatch(actions.prevPage());
  };
  return (
    <View style={styles.buttonContainer}>
      {pageNumber > 1 ? (
        <Pressable style={styles.button} onPress={prevButtonHandler}>
          <Text>Prev</Text>
        </Pressable>
      ) : (
        <View />
      )}
      <Pressable style={styles.button} onPress={nextButtonHandler}>
        <Text>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    bottom: 0,
  },
  button: {
    padding: 16,
    backgroundColor: "lightgreen",
    borderRadius: 12,
    margin: 12,
  },
});

export default PaginationButtons;
