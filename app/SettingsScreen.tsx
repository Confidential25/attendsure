import React, { useContext, useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "./contexts/ThemeContext";

const SettingsScreen: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [logoutModal, setLogoutModal] = useState(false);

  const colors = {
    background: theme === "light" ? "#E3F4F4" : "#121212",
    header: theme === "light" ? "#6EC6CA" : "#1A1A1A",
    card: theme === "light" ? "#ffffff" : "#1E1E1E",
    text: theme === "light" ? "#000000" : "#ffffff",
    secondaryText: theme === "light" ? "#6EC6CA" : "#0A84FF",
    logoutText: "red",
    modalBackground: theme === "light" ? "#fff" : "#2A2A2A",
    overlay: "rgba(0,0,0,0.4)",
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.header }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>ATTENDSURE</Text>
        <Text style={[styles.headerSubtitle, { color: colors.text }]}>Track attendance with ease</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/921/921071.png" }}
          style={styles.avatar}
        />
        <Text style={[styles.profileName, { color: colors.text }]}>AttendSure</Text>
      </View>

      <View style={[styles.settingsBox, { backgroundColor: colors.card }]}>
        <TouchableOpacity style={styles.row}>
          <Text style={[styles.label, { color: colors.text }]}>Notifications</Text>
          <Text style={[styles.value, { color: colors.secondaryText }]}>ON</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={[styles.label, { color: colors.text }]}>Language</Text>
          <Text style={[styles.value, { color: colors.secondaryText }]}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={toggleTheme}>
          <Text style={[styles.label, { color: colors.text }]}>Theme</Text>
          <Text style={[styles.value, { color: colors.secondaryText }]}>
            {theme === "light" ? "Light mode" : "Dark mode"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={[styles.label, { color: colors.text }]}>About us</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.logoutButton, { backgroundColor: colors.card }]}
        onPress={() => setLogoutModal(true)}
      >
        <Text style={[styles.logoutText, { color: colors.logoutText }]}>Log out</Text>
      </TouchableOpacity>

      <Modal transparent visible={logoutModal} animationType="fade">
        <View style={[styles.modalOverlay, { backgroundColor: colors.overlay }]}>
          <View style={[styles.modalBox, { backgroundColor: colors.modalBackground }]}>
            <Text style={[styles.modalText, { color: colors.text }]}>Log out your account?</Text>

            <View style={styles.modalRow}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setLogoutModal(false)}>
                <Text style={[styles.cancelText, { color: colors.text }]}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.logoutBtn}>
                <Text style={[styles.logoutConfirm, { color: colors.logoutText }]}>LOG OUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingVertical: 30, paddingHorizontal: 20 },
  headerTitle: { fontSize: 22, fontWeight: "bold" },
  headerSubtitle: { fontSize: 13 },
  profileSection: { alignItems: "center", paddingVertical: 20 },
  avatar: { width: 90, height: 90, borderRadius: 100 },
  profileName: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  settingsBox: { marginHorizontal: 20, borderRadius: 15, paddingVertical: 10, elevation: 3 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, paddingHorizontal: 20, borderBottomWidth: 0.6, borderColor: "#dcdcdc" },
  label: { fontSize: 16 },
  value: { fontSize: 16 },
  logoutButton: { marginTop: 30, marginHorizontal: 30, paddingVertical: 12, borderRadius: 12, alignItems: "center", elevation: 2 },
  logoutText: { fontSize: 16, fontWeight: "bold" },
  modalOverlay: { flex: 1, justifyContent: "center", alignItems: "center" },
  modalBox: { width: "80%", padding: 20, borderRadius: 15 },
  modalText: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  modalRow: { flexDirection: "row", justifyContent: "space-between" },
  cancelBtn: { padding: 10 },
  cancelText: { fontSize: 16 },
  logoutBtn: { padding: 10 },
  logoutConfirm: { fontSize: 16, fontWeight: "bold" },
});
