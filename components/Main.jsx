import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* primera forma de hacer que sea deslizable  */}
      <ScrollView>
        {games.map((game) => (
          <GameCard key={game.slag} game={game} />
        ))}
      </ScrollView>
    </View>
  );
}
