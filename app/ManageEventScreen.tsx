import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ManageEventScreen: React.FC = () => {
  const [title, setTitle] = useState<string>("Orientation");
  const [location, setLocation] = useState<string>("USTP DRER");
  const [department, setDepartment] = useState<string>("CITC");
  const [students, setStudents] = useState<string>("159");
  const [date, setDate] = useState<string>("August 10, 2025");

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.appName}>ATTENDSURE</Text>
        <Text style={styles.subText}>Track attendance {"\n"}with ease</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Title */}
        <Text style={styles.title}>Manage Event</Text>

        {/* CARD */}
        <View style={styles.card}>

          {/* EVENT TITLE */}
          <Text style={styles.label}>Event Title</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={title}
              onValueChange={(v) => setTitle(v)}
            >
              <Picker.Item label="Orientation" value="Orientation" />
              <Picker.Item label="Seminar" value="Seminar" />
              <Picker.Item label="Workshop" value="Workshop" />
            </Picker>
          </View>

          {/* LOCATION */}
          <Text style={styles.label}>Event Location</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={location}
              onValueChange={(v) => setLocation(v)}
            >
              <Picker.Item label="USTP DRER" value="USTP DRER" />
              <Picker.Item label="USTP Gym" value="USTP Gym" />
              <Picker.Item label="University Hall" value="University Hall" />
            </Picker>
          </View>

          {/* DEPARTMENT */}
          <Text style={styles.label}>Department</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={department}
              onValueChange={(v) => setDepartment(v)}
            >
              <Picker.Item label="CITC" value="CITC" />
              <Picker.Item label="COE" value="COE" />
              <Picker.Item label="CAS" value="CAS" />
            </Picker>
          </View>

          {/* STUDENT COUNT */}
          <Text style={styles.label}>No. of student</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={students}
              onValueChange={(v) => setStudents(v)}
            >
              <Picker.Item label="159" value="159" />
              <Picker.Item label="200" value="200" />
              <Picker.Item label="300" value="300" />
            </Picker>
          </View>

          {/* DATE */}
          <Text style={styles.label}>Date and Time</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={date}
              onValueChange={(v) => setDate(v)}
            >
              <Picker.Item label="August 10, 2025" value="August 10, 2025" />
              <Picker.Item label="September 5, 2025" value="September 5, 2025" />
              <Picker.Item label="October 1, 2025" value="October 1, 2025" />
            </Picker>
          </View>

          {/* BUTTON */}
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Edit Event</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#009879" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar" size={22} color="#777" />
          <Text style={styles.navText}>Event</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings" size={22} color="#777" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ManageEventScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },

  header: {
    backgroundColor: "#18a999",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 25,
  },

  appName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  subText: {
    color: "white",
    fontSize: 14,
    marginTop: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
    color: "#009879",
  },

  card: {
    marginTop: 20,
    marginHorizontal: 25,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    color: "#444",
  },

  dropdown: {
    backgroundColor: "#F3F3F3",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 6,
  },

  btn: {
    backgroundColor: "#18a999",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 25,
  },

  btnText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
  },

  navItem: { alignItems: "center" },

  navText: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  navTextActive: {
    fontSize: 12,
    color: "#009879",
    marginTop: 2,
  },
});
