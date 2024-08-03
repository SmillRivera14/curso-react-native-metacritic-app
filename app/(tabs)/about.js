import { Link, Stack } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";
import { StatusBar } from "expo-status-bar";

export default function About() {
  return (
    <Screen>
      <StatusBar style="light" />
      <ScrollView>
        {/* <View className="flex-row items-center mb-4 ">
        </View> */}

        <Text className="mb-4 text-white text-white/90">
          Claro, aquí tienes un texto Lorem Ipsum repetido 4 veces: Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
          vitae vestibulum. Curabitur ut libero non purus lacinia euismod. Donec
          non massa eget magna sagittis venenatis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>

        <Text className="mb-4 text-white text-white/90">
          Claro, aquí tienes un texto Lorem Ipsum repetido 4 veces: Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
          vitae vestibulum. Curabitur ut libero non purus lacinia euismod. Donec
          non massa eget magna sagittis venenatis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>

        <Text className="mb-4 text-white text-white/90">
          Claro, aquí tienes un texto Lorem Ipsum repetido 4 veces: Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
          vitae vestibulum. Curabitur ut libero non purus lacinia euismod. Donec
          non massa eget magna sagittis venenatis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>

        <Text className="mb-4 text-white text-white/90">
          Claro, aquí tienes un texto Lorem Ipsum repetido 4 veces: Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
          vitae vestibulum. Curabitur ut libero non purus lacinia euismod. Donec
          non massa eget magna sagittis venenatis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>

        <Text className="mb-4 text-white text-white/90">
          Claro, aquí tienes un texto Lorem Ipsum repetido 4 veces: Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
          vitae vestibulum. Curabitur ut libero non purus lacinia euismod. Donec
          non massa eget magna sagittis venenatis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>

        <Text className="mb-4 text-white text-white/90">
          Claro, aquí tienes un texto Lorem Ipsum repetido 4 veces: Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
          vitae vestibulum. Curabitur ut libero non purus lacinia euismod. Donec
          non massa eget magna sagittis venenatis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>

        <Text className="mb-4 text-white text-white/90">
          Claro, aquí tienes un texto Lorem Ipsum repetido 4 veces: Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
          vitae vestibulum. Curabitur ut libero non purus lacinia euismod. Donec
          non massa eget magna sagittis venenatis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>
      </ScrollView>
    </Screen>
  );
}
