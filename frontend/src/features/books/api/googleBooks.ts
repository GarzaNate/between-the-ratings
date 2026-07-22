import { Book } from "../types/book";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// console.log("API_KEY:", API_KEY); // Log the API key to verify it's being read correctly

export async function searchBooks(query: string): Promise<Book[]> {
  const response = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(query)}&key=${API_KEY}`,
  );

  if (!response.ok) {
    const error = await response.json();
    console.error("Error fetching books:", error);
    throw new Error(JSON.stringify(error));
  }

  const data = await response.json();

  if (!data.items) {
    return [];
  }

  return data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors || [],
    description: item.volumeInfo.description || "",
    publishedDate: item.volumeInfo.publishedDate || "",
    coverImage: item.volumeInfo.imageLinks?.thumbnail ?? "",
  }));
}
