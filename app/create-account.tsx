import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateAccount() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCreateAccount = () => {
    // ✅ Simple validation
    if (!name || !email || !password || !confirmPass) {
      Alert.alert("Missing Information", "Please fill in all fields.");
      return;
    }

    // ✅ Check password match
    if (password !== confirmPass) {
      Alert.alert("Password Error", "Passwords do not match.");
      return;
    }

    // ✅ Later: connect this to a backend or Firebase
    // Example for Firebase:
    // await createUserWithEmailAndPassword(auth, email, password);

    Alert.alert("Success", "Account created successfully!");

    // ✅ Navigate back to login
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join us and start tracking attendance</Text>

        {/* Card */}
        <View style={styles.card}>
          {/* Full Name */}
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="account-outline"
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="Enter your full name"
              style={styles.input}
              placeholderTextColor="#8a8a8a"
              value={name}
              onChangeText={setName}
            />
          </View>

          
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="Enter your Email"
              style={styles.input}
              placeholderTextColor="#8a8a8a"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <FontAwesome name="lock" size={20} style={styles.icon} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#8a8a8a"
              style={styles.input}
              secureTextEntry={!showPass}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <Pressable onPress={() => setShowPass(!showPass)}>
              <MaterialCommunityIcons
                name={showPass ? "eye-off-outline" : "eye-outline"}
                size={20}
              />
            </Pressable>
          </View>

          {/* Confirm Password */}
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputBox}>
            <FontAwesome name="lock" size={20} style={styles.icon} />
            <TextInput
              placeholder="Confirm your password"
              placeholderTextColor="#8a8a8a"
              style={styles.input}
              secureTextEntry={!showConfirm}
              value={confirmPass}
              onChangeText={setConfirmPass}
              autoCapitalize="none"
            />
            <Pressable onPress={() => setShowConfirm(!showConfirm)}>
              <MaterialCommunityIcons
                name={showConfirm ? "eye-off-outline" : "eye-outline"}
                size={20}
              />
            </Pressable>
          </View>

          {/* ✅ Create Account Button with Function */}
          <TouchableOpacity style={styles.signInBtn} onPress={handleCreateAccount}>
            <Text style={styles.signInText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Link href="/" asChild>
            <TouchableOpacity>
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const TEAL = "#0ea58a";

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 30,
    color: TEAL,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  subtitle: {
    color: "#777",
    marginBottom: 20,
  },
  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2b9df2",
    padding: 20,
    elevation: 4,
  },
  label: {
    fontSize: 13,
    color: "#555",
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 14,
    height: 44,
  },
  icon: {
    marginRight: 8,
    color: "#888",
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  signInBtn: {
    backgroundColor: TEAL,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  signInText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
  },
  footerText: {
    color: "#555",
  },
  loginText: {
    color: TEAL,
    fontWeight: "600",
  },
});
