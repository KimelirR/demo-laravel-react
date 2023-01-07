// import {useState, useEffect} from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import KeyFeatures from "./pages/KeyFeatures";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import AddBook from "./books/AddBook";
import api from "./api/api";

import "./App.css";
import Booklist from "./example/Booklist_original";

function App() {

  // const [books, setBooks] = useState([]);

  // //RetrieveBooks
  // const retrieveBooks = async () => {
  //   const response = await api.get("/books");
  //   return response.data;
  // };

  // const addBookHandler = async (book) => {
  //   console.log(book);
  //   const request = {
  //     ...book,
  //   };

  //   const response = await api.post("/books", request);
  //   console.log(response);
  //   setBooks([...books, response.data]);
  // };

  // const updateBookHandler = async (book) => {
  //   const response = await api.put(`/books/${book.id}`, book);
  //   const { id, name, email } = response.data;
  //   setBooks(
  //     books.map((book) => {
  //       return book.id === id ? { ...response.data } : book;
  //     })
  //   );
  // };

  // const removeBookHandler = async (id) => {
  //   await api.delete(`/books/${id}`);
  //   const newBookList = books.filter((book) => {
  //     return book.id !== id;
  //   });

  //   setBooks(newBookList);
  // };

  // useEffect(() => {
  //   const getAllBooks = async () => {
  //     const allBooks = await retrieveBooks();
  //     if (allBooks) setBooks(allBooks);
  //   };
  //   getAllBooks();
  // }, []);

  // useEffect(() => {
  // }, [books]);


  return (
    <div className="containery">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<KeyFeatures/>}/>
        <Route path='/books' element={<Pricing/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/add-book' element={<AddBook/>} />
        <Route path='/book/list' element={<Booklist/>} />
      </Routes>
    </div>
  );
}

export default App;
