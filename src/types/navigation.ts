import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";
import { DriverData } from "../api";

export enum ScreenNames {
  VariantOne = "Variant #1",
  VariantTwo = "Variant #2",

  DriverScreen = "DriverScreen",
  SingleDriverScreen = "SingleDriverScreen",
  RaceScheduleScreen = "RaceScheduleScreen",

  AnotherDriverScreen = "AnotherDriverScreen",

  EmptyScreen = "EmptyScreen",
}

export type VariantOneStackParamList = {
  [ScreenNames.DriverScreen]: undefined;
  [ScreenNames.SingleDriverScreen]: {
    driver: DriverData;
  };
  [ScreenNames.RaceScheduleScreen]: undefined;
};

export type VariantTwoStackParamList = {
  [ScreenNames.AnotherDriverScreen]: undefined;
};

export type RootBottomTabsParamList = {
  [ScreenNames.VariantOne]: StackScreenProps<VariantOneStackParamList>;
  [ScreenNames.VariantTwo]: StackScreenProps<VariantTwoStackParamList>;
};

export type VariantOneBottomTabsProps = BottomTabScreenProps<
  RootBottomTabsParamList,
  ScreenNames.VariantOne
>;

export type VariantTwoBottomTabsProps = BottomTabScreenProps<
  RootBottomTabsParamList,
  ScreenNames.VariantTwo
>;

export type DriverScreenProps = StackScreenProps<
  VariantOneStackParamList,
  ScreenNames.DriverScreen
>;
export type DriverScreenPropsNavigation = DriverScreenProps["navigation"];
export type DriverScreenPropsRoute = DriverScreenProps["route"];

export type SingleDriverScreenProps = StackScreenProps<
  VariantOneStackParamList,
  ScreenNames.SingleDriverScreen
>;
export type SingleDriverScreenNavigation =
  SingleDriverScreenProps["navigation"];
export type SingleDriverScreenRoute = SingleDriverScreenProps["route"];

export type RaceScheduleScreenProps = StackScreenProps<
  VariantOneStackParamList,
  ScreenNames.RaceScheduleScreen
>;
export type RaceScheduleScreenNavigation =
  RaceScheduleScreenProps["navigation"];
export type RaceScheduleScreenRoute = RaceScheduleScreenProps["route"];

export type AnotherDriverScreenProps = StackScreenProps<
  VariantTwoStackParamList,
  ScreenNames.AnotherDriverScreen
>;
export type AnotherDriverScreenPropsNavigation =
  AnotherDriverScreenProps["navigation"];
export type AnotherDriverScreenPropsRoute = AnotherDriverScreenProps["route"];
