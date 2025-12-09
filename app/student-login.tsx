import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import api from "../hooks/http"; // make sure path is correct

export default function StudentLoginScreen() {
  const router = useRouter();
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onPressLogin = async () => {
    if (!idNumber || !password) {
      Alert.alert("Error", "Please enter ID number and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("auth/token/login/", {
        id_number: idNumber,
        password: password,
      });

      const token = response.data?.auth_token;
      if (token) {
        // Save token to AsyncStorage
        await AsyncStorage.setItem("token", token);
        // Navigate to student-home
        router.replace("/(stabs)/student-home");
      }
    } catch (error) {
      console.log("Login error:", error);
      Alert.alert("Login Failed", "Invalid ID number or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoCircle}>
          <Ionicons name="shield-checkmark" size={40} color="#0A8A84" />
        </View>
        <Text style={styles.title}>ATTENDSURE</Text>
        <View style={styles.roleBadge}>
          <Ionicons name="school" size={16} color="#0A8A84" />
          <Text style={styles.subTitle}>Student Log in</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        {/* ID Number Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>ID Number</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="id-card-outline" size={20} color="#64748B" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={idNumber}
              onChangeText={setIdNumber}
              placeholder="Enter your ID number"
              autoCapitalize="none"
              keyboardType="default"
              placeholderTextColor="#94A3B8"
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#64748B" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="Enter your password"
              placeholderTextColor="#94A3B8"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#64748B" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.btnPrimary} onPress={onPressLogin} disabled={loading}>
          <Text style={styles.btnText}>{loading ? "Logging in..." : "Login"}</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: "#F8FAFB", minHeight: "100%" },
  header: { alignItems: "center", marginTop: 40, marginBottom: 40 },
  logoCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#E0F7F6", justifyContent: "center", alignItems: "center", marginBottom: 16 },
  title: { textAlign: "center", fontSize: 28, fontWeight: "800", color: "#1E293B", marginBottom: 12, letterSpacing: 0.5 },
  roleBadge: { flexDirection: "row", alignItems: "center", backgroundColor: "#E0F7F6", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, gap: 6 },
  subTitle: { color: "#0A8A84", fontSize: 15, fontWeight: "600" },
  formContainer: { backgroundColor: "#fff", padding: 24, borderRadius: 20 },
  inputGroup: { marginBottom: 20 },
  label: { marginBottom: 8, fontSize: 14, fontWeight: "600", color: "#1E293B" },
  inputWrapper: { flexDirection: "row", alignItems: "center", borderWidth: 2, borderColor: "#E2E8F0", borderRadius: 12, backgroundColor: "#F8FAFB" },
  inputIcon: { marginLeft: 14 },
  input: { flex: 1, padding: 14, fontSize: 15, color: "#1E293B" },
  eyeIcon: { padding: 14 },
  btnPrimary: { flexDirection: "row", backgroundColor: "#0A8A84", padding: 18, borderRadius: 14, alignItems: "center", justifyContent: "center", gap: 8 },
  btnText: { color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "600" },
});
