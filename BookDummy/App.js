// App.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([
    { id: 1, name: "Harry Potter", price: 20 },
    { id: 2, name: "Lord of the Rings", price: 25 },
    { id: 3, name: "Game of Thrones", price: 25 },
  ]);

  const getBooks = () => books;

  const addBook = (name, price) => {
    const newBook = { id: Date.now(), name, price: parseFloat(price) };
    setBooks([...books, newBook]);
  };

  const updateBook = (id, name, price) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, name, price: parseFloat(price) } : b
      )
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book CRUD Dummy</Text>
      <BookForm addBook={addBook} />
      <BookList books={books} updateBook={updateBook} deleteBook={deleteBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
