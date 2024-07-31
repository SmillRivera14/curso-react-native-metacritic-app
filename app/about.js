import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { HomeIcon } from "../components/Icons";
import { Screen } from "../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <View className="flex-row items-center mb-4 ">
          <Link asChild href="/">
            <Pressable>
              {({ pressed }) => (
                <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
              )}
            </Pressable>
          </Link>

          <Text className="pl-2 text-2xl font-bold text-white">
            Sobre el proyecto
          </Text>
        </View>

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
