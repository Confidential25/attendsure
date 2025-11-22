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
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ATTENDSURE</Text>
        <Text style={styles.headerSubtitle}>Welcome back, Organizer</Text>
      </View>

      {/* EVENT CARD */}
      <View style={styles.eventCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.eventLabel}>Active Event</Text>
          <Text style={styles.eventTitle}>Orientation</Text>
          <View style={styles.eventBadge}>
            <View style={styles.liveDot} />
            <Text style={styles.eventBadgeText}>Ongoing</Text>
          </View>
        </View>

        <View style={styles.eventIcon}>
          <Ionicons name="calendar-outline" size={28} color="#0A8A84" />
        </View>
      </View>

      {/* STUDENT COUNT */}
      <View style={styles.statCard}>
        <View style={styles.statIconWrapper}>
          <Ionicons name="people-outline" size={24} color="#0A8A84" />
        </View>
        <View style={styles.statContent}>
          <Text style={styles.statValue}>156</Text>
          <Text style={styles.statLabel}>Total Students</Text>
        </View>
      </View>

      {/* PRESENT & ABSENT */}
      <View style={styles.presenceRow}>
        <View style={styles.presenceCard}>
          <View style={styles.presenceIconBg}>
            <Ionicons name="checkmark-circle" size={24} color="#10B981" />
          </View>
          <Text style={styles.presenceNumber}>89%</Text>
          <Text style={styles.presenceLabel}>Present</Text>
        </View>

        <View style={styles.presenceCard}>
          <View style={[styles.presenceIconBg, styles.absentIconBg]}>
            <Ionicons name="close-circle" size={24} color="#EF4444" />
          </View>
          <Text style={styles.presenceNumber}>11%</Text>
          <Text style={styles.presenceLabel}>Absent</Text>
        </View>
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.quickTitle}>Quick Actions</Text>

      <TouchableOpacity style={styles.btnPrimary}>
        <Ionicons name="qr-code-outline" size={22} color="#fff" />
        <Text style={styles.btnText}>Scan QR Code</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" style={styles.btnChevron} />
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={styles.btnSecondary}
         onPress={() => router.push("/create-event")}
      >

        <Ionicons name="add-outline" size={22} color="#0A8A84" />
        <Text style={styles.btnSecondaryText}>Add New Event</Text>
        <Ionicons name="chevron-forward" size={18} color="#0A8A84" style={styles.btnChevron} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecondary}>
        <Ionicons name="settings-outline" size={22} color="#0A8A84" />
        <Text style={styles.btnSecondaryText}>Manage Event</Text>
        <Ionicons name="chevron-forward" size={18} color="#0A8A84" style={styles.btnChevron} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: "#F8FAFB",
  },
  header: {
    backgroundColor: "#0A8A84",
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#0A8A84",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: "#D1F2F0",
    marginTop: 6,
    fontSize: 15,
  },

  eventCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#0A8A84",
  },
  eventLabel: {
    color: "#64748B",
    fontSize: 13,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 6,
    color: "#1E293B",
  },
  eventBadge: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#10B981",
    marginRight: 6,
  },
  eventBadgeText: {
    color: "#059669",
    fontSize: 12,
    fontWeight: "600",
  },
  eventIcon: {
    backgroundColor: "#E0F7F6",
    padding: 14,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  statCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
    alignItems: "center",
  },
  statIconWrapper: {
    backgroundColor: "#E0F7F6",
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
  },
  statContent: {
    flex: 1,
  },
  statLabel: {
    color: "#64748B",
    fontSize: 14,
    marginTop: 2,
  },
  statValue: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E293B",
  },

  presenceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  presenceCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
    alignItems: "center",
  },
  presenceIconBg: {
    backgroundColor: "#DCFCE7",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  absentIconBg: {
    backgroundColor: "#FEE2E2",
  },
  presenceNumber: {
    fontSize: 26,
    marginTop: 4,
    fontWeight: "700",
    color: "#1E293B",
  },
  presenceLabel: {
    color: "#64748B",
    fontSize: 13,
    marginTop: 4,
  },

  quickTitle: {
    marginBottom: 14,
    fontWeight: "700",
    fontSize: 18,
    color: "#1E293B",
  },

  btnPrimary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A8A84",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#0A8A84",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
    flex: 1,
  },
  btnChevron: {
    marginLeft: "auto",
  },

  btnSecondary: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  btnSecondaryText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
    color: "#0A8A84",
    flex: 1,
  },
});