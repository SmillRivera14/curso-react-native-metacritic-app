import { Stack } from "expo-router";
import { Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";
import { StatusBar } from "expo-status-bar";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Detalles de juego",
          headerRight: () => {},
        }}
      />
      <View>
        <StatusBar style="auto" />
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="items-center justify-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 249 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-2xl font-bold text-center text-white ">
                {gameInfo.title}
              </Text>
              <Text className="mt-4 mb-8 text-base text-left text-white/70">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
