import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function BookForm({ addBook }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!name || !price) {
      Alert.alert("Error", "Name and Price are required");
      return;
    }
    addBook(name, price);
    setName("");
    setPrice("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Book Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Book" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});
