import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreateEvent() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* HEADER WITH BACK BUTTON */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />

        </TouchableOpacity>
        <Text style={styles.headerTitle}>ATTENDSURE</Text>
        <Text style={styles.headerSubtitle}>Create New Event</Text>
      </View>

      {/* FORM */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Event Title</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter event title" 
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Event Location</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter location" 
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Department</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter department" 
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>No. of Students</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter number" 
            keyboardType="numeric" 
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date and Time</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Select date & time" 
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.btnText}>Add Event</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: "#F8FAFB",
  },

  /* HEADER STYLES */
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
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 24,
    left: 24,
    zIndex: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  headerSubtitle: {
    color: "#D1F2F0",
    marginTop: 6,
    fontSize: 15,
    textAlign: "center",
  },

  formContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    color: "#64748B",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#F8FAFB",
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    color: "#1E293B",
  },

  addBtn: {
    backgroundColor: "#0A8A84",
    paddingVertical: 18,
    borderRadius: 14,
    marginTop: 10,
    alignItems: "center",
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
  },
});
