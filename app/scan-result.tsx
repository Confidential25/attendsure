import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ScanResultScreen() {
  const { qr } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanned Result</Text>
      <Text style={styles.data}>{qr}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  data: { fontSize: 20 },
});
