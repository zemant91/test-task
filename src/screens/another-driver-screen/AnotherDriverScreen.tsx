import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  ListRenderItem,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from "react-native";

import { DriverData, getDrivers } from "../../api";
import { useNavigation } from "@react-navigation/native";
import {
  DriverScreenPropsNavigation,
  ScreenNames,
} from "../../types/navigation";

interface IAnotherDriverScreen {}

const AnotherDriverScreen: React.FC<IAnotherDriverScreen> = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [drivers, setDrivers] = useState<DriverData[]>([]);

  const navigation = useNavigation<DriverScreenPropsNavigation>();

  const getDriversData = async (page: number): Promise<void> => {
    try {
      const arrayOfDrivers = await getDrivers(page);
      setDrivers((prev) => [...prev, ...arrayOfDrivers]);
    } catch (e) {
      console.warn(e);
    } finally {
      setPageCount((prev) => prev + 1);
      setLoading(false);
    }
  };

  const handleItemPress = (item: DriverData) =>
    navigation.navigate(ScreenNames.SingleDriverScreen, { driver: item });

  const renderItem: ListRenderItem<DriverData> = ({ item }) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => handleItemPress(item)}
      >
        <Text>{`${item?.givenName} ${item?.familyName}`}</Text>
        <Text>Birthdate: {item?.dateOfBirth}</Text>
      </Pressable>
    );
  };

  useEffect(() => {
    getDriversData(pageCount);
  }, []);

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <FlatList
      keyExtractor={(item) => item.driverId}
      data={drivers}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <View style={styles.container}>
          <Text>Not found any data</Text>
        </View>
      }
      onEndReached={() => getDriversData(pageCount)}
      onEndReachedThreshold={0.3}
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

export default AnotherDriverScreen;
