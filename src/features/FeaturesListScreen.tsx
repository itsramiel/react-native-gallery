import Ionicons from "@expo/vector-icons/Ionicons";
import { Screen } from "@/components";
import { TFeaturesListScreenProps, TRoutes } from "@/routes/types";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type TFeature = { name: string; route: keyof TRoutes };
const FEATURES: TFeature[] = [
  { name: "Volume Precision 🔈", route: "volume-precision" },
];
export const FeaturesListScreen = () => {
  const renderItem = (props: ListRenderItemInfo<TFeature>) => {
    return <FeatureItem {...props} />;
  };
  return (
    <Screen>
      <FlatList
        data={FEATURES}
        renderItem={renderItem}
        ItemSeparatorComponent={Seperator}
      />
    </Screen>
  );
};

const FeatureItem = ({ item }: ListRenderItemInfo<TFeature>) => {
  const navigation = useNavigation<TFeaturesListScreenProps["navigation"]>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("volume-precision", { title: item.name })
      }
      style={styles.itemContainer}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Ionicons name="chevron-forward-sharp" />
    </Pressable>
  );
};

const Seperator = () => <View style={styles.seperator} />;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    gap: 16,
    padding: 16,
  },
  itemText: {
    flex: 1,
    fontWeight: "bold",
  },
  seperator: {
    height: 1,
    backgroundColor: "#bbb",
  },
});
