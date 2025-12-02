import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { auth, db } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("passenger"); // default

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      await setDoc(doc(db, "users", userId), {
        email,
        role,
      });

      alert("Account created successfully!");
      navigation.navigate("Login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      {/* Select role (Driver or Passenger) */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === "passenger" && styles.active]}
          onPress={() => setRole("passenger")}
        >
          <Text>Passenger</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, role === "driver" && styles.active]}
          onPress={() => setRole("driver")}
        >
          <Text>Driver</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSignup}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "80%", padding: 10, borderWidth: 1, marginBottom: 10 },
  roleContainer: { flexDirection: "row", marginBottom: 10 },
  roleButton: { padding: 10, borderWidth: 1, marginHorizontal: 5 },
  active: { backgroundColor: "#ddd" },
  btn: { backgroundColor: "blue", padding: 12, marginTop: 10 },
  btnText: { color: "#fff", fontWeight: "bold" },
});
