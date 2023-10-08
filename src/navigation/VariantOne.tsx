import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DriverScreen, RaceSchedule, SingleDriverScreen } from "../screens";
import { ScreenNames, VariantOneStackParamList } from "../types/navigation";
import { ToRacesButton } from "../components";

const { Navigator, Screen } = createStackNavigator<VariantOneStackParamList>();

const VariantOne: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name={ScreenNames.DriverScreen}
        component={DriverScreen}
        options={{
          title: "Drivers",
          headerRight: (props) => ToRacesButton(props),
        }}
      />
      <Screen
        name={ScreenNames.SingleDriverScreen}
        component={SingleDriverScreen}
      />
      <Screen
        name={ScreenNames.RaceScheduleScreen}
        component={RaceSchedule}
        options={{
          title: "Race Schedule",
        }}
      />
    </Navigator>
  );
};

export default VariantOne;
