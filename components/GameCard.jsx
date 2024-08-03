import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Animated } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { BlurView } from "expo-blur";

const StyledPressable = styled(Pressable);

export default function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="mb-4 group">
        <View className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            source={{ uri: game.image }}
            style={{ width: "100%", height: 500 }}
            resizeMode="cover"
            className="overflow-hidden"
          />

          <View className="absolute bottom-0 left-0 right-0 p-4">
            <BlurView intensity={70} style={styles.blurContainer} tint="dark">
              <Text className="text-xl font-bold text-white truncate">
                {game.title}
              </Text>

              <Text className="text-lg text-white/90 line-clamp-2">
                {game.description.slice(0, 70)}...
              </Text>
            </BlurView>
          </View>
        </View>
      </StyledPressable>
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
