import React, { useState } from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const SettingsScreen: React.FC = () => {
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ATTENDSURE</Text>
        <Text style={styles.headerSubtitle}>Track attendance with ease</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/921/921071.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.profileName}>AttendSure</Text>
      </View>

      <View style={styles.settingsBox}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Notifications</Text>
          <Text style={styles.value}>ON</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Language</Text>
          <Text style={styles.value}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Theme</Text>
          <Text style={styles.value}>Light mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>About us</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setLogoutModal(true)}
      >
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>

      <Modal transparent visible={logoutModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Log out your account?</Text>

            <View style={styles.modalRow}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setLogoutModal(false)}
              >
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.logoutBtn}>
                <Text style={styles.logoutConfirm}>LOG OUT</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#E3F4F4",
  },

  header: {
    backgroundColor: "#6EC6CA",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  headerSubtitle: {
    fontSize: 13,
    color: "#f0f0f0",
  },

  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },

  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  settingsBox: {
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    paddingVertical: 10,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0.6,
    borderColor: "#dcdcdc",
  },

  label: {
    fontSize: 16,
  },

  value: {
    fontSize: 16,
    color: "#6EC6CA",
  },

  logoutButton: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
  },

  logoutText: {
    fontSize: 16,
    color: "red",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },

  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },

  modalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cancelBtn: {
    padding: 10,
  },

  cancelText: {
    fontSize: 16,
    color: "gray",
  },

  logoutBtn: {
    padding: 10,
  },

  logoutConfirm: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
});