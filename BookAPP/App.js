import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Constants from "expo-constants";

const API_URL = Constants.expoConfig.extra.API_URL;

export default function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      console.log("Fetching books from:", API_URL);
      const res = await fetch(API_URL);
      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Fetched books:", data);
      setBooks(data);
    } catch (err) {
      console.log("Fetching books from:", API_URL);
      console.log("Error in getBooks:", err);
      Alert.alert("Error", "Failed to fetch books from server");
    }
  };

  const addBook = async (name, price) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price: parseFloat(price) }),
      });
      const newBook = await res.json();
      setBooks([...books, newBook]);
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Failed to add book");
    }
  };

  const updateBook = async (id, name, price) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price: parseFloat(price) }),
      });
      const updatedBook = await res.json();
      setBooks(books.map((b) => (b.id === id ? updatedBook : b)));
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Failed to update book");
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setBooks(books.filter((b) => b.id !== id));
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Failed to delete book");
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book CRUD API</Text>
      <BookForm addBook={addBook} />
      <BookList books={books} updateBook={updateBook} deleteBook={deleteBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
