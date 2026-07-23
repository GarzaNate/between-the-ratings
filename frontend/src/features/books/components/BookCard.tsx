import { Book } from "@/features/books/types/book";
import Image from "next/image";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border shadow transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-2/3 bg-gray-100">
        {book.coverImage ? (
          <Image
            src={book.coverImage}
            alt={book.title}
            width={200}
            height={300}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            No Cover
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold">{book.title}</h3>

        <p className="mt-2 text-sm text-gray-500">
          {book.authors.length ? book.authors.join(", ") : "Unknown Author"}
        </p>

        {book.publishedDate && (
          <p className="mt-2 text-xs text-gray-400">
            {book.publishedDate.slice(0, 4)}
          </p>
        )}
      </div>
    </article>
  );
};

export default BookCard;