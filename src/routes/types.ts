import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TRoutes = {
  "features-list": undefined;
  "volume-precision": { title: string };
};

export type TFeaturesListScreenProps = NativeStackScreenProps<
  TRoutes,
  "features-list"
>;

export type TVolumePrecisionScreenProps = NativeStackScreenProps<
  TRoutes,
  "volume-precision"
>;
