import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import VariantOne from "./VariantOne";
import VariantTwo from "./VariantTwo";
import { RootBottomTabsParamList, ScreenNames } from "../types/navigation";

const { Navigator, Screen } =
  createBottomTabNavigator<RootBottomTabsParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name={ScreenNames.VariantOne} component={VariantOne} />
        <Screen name={ScreenNames.VariantTwo} component={VariantTwo} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
