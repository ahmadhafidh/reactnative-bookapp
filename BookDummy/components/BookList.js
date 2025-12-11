import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function BookList({ books, updateBook, deleteBook }) {
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <View>
      {books.map((book) => (
        <View key={book.id} style={styles.bookItem}>
          {editingId === book.id ? (
            <>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                value={price.toString()}
                onChangeText={setPrice}
                keyboardType="numeric"
              />
              <Button
                title="Save"
                onPress={() => {
                  updateBook(book.id, name, price);
                  setEditingId(null);
                }}
              />
            </>
          ) : (
            <>
              <Text>{book.name}</Text>
              <Text>${book.price}</Text>
              <Button
                title="Edit"
                onPress={() => {
                  setEditingId(book.id);
                  setName(book.name);
                  setPrice(book.price.toString());
                }}
              />
              <Button title="Delete" onPress={() => deleteBook(book.id)} />
            </>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bookItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 5, padding: 5 },
});
