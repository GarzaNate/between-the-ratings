"use client";

import { useState } from "react";
import { searchBooks } from "@/features/books/api/googleBooks";
import { Book } from "@/features/books/types/book";

import SearchBar from "@/features/books/components/SearchBar";
import BookGrid from "@/features/books/components/BookGrid";
import Navbar from "@/components/layout/Navbar";

export default function DiscoverPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  console.log("Discover page loaded");

  async function handleSearch(search: string) {
    setQuery(search);
    setError("");

    try {
      const results = await searchBooks(search);
      setBooks(results);
    } catch {
      setError("Unable to search for books.");
      setBooks([]);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Navbar />
      <section className="m-12">
        <h1 className="text-5xl font-bold">
          Discover Books
        </h1>

        <p className="mt-4 text-gray-500">
          Search millions of books by title, author, or keyword.
        </p>
      </section>

      <SearchBar onSearch={handleSearch} />

      {error && (
        <p className="mt-6 text-red-500">
          {error}
        </p>
      )}

      <BookGrid books={books} query={query} />
    </main>
  );
}