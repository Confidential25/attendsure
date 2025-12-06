import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QRScreen() {
  const { link } = useLocalSearchParams();

  const qrValue = Array.isArray(link)
    ? link[0]                 // if array → take first item
    : link || "https://docs.google.com/forms/u/0/";  

  return (
    <View style={styles.container}>
      <View style={styles.qrBox}>
        <QRCode value={qrValue} size={260} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    padding: 20,
  },
  qrBox: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
