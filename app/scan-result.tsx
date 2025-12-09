import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScanResultScreen() {
  const router = useRouter();
  const { qr } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanned Result</Text>

      <View style={styles.box}>
        <Text style={styles.data}>{qr || "No data found"}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/scan-qr")}
      >
        <Text style={styles.btnText}>Scan Again</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#999" }]}
        onPress={() => router.back()}
      >
        <Text style={styles.btnText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
  },
  box: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
  },
  data: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});
