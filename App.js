import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  // Button,
  TouchableHighlight,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Aquí hay una app</Text>

      <StatusBar style="light" />

      {/* <Button
        title="Pulsa aquí"
        onPress={() => alert('Hola')}
      /> */}

      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Hola")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "yellow",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black" }}>Pulsar aquí</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
