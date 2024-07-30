import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Animated } from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StylePressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StylePressable className="p-4 mb-2 border border-black active:opacity-70 active:border-white/50 bg-gray-500/20 rounded-xl">
        <View key={game.slug} className="flex-row gap-4">
          <Image source={{ uri: game.image }} style={styles.image} />

          <View className="flex-shrink">
            <Text style={styles.title} className="mb-1">
              {game.title}
            </Text>

            <Score score={game.score} maxScore={100} />
            <Text className="flex-shrink mt-2" style={styles.description}>
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StylePressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
