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
import { useSelector } from "react-redux";

import { DriverData, getDrivers } from "../../api";
import { PaginationButtons } from "../../components";
import { selectors } from "../../store/slices";
import { useNavigation } from "@react-navigation/native";
import {
  DriverScreenPropsNavigation,
  ScreenNames,
} from "../../types/navigation";

interface IDriverScreen {}

const DriverScreen: React.FC<IDriverScreen> = () => {
  const { pageNumber } = useSelector(selectors.app);

  const [loading, setLoading] = useState<boolean>(true);
  const [drivers, setDrivers] = useState<DriverData[]>([]);

  const navigation = useNavigation<DriverScreenPropsNavigation>();

  const getDriversData = async (page: number): Promise<void> => {
    try {
      const arrayOfDrivers = await getDrivers(page);
      setDrivers(arrayOfDrivers);
    } catch (e) {
      console.warn(e);
    } finally {
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
    getDriversData(pageNumber);
  }, [pageNumber]);

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <>
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
      />
      <PaginationButtons />
    </>
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

export default DriverScreen;
