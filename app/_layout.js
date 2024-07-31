import { Pressable, View } from "react-native";
import { Link, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { CircleInfoICon } from "../components/Icons";

export default function Layaut() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoICon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
