import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreateEvent() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Event</Text>

      <TextInput style={styles.input} placeholder="Event Title" />
      <TextInput style={styles.input} placeholder="Event Location" />
      <TextInput style={styles.input} placeholder="Department" />
      <TextInput style={styles.input} placeholder="No. of Students" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Date and Time" />

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.btnText}>Add Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#0AA8A4",
  },
  input: {
    backgroundColor: "#F3F3F3",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  addBtn: {
    backgroundColor: "#0AA8A4",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
