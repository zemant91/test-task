import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from "react-native";

import { RaceData, getRaceSchedule } from "../../api";

interface IRaceScheduleScreen {}

const RaceScheduleScreen: React.FC<IRaceScheduleScreen> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [races, setRaces] = useState<RaceData[]>([]);

  const getRaces = async (): Promise<void> => {
    try {
      const arrayOfDrivers = await getRaceSchedule();
      setRaces(arrayOfDrivers);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  const renderItem: ListRenderItem<RaceData> = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{`${item?.raceName}`}</Text>
      </View>
    );
  };

  useEffect(() => {
    getRaces();
  }, []);

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <FlatList
      keyExtractor={(item) => item.raceName}
      data={races}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <View style={styles.container}>
          <Text>Not found any data</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: { flexGrow: 1 },
  itemContainer: {
    padding: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RaceScheduleScreen;
