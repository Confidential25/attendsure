import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InstructorScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  // Reset scan when screen loads
  useEffect(() => {
    setScanned(false);
  }, []);

  // Permission loading
  if (!permission) {
    return (
      <View style={styles.center}>
        <Text>Loading camera permissions...</Text>
      </View>
    );
  }

  // If permission not granted
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={{ marginBottom: 10 }}>
          We need your permission to use the camera
        </Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"]
        }}
        onBarcodeScanned={(barcode) => {
          if (!scanned && barcode?.data) {
            setScanned(true);
            console.log("QR SCANNED:", barcode.data);

            // Correct navigation to scan result page
            router.push({
              pathname: "/scan-result",
              params: { qr: barcode.data },
            });
          }
        }}
      />

      {scanned && (
        <TouchableOpacity
          style={styles.scanAgainButton}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.scanAgainText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  camera: { flex: 1, width: "100%" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    backgroundColor: "#1e40af",
    padding: 12,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  scanAgainButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
  },
  scanAgainText: { fontWeight: "bold" },
});
