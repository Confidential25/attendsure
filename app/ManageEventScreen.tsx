import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  label: string;
  value: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  value,
  options,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.dropdownTrigger}
        onPress={() => setIsVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.dropdownText, !selectedOption && styles.placeholderText]}>
          {selectedOption?.label || placeholder}
        </Text>
        <Ionicons 
          name="chevron-down" 
          size={20} 
          color="#64748B" 
        />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{label}</Text>
              <TouchableOpacity
                onPress={() => setIsVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#64748B" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    item.value === value && styles.optionItemSelected,
                  ]}
                  onPress={() => {
                    onSelect(item.value);
                    setIsVisible(false);
                  }}
                  activeOpacity={0.6}
                >
                  <Text
                    style={[
                      styles.optionText,
                      item.value === value && styles.optionTextSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {item.value === value && (
                    <Ionicons name="checkmark" size={20} color="#0A8A84" />
                  )}
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const EVENT_OPTIONS = {
  titles: [
    { label: "Orientation", value: "Orientation" },
    { label: "Seminar", value: "Seminar" },
    { label: "Workshop", value: "Workshop" },
    { label: "Conference", value: "Conference" },
    { label: "Training", value: "Training" },
  ],
  locations: [
    { label: "USTP DRER", value: "USTP DRER" },
    { label: "USTP Gym", value: "USTP Gym" },
    { label: "University Hall", value: "University Hall" },
    { label: "Auditorium", value: "Auditorium" },
    { label: "Conference Room A", value: "Conference Room A" },
  ],
  departments: [
    { label: "CITC", value: "CITC" },
    { label: "COE", value: "COE" },
    { label: "CAS", value: "CAS" },
    { label: "CEBA", value: "CEBA" },
    { label: "CED", value: "CED" },
  ],
  studentCounts: [
    { label: "50 students", value: "50" },
    { label: "100 students", value: "100" },
    { label: "159 students", value: "159" },
    { label: "200 students", value: "200" },
    { label: "300 students", value: "300" },
    { label: "500 students", value: "500" },
  ],
  dates: [
    { label: "August 10, 2025", value: "August 10, 2025" },
    { label: "September 5, 2025", value: "September 5, 2025" },
    { label: "October 1, 2025", value: "October 1, 2025" },
    { label: "November 15, 2025", value: "November 15, 2025" },
    { label: "December 20, 2025", value: "December 20, 2025" },
  ],
};

export default function ManageEventScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("Orientation");
  const [location, setLocation] = useState("USTP DRER");
  const [department, setDepartment] = useState("CITC");
  const [students, setStudents] = useState("159");
  const [date, setDate] = useState("August 10, 2025");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER WITH BACK BUTTON */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ATTENDSURE</Text>
        <Text style={styles.headerSubtitle}>Manage Event</Text>
      </View>

      {/* FORM CARD */}
      <View style={styles.card}>
        <CustomDropdown
          label="Event Title"
          value={title}
          options={EVENT_OPTIONS.titles}
          onSelect={setTitle}
        />

        <CustomDropdown
          label="Event Location"
          value={location}
          options={EVENT_OPTIONS.locations}
          onSelect={setLocation}
        />

        <CustomDropdown
          label="Department"
          value={department}
          options={EVENT_OPTIONS.departments}
          onSelect={setDepartment}
        />

        <CustomDropdown
          label="No. of Students"
          value={students}
          options={EVENT_OPTIONS.studentCounts}
          onSelect={setStudents}
        />

        <CustomDropdown
          label="Date and Time"
          value={date}
          options={EVENT_OPTIONS.dates}
          onSelect={setDate}
        />

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.btnText}>Edit Event</Text>
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

  /* HEADER */
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
    padding: 4,
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
    fontSize: 15,
    marginTop: 6,
    textAlign: "center",
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  /* INPUT GROUP */
  inputGroup: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 8,
    color: "#64748B",
    fontSize: 14,
    fontWeight: "600",
  },

  /* CUSTOM DROPDOWN TRIGGER */
  dropdownTrigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8FAFB",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 50,
  },

  dropdownText: {
    fontSize: 16,
    color: "#1E293B",
    fontWeight: "500",
    flex: 1,
  },

  placeholderText: {
    color: "#94A3B8",
  },

  /* MODAL STYLES */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "100%",
    maxWidth: 400,
    maxHeight: "70%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 10,
  },

  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },

  closeButton: {
    padding: 4,
  },

  /* OPTION ITEMS */
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  optionItemSelected: {
    backgroundColor: "#F0FDFA",
  },

  optionText: {
    fontSize: 16,
    color: "#475569",
    flex: 1,
  },

  optionTextSelected: {
    color: "#0A8A84",
    fontWeight: "600",
  },

  separator: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginHorizontal: 20,
  },

  /* BUTTON */
  addBtn: {
    backgroundColor: "#0A8A84",
    paddingVertical: 18,
    borderRadius: 14,
    marginTop: 20,
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