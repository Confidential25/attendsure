import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AboutUs() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ABOUT US</Text>
      </View>

     


      {/* Description */}
      <Text style={styles.bodyText}>
        This Attendance QR System is designed to make class and event attendance
        fast, accurate, and secure. Instead of using manual logbooks or paper
        forms, students simply scan their unique QR code to record their
        attendance. The system automatically verifies, stores, and tracks
        attendance in real-time—helping schools reduce errors and save time.
        {"\n\n"}
        Our goal is to modernize attendance monitoring and support a more
        efficient and reliable experience for both students and faculty.
      </Text>

      {/* Footer */}
      <Text style={styles.footer}>© copyright S19 mobility pvt.ltd</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  backArrow: {
    fontSize: 26,
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  icon: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 20,
    resizeMode: "contain",
  },

  bodyText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    textAlign: "justify",
  },

  footer: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 12,
    color: "#777",
  },
});
