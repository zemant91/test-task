import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AnotherDriverScreen } from "../screens";
import { ScreenNames, VariantTwoStackParamList } from "../types/navigation";

const { Navigator, Screen } = createStackNavigator<VariantTwoStackParamList>();

const VariantTwo: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name={ScreenNames.AnotherDriverScreen}
        component={AnotherDriverScreen}
      />
    </Navigator>
  );
};

export default VariantTwo;
