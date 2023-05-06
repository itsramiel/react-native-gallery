import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const EDGES = ["left", "right", "bottom"] as const;
export const Screen = ({ edges, style, ...props }: SafeAreaViewProps) => {
  return (
    <SafeAreaView
      edges={edges ?? EDGES}
      style={[styles.screen, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
