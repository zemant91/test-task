import React, { useEffect } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import {
  SingleDriverScreenNavigation,
  SingleDriverScreenRoute,
} from "../../types/navigation";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";

interface ISingleDriverScreen {}

const SingleDriverScreen: React.FC<ISingleDriverScreen> = () => {
  const {
    params: { driver },
  } = useRoute<SingleDriverScreenRoute>();
  const navigation = useNavigation<SingleDriverScreenNavigation>();

  useEffect(() => {
    navigation.setOptions({
      title: `${driver?.givenName} ${driver?.familyName}`,
    });
  });

  return (
    <View style={styles.container}>
      <Text
        style={styles.name}
      >{`${driver?.givenName} ${driver?.familyName}`}</Text>
      <Text>Birthdate: {driver?.dateOfBirth}</Text>
      <Text>Nationality: {driver?.nationality}</Text>
      {driver?.permanentNumber && (
        <Text>Permanent number: #{driver?.permanentNumber}</Text>
      )}
      {driver?.code && <Text>Driver code: {driver?.code}</Text>}
      <Text style={styles.details}>More details: </Text>
      <Text style={styles.link} onPress={() => Linking.openURL(driver?.url)}>
        {driver?.url}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  name: { fontSize: 32, fontWeight: "600", marginBottom: 12 },
  details: { fontSize: 20, marginTop: 12 },
  link: {
    color: "blue",
  },
});

export default SingleDriverScreen;
