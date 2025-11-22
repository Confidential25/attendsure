import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// ✅ Correct Type
type SettingItemProps = {
  icon: keyof typeof Ionicons.glyphMap;  // ← FIXED
  label: string;
  value?: string;
};

function SettingItem({ icon, label, value }: SettingItemProps) {
  return (
    <TouchableOpacity style={styles.settingItem}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={21} color="#1E293B" />
        <Text style={styles.itemLabel}>{label}</Text>
      </View>

      {value && <Text style={styles.itemValue}>{value}</Text>}
    </TouchableOpacity>
  );
}

export default function Settings() {
  const navigation = useNavigation(); // ← Add this

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>  {/* ← Updated */}
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Settings</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* PROFILE SECTION */}
      <View style={styles.profileBox}>
        <Image
          source={require("../assets/opaw.png")}
          style={styles.avatar}
        />

        <Text style={styles.profileName}>AttendSure</Text>
        <Text style={styles.profileEmail}>youremail@gmail.com</Text>
      </View>

      {/* SETTINGS LIST */}
      <View style={styles.settingsCard}>
        <SettingItem icon="person-outline" label="Edit profile information" />
        <SettingItem icon="notifications-outline" label="Notifications" value="ON" />
        <SettingItem icon="language-outline" label="Language" value="English" />
        <SettingItem icon="color-palette-outline" label="Theme" value="Light mode" />
        <SettingItem icon="information-circle-outline" label="About us" />
      </View>

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
    backgroundColor: "#FFFFFF",
  },

  /* ===== HEADER ===== */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
  },

  /* ===== PROFILE BOX ===== */
  profileBox: {
    backgroundColor: "#F1F5F9",
    paddingVertical: 25,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  profileEmail: {
    color: "#64748B",
    marginTop: 4,
  },

  /* ===== SETTINGS CARD ===== */
  settingsCard: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },

  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
  itemValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0A8A84",
  },

  /* ===== LOGOUT BUTTON ===== */
  logoutBtn: {
    backgroundColor: "#F1F5F9",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#EF4444",
  },
});
