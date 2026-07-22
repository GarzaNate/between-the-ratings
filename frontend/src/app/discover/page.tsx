"use client";

import React, { useEffect, useState } from "react";
import { searchBooks } from "@/features/books/api/googleBooks";
import { Book } from "@/features/books/types/book";
// Need to create a search bar to test if API is working.

const DiscoverPage = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async () => {
    try {
      const results = await searchBooks(search);
      setBooks(results);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Discover</h1>

      <input
        type="text"
        placeholder="Search for books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>

      <div className="mt-8">
        {books.map((book) => (
          <div key={book.id} className="mb-4">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-gray-600">{book.authors.join(", ")}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DiscoverPage;
