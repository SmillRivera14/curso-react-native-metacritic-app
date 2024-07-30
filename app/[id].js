import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View className="items-center justify-center flex-1">
      <View>
        <Text className="mb-8 text-2xl font-bold text-white">
          Detalles del juego
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atrás
        </Link>
      </View>
    </View>
  );
}
