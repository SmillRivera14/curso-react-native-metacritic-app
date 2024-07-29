import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const porcentaje = (score / maxScore) * 100;
    if (porcentaje < 40) return "bg-red-500";
    if (porcentaje < 65) return "bg-yellow-500";
    return "bg-green-500";
  };

  const className = getColors();

  return (
    <View
      className={`${className} w-8 h8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}
