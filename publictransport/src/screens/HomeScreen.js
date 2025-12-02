import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { auth ,db } from "../services/firebase";

export default function HomeScreen({ navigation }) {
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user?.email}</Text>

      <TouchableOpacity
        style={styles.trackBtn}
        onPress={() => alert("Tracking screen coming soon!")}
      >
        <Text style={styles.trackText}>Track Bus</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => auth.signOut()}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  trackBtn: { backgroundColor: "blue", padding: 12, marginBottom: 10 },
  trackText: { color: "#fff", fontWeight: "bold" },
  logoutBtn: { backgroundColor: "red", padding: 12 },
  logoutText: { color: "#fff", fontWeight: "bold" },
});
