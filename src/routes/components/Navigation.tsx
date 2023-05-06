import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeaturesListScreen, VolumePrecisionScreen } from "@/features";

import { TRoutes } from "../types";

const { Screen, Navigator } = createNativeStackNavigator<TRoutes>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="features-list"
          component={FeaturesListScreen}
          options={{ title: "React Native Gallery 🌉" }}
        />
        <Screen
          name="volume-precision"
          component={VolumePrecisionScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Navigator>
    </NavigationContainer>
  );
};
