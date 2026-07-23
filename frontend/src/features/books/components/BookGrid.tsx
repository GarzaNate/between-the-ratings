import { Book } from "../types/book";
import BookCard from "./BookCard";

interface BookGridProps {
  books: Book[];
  query: string;
}

export default function BookGrid({ books, query }: BookGridProps) {
  if (!query) {
    return (
      <p className="mt-10 text-gray-500">Search for a book to get started.</p>
    );
  }

  if (books.length === 0) {
    return <p className="mt-10">No books found.</p>;
  }

  return (
    <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
