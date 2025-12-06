import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function EditProfile() {
  const [name, setName] = useState("AttendSure");
  const [email, setEmail] = useState("youremail@gmail.com");




  const handleSave = () => {
    // 👉 Here is where you'll integrate saving to DB or Firebase
    console.log("Saved:", { name, email });

    router.back(); // Go back to Settings
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>



      {/* Name */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput 
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {/* Email */}
      <Text style={styles.label}>Email Address</Text>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 60,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  saveBtn: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  saveText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
