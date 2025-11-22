import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Events() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Event History</Text>

        <TouchableOpacity>
          <Ionicons name="calendar-outline" size={24} color="#1E293B" />
        </TouchableOpacity>
      </View>

      {/* DROPDOWN + FILTER */}
      <View style={styles.filterRow}>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Orientation</Text>
          <Ionicons name="chevron-down" size={18} color="#64748B" />
        </View>

        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="filter-outline" size={20} color="#0A8A84" />
        </TouchableOpacity>
      </View>

      {/* EVENT LIST */}
      {[
        { name: "Orientation", time: "09:15 AM", percent: 80, color: "#BBF7D0" },
        { name: "Trailblazer", time: "No record", percent: 43, color: "#FECACA" },
        { name: "Mental Health Day", time: "09:12 AM", percent: 95, color: "#BBF7D0" },
        { name: "Week of Welcome", time: "No record", percent: 50, color: "#FECACA" },
        { name: "IT Day", time: "No record", percent: 70, color: "#FECACA" },
        { name: "Limpaydo!", time: "No record", percent: 60, color: "#FECACA" },
      ].map((item, index) => (
        <View key={index} style={styles.eventCard}>
          
          {/* ICON + EVENT NAME */}
          <View style={styles.eventInfo}>
            <View
              style={[
                styles.statusIcon,
                { backgroundColor: item.time === "No record" ? "#FEE2E2" : "#DCFCE7" },
              ]}
            >
              <Ionicons
                name={item.time === "No record" ? "close" : "checkmark"}
                size={18}
                color={item.time === "No record" ? "#EF4444" : "#10B981"}
              />
            </View>

            <View>
              <Text style={styles.eventName}>{item.name}</Text>
              <Text style={styles.eventTime}>{item.time}</Text>
            </View>
          </View>

          {/* PERCENTAGE BADGE */}
          <View style={[styles.percentBadge, { backgroundColor: item.color }]}>
            <Text style={styles.percentText}>{item.percent}%</Text>
          </View>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: "#FFFFFF",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
  },

  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  dropdown: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#F1F5F9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownText: {
    color: "#1E293B",
    fontSize: 16,
  },

  filterBtn: {
    backgroundColor: "#E0F7F6",
    padding: 12,
    borderRadius: 12,
    marginLeft: 12,
  },

  eventCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },

  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  eventName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
  eventTime: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },

  percentBadge: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignSelf: "center",
  },
  percentText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
  },
});
