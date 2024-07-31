import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  return (
    <Screen>
      <View>
        <Text className="mb-8 text-2xl font-bold text-white">
          Detalles del juego {gameslug}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atrás
        </Link>
      </View>
    </Screen>
  );
}
