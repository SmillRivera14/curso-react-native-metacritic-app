import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export function Screen({ children }) {
  return (
    <View className="flex-1 px-2 pt-4 bg-[#292626]">
      <StatusBar style="light" />
      {children}
    </View>
  );
}
