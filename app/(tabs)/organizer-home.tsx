import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OrganizerHome() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER TOP BAR */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ATTENDSURE</Text>
        <Text style={styles.headerSubtitle}>Welcome back, Student</Text>
      </View>

      {/* EVENT CARD */}
      <View style={styles.eventCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.eventLabel}>Events</Text>
          <Text style={styles.eventTitle}>Orientation</Text>
        </View>

        <View style={styles.eventIcon}>
          <Ionicons name="calendar-outline" size={26} color="#0A8A84" />
        </View>
      </View>

      {/* TOTAL EVENT */}
      <View style={styles.statCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.statValue}>6</Text>
          <Text style={styles.statLabel}>Total Event</Text>
        </View>

        <View style={styles.statIconWrapper}>
          <Ionicons name="person-outline" size={23} color="#0A8A84" />
        </View>
      </View>

      {/* PRESENT & ABSENT */}
      <View style={styles.rowContainer}>
        <View style={styles.smallCard}>
          <Ionicons name="checkmark-circle" size={28} color="#0A8A84" />
          <Text style={styles.smallValue}>2</Text>
          <Text style={styles.smallLabel}>Present</Text>
        </View>

        <View style={styles.smallCard}>
          <Ionicons name="close-circle" size={28} color="#EF4444" />
          <Text style={styles.smallValue}>4</Text>
          <Text style={styles.smallLabel}>Absent</Text>
        </View>
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.quickTitle}>Quick Actions</Text>

      <TouchableOpacity style={styles.btnPrimary}>
        <Ionicons name="qr-code-outline" size={22} color="#fff" />
        <Text style={styles.btnText}>Scan QR Code</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecondary}>
        <Ionicons name="list-outline" size={22} color="#0A8A84" />
        <Text style={styles.btnSecondaryText}>Check Event</Text>
        <Ionicons name="chevron-forward" size={18} color="#0A8A84" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  /* HEADER BAR */
  header: {
    backgroundColor: "#0A8A84",
    paddingVertical: 35,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },
  headerSubtitle: {
    color: "#D3F2EF",
    marginTop: 5,
    fontSize: 15,
  },

  /* EVENT CARD */
  eventCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 3,
  },
  eventLabel: {
    color: "#6B7280",
    fontSize: 14,
    marginBottom: 4,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
  },
  eventIcon: {
    backgroundColor: "#E0F7F6",
    padding: 12,
    borderRadius: 10,
  },

  /* TOTAL EVENT CARD */
  statCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 2,
    alignItems: "center",
  },
  statValue: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1E293B",
  },
  statLabel: {
    color: "#6B7280",
    fontSize: 14,
    marginTop: 2,
  },
  statIconWrapper: {
    backgroundColor: "#E0F7F6",
    padding: 12,
    borderRadius: 12,
  },

  /* PRESENT / ABSENT */
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  smallCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 2,
  },
  smallValue: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 5,
    color: "#1E293B",
  },
  smallLabel: {
    fontSize: 14,
    color: "#6B7280",
  },

  /* QUICK ACTIONS */
  quickTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 12,
  },

  btnPrimary: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#0A8A84",
    borderRadius: 14,
    marginBottom: 12,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginLeft: 10,
  },

  btnSecondary: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    backgroundColor: "#fff",
  },
  btnSecondaryText: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginLeft: 10,
    color: "#0A8A84",
  },
});
