import { Tabs } from "expo-router";
import { HomeIcon, InfoIcon } from "../../components/Icons";
import { Logo } from "../../components/Logo";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#ffee00",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          headerLeft: () => <Logo />,
          headerStyle: { backgroundColor: "black" },
          headerTitle: "",
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Acerca de",
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
          headerStyle: { backgroundColor: "black" },
          headerShown: true,
          headerTintColor: "white",
        }}
      />
    </Tabs>
  );
}
